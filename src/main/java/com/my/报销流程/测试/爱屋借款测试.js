// <script type='text/javascript'>
$(function() {
	$("[name='mongoKey']").val("AwLoanNoIncrementKey");
	$("[name='processType']").val("FYJK");
	$("[name='emailKey']").val("借款");
	changeTableProperties();
	addOnChangeEvent();
	setBussinessOption();
	changeLoanTypeShowOrHide();
	changeCurrency();
	//给第一行给标记
	giveDiYiHangBiaoJi();
	isProjectReimb("[name='select_BJ5k']");
	changeEditByBussiness("[name='bussiness_name']");
	changeSubsidyDateShowOrHide("[name='bussiness_name']");
	changeHiddenByActivity();
	setPropertiesByType();
	// setIsBudgetUnlockByActivityName();
	setPayeesInfoShowOrHide();
	judgeIsPurchaseOrderInSAP("select_yZGh");
});

function check_before_submit() {
	$("[name='isBudgetFreeze']").val("1");
	$("[name='isPayBeforeTrail']").val("0");
	var activityName = $("#activityName").val();
	if (common.isMobile() && activityName == '申请人填写') {
		layer.alert("该流程发起环节只能在PC端进行提交,请勿使用手机提交");
		return false;
	}
	var costAttribution = $("[name='costAttribution']").val();
	var activityName = $("#activityName").val();
	var total = parseFloat($("[name='total']").val());
	total = isNaN(total) ? 0 : total;
	if (activityName == '申请人填写') {
		cleanPayeesInfoByCondition();
		var flag = getCostCenterBudget();
		if (!flag) {
			return;
		}
		//var flag1 = judgeSameCompanyOrNot();
		var falg2 = judgeIsOverBudget();
		var flag3 = queryDateConfigureInfo();
		var flag4 = setStartProcessApprovalByBussinessName();
		var flag5 = judgeExistInBlacklist();
		var flag6 = judgeAmountIsOverCheckAmount();
		//var flag7 = getWerksIsFrozen();
		var flag8 = judgePayeeTypeIsTrue();
		//var flag6 = judgeTotalEqualTaxAndOrderMoney();
		if (total <= 0) {
			layer.msg("借款时,请保证实际借款金额不为0,请重新确认", {
				icon: 2
			});
			return false;
		}
		if (falg2 && flag3 && flag4 && flag5 && flag6 && flag8) {
			setApprovalPower();
			//setLinkHandlerBySubclass("[name='bussiness_name']");
			getVoucherMakerAndAuditer();
			createRBNoInForm();
			getPerCapitaAmount();
			NumberFormat();
			setCheckAmount();
			return true;
		} else {
			return false;
		}
	} else
		return queryDateConfigureInfo();
}

//发起人申请报销时间及提交到财务环节时间判断
function queryDateConfigureInfo() {
	var companyCode = $("[name='companyCode']").val();
	var activityName = $("#activityName").val();
	var sysDate = (new Date()).getDate();
	var FinancedateStr = 0;
	//财务审核日期
	var BusdateStr = 0;
	//业务审核日期
	var flag = false;
	var yesOrNo = "";
	var month = (new Date()).getMonth() + 1;
	var pageType = $("#pageType").val();
	//中间业务审核环节
	var activityArr = ["部门经理审批", "项目经理审批", "子公司总经理/中心总监审批", "项目总监审批", "副总裁审批", "职能联签"];
	$.ajax({
		url: common.getPath() + '/LYFSynRB/queryDateConfigureInfo?companyCode=' + companyCode + '&month=' + month,
		type: 'get',
		contentType: "application/json;charset=utf-8",
		async: false,
		success: function(result) {
			if (result.code == '0') {
				FinancedateStr = result.data.dateOfAppl;
				FinancedateStr = isNaN(FinancedateStr) ? 0 : FinancedateStr;
				BusdateStr = result.data.dateOfSub;
				BusdateStr = isNaN(BusdateStr) ? 0 : BusdateStr;
				yesOrNo = result.data.extrea
			} else {
				layer.msg("公司编码:" + companyCode + "未进行报销时间控制,请联系财务及时修正！");
				flag = false;
				return flag;
			}
			if (activityName == '申请人填写' && pageType == 'startProcess') {
				if (FinancedateStr <= sysDate && yesOrNo == '是') {
					layer.alert("报销申请提交时间为每月" + FinancedateStr + "日以前,请于每月" + FinancedateStr + "号之前发起申请");
					flag = false;
				} else {
					flag = true;
				}
			} else if (activityArr.indexOf(activityName) != -1 || (activityName == '申请人填写' && pageType != 'startProcess')) {
				if (BusdateStr <= sysDate && result.data.extrea == '是') {
					layer.alert("报销业务审核时间为每月" + BusdateStr + "日以前,请于每月" + BusdateStr + "号之前完成审批");
					flag = false;
				} else {
					flag = true;
				}
			} else {
				flag = true;
			}
		}
	});
	return flag;
}

// 设定公司编码
function setCompanyCode(obj) {
	var companyCode = $(obj).val();
	$("[name='companyCode']").not(".no_data").val(companyCode);
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		colNum: 13
	})
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		colNum: 14
	})
}

//审批权限管控(总监->副总裁->总裁)
function setApprovalPower() {
	var total = parseFloat($("[name='total']").val());
	var bussinessName = $("[name='bussiness_name']").val();
	total = isNaN(total) ? 0 : total;
	var functionalBussinessNameArr = ["BM08", "RL01", "RL02", "RL03", "RL06", "RL09", "RL10", "RL11", "YY02", "YY03"];
	var CEOBussinessNameArr = ["BG01", "BG02", "BG04", "BG05", "BG06", "BG07", "BG09", "BG10"];
	var isProject = $("[name='select_BJ5k']").val();
	var costcenterArr = [];
	//非项目预算公司编码跟费用明细成本中心走
	if (isProject == '1') {
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
			costcenterArr.push(costCenter);
		});
	} else {
		// 项目预算成本中心对应公司编码跟项目的成本中心走
		var projectCostCenter = $("[name='projectCostCenter']").val();
		costcenterArr.push(projectCostCenter);
	}
	if (costcenterArr.indexOf("1304040000") != -1 || costcenterArr.indexOf("1305050000") != -1) {
		$("[name='specialSituation']").not(".no_data").val("1");
	} else {
		if (isProject == '0') {
			$("[name='specialSituation']").not(".no_data").val("2");
		} else {
			$("[name='specialSituation']").not(".no_data").val("0");
		}
	}

	if (bussinessName == 'BM011' || bussinessName == 'RL12' || bussinessName == 'RL13') {
		$("[name='quota']").not(".no_data").val("1");
	} else {
		$("[name='quota']").not(".no_data").val("0");
	}
	if (bussinessName == 'RL01' || bussinessName == 'RL02' || bussinessName == 'RL10' || bussinessName == 'RL11') {
		$("[name='isFunctional']").not(".no_data").val("1");
	} else if (bussinessName == 'BM08' || bussinessName == 'YY02' || bussinessName == 'YY03') {
		$("[name='isFunctional']").not(".no_data").val("2");
	} else if (bussinessName == 'RL03') {
		$("[name='isFunctional']").not(".no_data").val("3");
	} else {
		$("[name='isFunctional']").not(".no_data").val("0");
	}

	if (CEOBussinessNameArr.indexOf(bussinessName) == -1 || total > 1000) {
		$("[name='isCEO']").not(".no_data").val("1");
	} else {
		$("[name='isCEO']").not(".no_data").val("0");
	}
	// 额外授权
	setNewApproval();
}

//根据收款人进行在原有的授权基础上进行新的授权
function setNewApproval() {
	var isCEO = $("[name='isCEO']").val();
	var userId = "";
	var pageType = $("#pageType").val();
	if (pageType == 'startProcess') {
		userId = $("#userId").val();
	} else {
		userId = $("#insInitUser").val();
	}
	var userIds = [];
	var costCenterArr = [];
	$("[name='payees'] tbody").find("tr").each(function() {
		if (userIds.indexOf(userId) == -1) {
			userIds.push(userId);
		}
	});
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		if (costCenterArr.indexOf(costCenter) == -1) {
			costCenterArr.push(costCenter);
		}
	});
	if (userIds.length > 0 || costCenterArr.length > 0) {
		$.ajax({
			url: common.getPath() + '/LYFData/setNewAwApprovalByPayees?userIds=' + userIds.toString() + '&costCenterArr=' + costCenterArr.toString(),
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.status == 0) {
					var extraApproval = result.data.extraApproval;
					$("[name='extraApproval']").not(".no_data").val(extraApproval);
					if (extraApproval == '1' && result.data.isCEO) {
						$("[name='isCEO']").not(".no_data").val(result.data.isCEO);
					}
				}
			},
			error: function(result) {
			}
		});
	}
}

//加载业务事项选项
function setBussinessOption() {
	var num = Date.now();
	var tierParentCode = '2';
	$.ajax({
		url: common.getPath() + '/dictionaryTier/selectDictionaryTierList?tierParentCode=' + tierParentCode + '&tierType=B&tierLevel=1&pageSize=20',
		type: 'post',
		async: false,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			for (var i = 0; i < result.data.list.length; i++) {
				if (result.data.list[i].tierCode == '07' || result.data.list[i].tierCode == '11' || result.data.list[i].tierCode == '13') {
					continue;
				}
				$("[name='subject_type']").append("<option value=" + result.data.list[i].tierCode + ">" + result.data.list[i].tierName + "</option>");
			}
			common.initSelect();
			setBussinessChildOption("[name='subject_type']");
		},
		error: function(result) {
		}
	});
	console.log("setBussinessOption:" + (Date.now() - num));
}

//级联业务事项
function setBussinessChildOption(obj) {
	$("[name='subject_type']").removeAttr("data-value");
	$("[name='bussiness_name']").empty();
	var bussinessNameArr = ["BM06", "BM03", "BM09", "BM12", "CL07", "CL08", "YX01", "YX04", "YX05", "YX06", "YX07", "YJ01", "WZCG02", "WZCG04", "WZCG05", "WZCG06", "WZCG07"];
	var subject_type = $(obj).val();
	var pageType = $("#pageType").val();
	$.ajax({
		url: common.getPath() + '/dictionaryTier/selectDictionaryTierList?tierParentCode=' + subject_type + '&pageSize=20',
		type: 'post',
		contentType: "application/json;charset=utf-8",
		async: false,
		success: function(result) {
			$("[name='bussiness_name']").append("<option value=" + "" + ">" + "---请选择---" + "</option>");
			for (var i = 0; i < result.data.list.length; i++) {
				if (bussinessNameArr.indexOf(result.data.list[i].tierCode) != -1) {
					continue;
				}
				$("[name='bussiness_name']").append("<option value=" + result.data.list[i].tierCode + ">" + result.data.list[i].tierName + "</option>");
				if (result.data.list[i].tierCode == 'BM14') {
					$("[name='bussiness_name']").append("<option value='BM15'>BM15-部门自行报销采购的耗材、杂费支出</option>");
				}
			}
			common.initSelect();
			if (subject_type == '09' && pageType == 'startProcess') {
				$("[name='bussiness_name']").val("SWCL01");
				$("[name='bussiness_name']").change();
				layui.form.render();
			}
		},
		error: function(result) {
		}
	});
}

//设定表单属性
function changeTableProperties() {
	var activityName = $("#activityName").val();
	var taskStatus = $("#taskStatus").val();
	var num = Date.now();
	$("[name='loanDetail'] tbody tr").find("td[data-label='采购订单号']").find("input").attr("placeholder", "多个采购订单号请以,分隔");
	formUtil.tableFun.addPromptBtnByTableParam({
		name: 'payees',
		colNum: 1,
		btnClass: "layui-icon-friends"
	});
	$("#insTitle_input").attr("disabled", "disabled");
	//申请人确认环节开放银行信息编辑权限

	formUtil.tableFun.changeNotEditByTableParam({
		name: 'payees'
	});
	$("[name='payees'] tbody tr").find("td[data-label='收款人编号']").find("i").removeAttr("style");
	/*formUtil.tableFun.changeNotEditByTableParam({
            name: 'payees',
            colNum: 3
        });
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'payees',
            colNum: 6
        });
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'payees',
            colNum: 7
        });*/
	formUtil.changeNotEditByName("total");
	formUtil.changeNotEditByName("text_5hZ7");
	//formUtil.tableFun.givePCTableSetWidth({"tableWidthJson":{"travelInfo":"3000px"}});
	formUtil.tableFun.givePCTableSetWidth({
		"tableWidthJson": {
			"loanDetail": "2500px"
		}
	});
	//formUtil.tableFun.changeNotEditByTableParam({name:'writeOffLoanTable',colNum:5});
	formUtil.tableFun.changeNotEditByTableParam({
		name: 'loanDetail',
		colNum: 8
	});
	//formUtil.tableFun.changeNotEditByTableParam({name:'payees',colNum:1});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: 10
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: 11
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: 4
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: 5
	});
	formUtil.changeNotEditByName("reimburseNumber");
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 10
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 15
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 16
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 17
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 18
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 19
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 20
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 21
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'loanDetail',
		colNum: 22
	});
	console.log("changeTableProperties:" + (Date.now() - num));

}

//手动添加onchange事件
function addOnChangeEvent() {
	var num = Date.now();
	$("[name = 'loanDetail'] tbody td[data-label='借款金额']").find("input").attr("onchange", "checkAndfomartNumber(this,8,2);getAmount();giveMoney(this);");
	//$("[name = 'loanDetail'] tbody td[data-label='采购订单号']").find("input").attr("onchange", "getPurchaseOrdersMoney(this);");
	$("[name = 'loanDetail'] tbody td[data-label='门店费用归属编码']").find("input").attr("onchange", "judgeWerkExistByCode(this);");
	//$("[name = 'loanDetail'] tbody td[data-label='(供应商/个人)编码']").find("input").attr("onchange", "compareReceiveWithDetails();");
	//$("[name = 'travelInfo'] tbody td[data-label='小计']").find("input").attr("onchange", "getAmount();checkAndfomartNumber(this,16,2);");
	$("[name = 'payees'] tbody td[data-label='收款人类型']").find("select").attr("onchange", "changeEditColumn(this);");
	$("[name = 'payees'] tbody td[data-label='转账金额']").find("input").attr("onchange", "checkAndfomartNumber(this,8,2);");
	//$("[name = 'loanDetail'] tbody td[data-label='报销费用归属']").find("select").attr("onchange", "changeCostAttribute(this)");
	$("[name = 'loanDetail'] tbody td[data-label='报销月份']").find("input").attr("onchange", "getTrafficSubsidy(this);");
	//$("[name = 'loanDetail'] tbody td[data-label='款项内容']").find("input").attr("onchange", "setRemarkByTableDetail(this);");
	$("[name = 'loanDetail'] tbody td[data-label='币种']").find("select").attr("onchange", "changeCurrency()");
	$("[name = 'loanDetail'] tbody td[data-label='成本中心代码']").find("input[type='text']").attr("onchange", "judgeCostCenterExist(this);");
	$("[name='payees'] tbody td[data-label='收款人编号']").find("i").attr("onclick", "setNewLifnrInfoInPayees(this)");
	$("[name='projectCostCenter']").attr("onchange", "judgeCostCenterExistForProject(this);queryCenterProject(this);");
	console.log("addOnChangeEvent:" + (Date.now() - num));
}

//增加本人现金类型控制判断（本人现金没有收款人）
function setPayeesInfoShowOrHide() {
	var costAttribution = $("[name='costAttribution']").val();
	if (costAttribution == '6') {
		formUtil.changeHiddenByName("payees");
	} else {
		formUtil.changeShowByName("payees");
	}
}

//提交时对应借款类型为本人-现金时清空收款人信息
function cleanPayeesInfoByCondition() {
	var costAttribution = $("[name='costAttribution']").val();
	if (costAttribution == '6') {
		$("[name='cashPayment']").not(".no_data").val("1");
		$("[name='payees'] tbody").find("tr:first").find("td:lt(10)").find("input").val("");
		$("[name='payees'] tbody").find("tr:first").find("td:lt(10)").find("select").val("");
		layui.form.render("select");
	} else {
		$("[name='cashPayment']").not(".no_data").val("");
	}
}

//合计金额
function getAmount() {
	var rowList = $("[name='loanDetail'] tbody").find("tr")
	var processType = $("#processType").val();
	if (common.isMobile() && processType != 'startProcess') {
		return;
	}
	var total = 0;
	for (var i = 0; i < rowList.length; i++) {
		var loanMoney = parseFloat($(rowList[i]).find("td[data-label='借款金额']").find("input").val());
		loanMoney = isNaN(loanMoney) ? 0 : loanMoney;
		total += loanMoney;
	}
	$("[name='total']").val(total);
	checkAndfomartNumber($("[name='total']"), 16, 2);
	$("[name='total']").change();

}

//合计金额阿拉伯数字转繁体
function convertCurrency() {
	var money = $("[name='total']").val();
	//汉字的数字
	var cnNums = new Array('零','壹','贰','叁','肆','伍','陆','柒','捌','玖');
	//基本单位
	var cnIntRadice = new Array('','拾','佰','仟');
	//对应整数部分扩展单位
	var cnIntUnits = new Array('','万','亿','兆');
	//对应小数部分单位
	var cnDecUnits = new Array('角','分');
	//整数金额时后面跟的字符
	var cnInteger = '整';
	//整型完以后的单位
	var cnIntLast = '元';
	//最大处理的数字
	var maxNum = 999999999999999.99;
	//金额整数部分
	var integerNum;
	//金额小数部分
	var decimalNum;
	//输出的中文金额字符串
	var chineseStr = '';
	//分离金额后用的数组，预定义
	var parts;
	if (money == '') {
		return '';
	}
	money = parseFloat(money);
	if (money >= maxNum) {
		//超出最大处理数字
		return '';
	}
	if (money == 0) {
		chineseStr = cnNums[0] + cnIntLast + cnInteger;
		$("[name='text_5hZ7']").val(chineseStr);
		return;
	}
	//转换为字符串
	money = money.toString();
	if (money.indexOf('.') == -1) {
		integerNum = money;
		decimalNum = '';
	} else {
		parts = money.split('.');
		integerNum = parts[0];
		decimalNum = parts[1].substr(0, 4);
	}
	//获取整型部分转换
	if (parseInt(integerNum, 10) > 0) {
		var zeroCount = 0;
		var IntLen = integerNum.length;
		for (var i = 0; i < IntLen; i++) {
			var n = integerNum.substr(i, 1);
			var p = IntLen - i - 1;
			var q = p / 4;
			var m = p % 4;
			if (n == '0') {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					chineseStr += cnNums[0];
				}
				//归零
				zeroCount = 0;
				chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
			}
			if (m == 0 && zeroCount < 4) {
				chineseStr += cnIntUnits[q];
			}
		}
		chineseStr += cnIntLast;
	}
	//小数部分
	if (decimalNum != '') {
		var decLen = decimalNum.length;
		for (var i = 0; i < decLen; i++) {
			var n = decimalNum.substr(i, 1);
			if (n != '0') {
				chineseStr += cnNums[Number(n)] + cnDecUnits[i];
			}
		}
	}
	if (chineseStr == '') {
		chineseStr += cnNums[0] + cnIntLast + cnInteger;
	} else if (decimalNum == '') {
		chineseStr += cnInteger;
	}
	$("[name='text_5hZ7']").val(chineseStr);
	//return chineseStr;
}

//根据业务事项下对应业务名称(小类)选择环节处理人
//根据业务事项下对应业务名称(小类)选择环节处理人
/*function setLinkHandlerBySubclass(obj) {
        var subclassCode = $(obj).val();
        var headOrSub = $("[name='headOrSub']").val();
        var total = $("[name='total']").val();
        $.ajax({
            url: common.getPath() + '/sysLinkHandler/getSysLinkHandlerList?subclassCode=' + subclassCode,
            type: 'post',
            async: false,
            contentType: "application/json;charset=utf-8",
            success: function(result) {
                console.log(result);
                if (result.dataList.length > 0) {
                    if (headOrSub == '1') {
                        //职能联签-总部
                        if (result.dataList[0].fjsRoleHead) {
                            $("[name='isFjsRole']").val("1");
                        } else {
                            $("[name='isFjsRole']").val("0");
                        }
                        //财务审核-日常类-总部
                        if (result.dataList[0].caMin == null || result.dataList[0].caMax == null) {
                            $("[name='isCostAccountA']").val(result.dataList[0].costAccountA);
                        } else {
                            if (result.dataList[0].costAccountA == '1' && total >= result.dataList[0].caMin && total < result.dataList[0].caMax) {
                                $("[name='isCostAccountA']").val('1');
                            } else {
                                $("[name='isCostAccountA']").val('0');
                            }
                        }
                        //财务审核-维护类-总部
                        if (result.dataList[0].cabMin == null || result.dataList[0].cabMax == null) {
                            $("[name='isCostAccountB']").val(result.dataList[0].costAccountB);
                        } else {
                            if (result.dataList[0].costAccountB == '1' && total >= result.dataList[0].cabMin && total < result.dataList[0].cabMax) {
                                $("[name='isCostAccountB']").val('1');
                            } else {
                                $("[name='isCostAccountB']").val('0');
                            }
                        }
                        //财务审核-采购-成品-总
                        if (result.dataList[0].cacMin == null || result.dataList[0].cacMax == null) {
                            $("[name='isCostAccountC']").val(result.dataList[0].costAccountC);
                        } else {
                            if (result.dataList[0].costAccountC == '1' && total >= result.dataList[0].cacMin && total < result.dataList[0].cacMax) {
                                $("[name='isCostAccountC']").val('1');
                            } else {
                                $("[name='isCostAccountC']").val('0');
                            }
                        }
                        //财务审核-采购-辅材-总
                        if (result.dataList[0].fahMin == null || result.dataList[0].fahMax == null) {
                            $("[name='isFinancialAccount_Head']").val(result.dataList[0].financialAccountHeadA);
                        } else {
                            if (result.dataList[0].financialAccountHeadA == '1' && total >= result.dataList[0].fahMin && total < result.dataList[0].fahMax) {
                                $("[name='isFinancialAccount_Head']").val('1');
                            } else {
                                $("[name='isFinancialAccount_Head']").val('0');
                            }
                        }
                        //财务审核-预留A-总部
                        if (result.dataList[0].fahbMin == null || result.dataList[0].fahbMax == null) {
                            $("[name='isFinancialAccount_HeadB']").val(result.dataList[0].financialAccountHeadB);
                        } else {
                            if (result.dataList[0].financialAccountHeadB == '1' && total >= result.dataList[0].fahbMin && total < result.dataList[0].fahbMax) {
                                $("[name='isFinancialAccount_HeadB']").val('1');
                            } else {
                                $("[name='isFinancialAccount_HeadB']").val('0');
                            }
                        }
                        //财务审核-预留B-总部
                        if (result.dataList[0].fahcMin == null || result.dataList[0].fahcMax == null) {
                            $("[name='isFinancialAccount_HeadC']").val(result.dataList[0].financialAccountHeadC);
                        } else {
                            if (result.dataList[0].financialAccountHeadC == '1' && total >= result.dataList[0].fahcMin && total < result.dataList[0].fahcMax) {
                                $("[name='isFinancialAccount_HeadC']").val('1');
                            } else {
                                $("[name='isFinancialAccount_HeadC']").val('0');
                            }
                        }
                        //实业财经部经理-总部
                        if (result.dataList[0].smhMin == null || result.dataList[0].smhMax == null) {
                            $("[name='isSettleManager_head']").val(result.dataList[0].settleManagerHead);
                        } else {
                            if (result.dataList[0].settleManagerHead == '1' && total >= result.dataList[0].smhMin && total < result.dataList[0].smhMax) {
                                $("[name='isSettleManager_head']").val("1");
                            } else {
                                $("[name='isSettleManager_head']").val("0");
                            }
                        }
                        //财务管理部经理-总部
                        if (result.dataList[0].fmhMin == null || result.dataList[0].fmhMax == null) {
                            $("[name='isFinancialManager_Head']").val(result.dataList[0].financialManagerHead);
                        } else {
                            if (result.dataList[0].financialManagerHead == '1' && total >= result.dataList[0].fmhMin && total < result.dataList[0].fmhMax) {
                                $("[name='isFinancialManager_Head']").val("1");
                            } else {
                                $("[name='isFinancialManager_Head']").val("0");
                            }
                        }
                        //财务总监-总部
                        if (result.dataList[0].chMin == null || result.dataList[0].chMax == null) {
                            $("[name='isCFO_Head']").val(result.dataList[0].cfoHead);
                        } else {
                            if (result.dataList[0].cfoHead == '1' && total >= result.dataList[0].chMin && total < result.dataList[0].chMax) {
                                $("[name='isCFO_Head']").val("1");
                            } else {
                                $("[name='isCFO_Head']").val("0");
                            }
                        }
                        $("[name='isFinancialAccount_Sub']").val("0");
                        $("[name='financialAccountSubB']").val("0");
                        $("[name='isFinancialManager_Sub']").val("0");
                        $("[name='financialManagerSubB']").val("0");
                        $("[name='isCFO_Sub']").val("0");
                        $("[name='isFunctionJointSign']").val(result.dataList[0].functionJointSignH);
                    } else {
                        //职能联签-子公司
                        if (result.dataList[0].fjsRoleSub) {
                            $("[name='isFjsRole']").val("1");
                        } else {
                            $("[name='isFjsRole']").val("0");
                        }
                        //财务会计-子公司1
                        if (result.dataList[0].fasMin == null || result.dataList[0].fasMax == null) {
                            $("[name='isFinancialAccount_Sub']").val(result.dataList[0].financialAccountSubsidiary);
                        } else {
                            if (result.dataList[0].financialAccountSubsidiary == '1' && total >= result.dataList[0].fasMin && total < result.dataList[0].fasMax) {
                                $("[name='isFinancialAccount_Sub']").val("1");
                            } else {
                                $("[name='isFinancialAccount_Sub']").val("0");
                            }
                        }
                        //财务会计-子公司2
                        if (result.dataList[0].fasbMin == null || result.dataList[0].fasbMax == null) {
                            $("[name='financialAccountSubB']").val(result.dataList[0].financialAccountSubB);
                        } else {
                            if (result.dataList[0].financialAccountSubB == '1' && total >= result.dataList[0].fasbMin && total < result.dataList[0].fasbMax) {
                                $("[name='financialAccountSubB']").val("1");
                            } else {
                                $("[name='financialAccountSubB']").val("0");
                            }
                        }
                        //财务经理-子公司1
                        if (result.dataList[0].fmsMin == null || result.dataList[0].fmsMax == null) {
                            $("[name='isFinancialManager_Sub']").val(result.dataList[0].financialManagerSubsidiary);
                        } else {
                            if (result.dataList[0].financialManagerSubsidiary == '1' && total >= result.dataList[0].fmsMin && total < result.dataList[0].fmsMax) {
                                $("[name='isFinancialManager_Sub']").val("1");
                            } else {
                                $("[name='isFinancialManager_Sub']").val("0");
                            }
                        }
                        //财务经理-子公司2
                        if (result.dataList[0].fmsbMin == null || result.dataList[0].fmsbMax == null) {
                            $("[name='financialManagerSubB']").val(result.dataList[0].financialManagerSubB);
                        } else {
                            if (result.dataList[0].financialManagerSubB == '1' && total >= result.dataList[0].fmsbMin && total < result.dataList[0].fmsbMax) {
                                $("[name='financialManagerSubB']").val("1");
                            } else {
                                $("[name='financialManagerSubB']").val("0");
                            }
                        }
                        //财务总监-子公司
                        if (result.dataList[0].csMin == null || result.dataList[0].csMax == null) {
                            $("[name='isCFO_Sub']").val(result.dataList[0].cfoSubsidiary);
                        } else {
                            if (result.dataList[0].cfoSubsidiary == '1' && total >= result.dataList[0].csMin && total < result.dataList[0].csMax) {
                                $("[name='isCFO_Sub']").val("1");
                            } else {
                                $("[name='isCFO_Sub']").val("0");
                            }
                        }
                        $("[name='isCostAccountA']").val('0');
                        $("[name='isCostAccountB']").val('0');
                        $("[name='isCostAccountC']").val('0');
                        $("[name='isFinancialAccount_Head']").val('0');
                        $("[name='isFinancialAccount_HeadB']").val('0');
                        $("[name='isFinancialAccount_HeadC']").val('0');
                        $("[name='isSettleManager_head']").val('0');
                        $("[name='isFinancialManager_Head']").val("0");
                        $("[name='isCFO_Head']").val("0");
                        $("[name='isFunctionJointSign']").val(result.dataList[0].functionJointSignS);
                    }

                }
            },
            error: function(result) {}
        });
    }*/

//检验明细成本中心是否对应同一公司同时区分总部Or子公司
/*function judgeSameCompanyOrNot() {
        var isProject = $("[name='select_BJ5k']").val();
        var costcenterArr = [];
        var companyArr = [];
        var flag = false;
        //非项目预算公司编码跟费用明细成本中心走
        if (isProject == '1') {
            $("[name='loanDetail'] tbody").find("tr").each(function() {
                var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
                costcenterArr.push(costCenter);
            });
        } else {
            // 项目预算成本中心对应公司编码跟项目的成本中心走
            var projectCostCenter = $("[name='projectCostCenter']").val();
            costcenterArr.push(projectCostCenter);
        }
        if (costcenterArr.indexOf("1304040000") != -1 || costcenterArr.indexOf("1305050000") != -1) {
            $("[name='specialSituation']").not(".no_data").val("1");
        } else {
            $("[name='specialSituation']").not(".no_data").val("0");
        }

        $.ajax({
            url: common.getPath() + '/sysAwCostcenter/queryCostCenterByList',
            type: 'post',
            data: JSON.stringify(costcenterArr),
            async: false,
            contentType: "application/json;charset=utf-8",
            success: function(result) {
                if (result.status == 0) {
                    var dataArr = result.data;
                    if (dataArr.length > 0) {
                        for (var i = 0; i < dataArr.length; i++) {
                            if (companyArr.indexOf(dataArr[i].company) == -1) {
                                companyArr.push(dataArr[i].company);
                            }
                        }
                        if (companyArr.length > 1) {
                            layer.msg("报销时成本中心必须归属于同一公司,不能跨公司报销", {
                                icon: 2
                            });
                            flag = false;
                        } else {
                            $("[name='companyCode']").val(companyArr[0]);
                            flag = true;
                        }
                    }
                } else {
                    layer.msg("成本中心不存在,请重新确认", {
                        icon: 2
                    });
                    flag = false;
                }

            },
            error: function(result) {

            }
        });
        return flag;
    }*/

//判断流程发起人是隶属于总部还是子公司
/*function judgeUserIsHeadOrSub(){
    	var companyNum = $("#companyNum").val();
    	if(companyNum == '1000'){
    		$("[name='headOrSub']").val("1");
    	}else{
    		$("[name='headOrSub']").val("0");
    	}
    }*/

//收款人类型改变
function changeEditColumn(obj) {
	var rowList = $("[name='payees'] tbody").find("tr")
	var index = $(obj).parent().parent().index();
	var receiveType = $(obj).val();
	var userId = $("#userId").val();
	var userName = $("#userName").val();
	var count = 0;
	if (receiveType == "3") {
		$(rowList[index]).find("td[data-label='收款人编号']").find("input").val(userId);
		$(rowList[index]).find("td[data-label='收款人名称']").find("input").val(userName);
	} else {
		$(rowList[index]).find("td[data-label='收款人编号']").find("input").val("");
		$(rowList[index]).find("td[data-label='收款人名称']").find("input").val("");
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: 1,
			rowNum: index
		});
	}

}

//币种
function changeCurrency() {
	var num = Date.now();
	var activityName = $("#activityName").val();

	// formUtil.tableFun.chooseModelHiddenByTableParam({
	//     name: 'loanDetail',
	//     colNum: 4
	// });
	// formUtil.tableFun.changeHiddenMustByTableParam({
	//     name: 'loanDetail',
	//     colNum: 4
	// });
	var amount = 0;
	var rowList = $("[name='loanDetail'] tbody").find("tr");
	for (var i = 0; i < rowList.length; i++) {
		var currency = $(rowList[i]).find("td[data-label='币种']").find("select").val();
		if (currency == 'CNY' || currency.trim() == '') {

			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'loanDetail',
				colNum: 5,
				rowNum: i
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'loanDetail',
				colNum: 6,
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'loanDetail',
				colNum: 5,
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'loanDetail',
				colNum: 6,
				rowNum: i
			});
		} else {
			formUtil.tableFun.changeShowMustByTableParam({
				name: 'loanDetail',
				colNum: 5,
				rowNum: i
			});
			formUtil.tableFun.changeShowMustByTableParam({
				name: 'loanDetail',
				colNum: 6,
				rowNum: i
			});
			if (activityName == '申请人填写' || activityName == '申请人确认') {
				formUtil.tableFun.changeEditByTableParam({
					name: 'loanDetail',
					colNum: 5,
					rowNum: i
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'loanDetail',
					colNum: 6,
					rowNum: i
				});
			}
			amount++
		}
		if (currency == '') {
			$(rowList[i]).find("td[data-label='币种']").find("select").val("CNY");

		}
	}
	if (amount >= 1) {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 5
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 6
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 5
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 6
		});
	}
	layui.form.render();
	console.log("changeCurrency:" + (Date.now() - num));

}

//业务事项控制其他信息显示字段
function changeEditByBussiness(obj) {
	var num = Date.now();
	var bussinessName = $(obj).val();
	if (bussinessName == 'YY05') {
		formUtil.changeShowByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("orderMoney");
	} else if (bussinessName == 'MDRC14') {
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("orderMoney");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	} else if (bussinessName == 'RL06') {
		formUtil.changeShowByName("date_isB6");
		formUtil.changeShowByName("date_QmCe");
		formUtil.changeShowMustByName("date_isB6");
		formUtil.changeShowMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("orderMoney");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	} else if (bussinessName == 'BM09' || bussinessName == 'BM15') {
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("orderMoney");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	} else if (bussinessName == 'BM10') {
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenByName("orderMoney");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeShowByName("bussinessGuestNum");
		formUtil.changeShowMustByName("bussinessGuestNum");
		formUtil.changeShowByName("perCapitaAmount");
	} else if (bussinessName == 'WZCG04') {
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeShowByName("select_cDmR");
		formUtil.changeShowByName("text_wSNX");
		formUtil.changeShowByName("select_yZGh");
		formUtil.changeShowByName("purchaseOrderNo");
		formUtil.changeShowByName("orderMoney");
		formUtil.changeShowMustByName("select_cDmR");
		formUtil.changeShowMustByName("text_wSNX");
		formUtil.changeShowMustByName("select_yZGh");
		formUtil.changeShowMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	} else if (bussinessName == 'WZCG01' || bussinessName == 'WZCG02' || bussinessName == 'WZCG03' || bussinessName == 'WZCG04' || bussinessName == 'WZCG05' || bussinessName == 'WZCG06' || bussinessName == 'WZCG07' || bussinessName == 'CL05' || bussinessName == 'CL07') {
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeShowByName("select_yZGh");
		formUtil.changeShowByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeShowMustByName("select_yZGh");
		formUtil.changeShowMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeShowByName("orderMoney");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	} else {
		formUtil.changeHiddenByName("select_akGZ");
		formUtil.changeHiddenByName("number_H3aT");
		formUtil.changeHiddenByName("date_isB6");
		formUtil.changeHiddenByName("date_QmCe");
		formUtil.changeHiddenMustByName("date_isB6");
		formUtil.changeHiddenMustByName("date_QmCe");
		formUtil.changeHiddenByName("select_cDmR");
		formUtil.changeHiddenByName("text_wSNX");
		formUtil.changeHiddenByName("select_yZGh");
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenMustByName("select_cDmR");
		formUtil.changeHiddenMustByName("text_wSNX");
		formUtil.changeHiddenMustByName("select_yZGh");
		formUtil.changeHiddenMustByName("purchaseOrderNo");
		formUtil.changeHiddenByName("select_ApkK");
		formUtil.changeHiddenByName("date_8etF");
		formUtil.changeHiddenByName("orderMoney");
		formUtil.changeHiddenByName("bussinessGuestNum");
		formUtil.changeHiddenMustByName("bussinessGuestNum");
		formUtil.changeHiddenByName("perCapitaAmount");
	}
	if (bussinessName == 'WZCG07') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 4
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'loanDetail',
			colNum: 4
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 4
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'loanDetail',
			colNum: 4
		});
	}
	console.log("changeEditByBussiness:" + (Date.now() - num));
}

function changeVisiableForProject() {
	var activityName = $("#activityName").val();
	var subjectType = $("[name='subject_type']").val();
	var pageType = $("#pageType").val();
	if (pageType == 'startProcess') {
		if (subjectType == "09") {

			formUtil.changeNotEditByName("select_BJ5k");

		} else {
			if (activityName == '申请人填写' || activityName == '申请人确认') {
				formUtil.changeEditByName("select_BJ5k");
			}
		}
		$("[name='select_BJ5k']").val("1");
		$("[name='select_BJ5k']").change();
	}

}

//填写人环节隐藏费用明细相关财务填写部分
/*function chooseTableColumnHidden(){
    	var activityName = $("#activityName").val();
    	var subject_type = $("[name='subject_type']").val();
    	var bussinessName = $("[name='bussiness_name']").val();
    	if(subject_type == '09' || bussinessName =='BM01' || bussinessName =='MDRC01'){
    		changeTravelInfoTableColumnHidden();
    	}

    }*/

//是否项目报销
function isProjectReimb(obj) {
	var num = Date.now();
	var isProjectReimb = $(obj).val();
	switch (isProjectReimb) {
		case "0":
			formUtil.changeShowMustByName("itemCode");
			formUtil.changeShowMustByName("projectCostCenter");
			formUtil.changeShowByName("itemCode");
			formUtil.changeShowByName("text_NT5r");
			formUtil.changeShowByName("text_drR4");
			formUtil.changeShowByName("projectCostCenter");
			formUtil.changeShowByName("projectCostCenterName");
			$("[name='projectCostCenter']").removeAttr("readonly");
			// setCostCenterCodeToHideInput(obj);
			break;
		case "1":
			formUtil.changeHiddenMustByName("itemCode");
			formUtil.changeHiddenMustByName("projectCostCenter");
			formUtil.changeHiddenByName("itemCode");
			formUtil.changeHiddenByName("text_NT5r");
			formUtil.changeHiddenByName("text_drR4");
			formUtil.changeHiddenByName("projectCostCenter");
			formUtil.changeHiddenByName("projectCostCenterName");
			$("[name='itemCode']").val("");
			$("[name='text_NT5r']").val("");
			$("[name='text_drR4']").val("");
			$("[name='reimbProject']").val("0");
			break;
		default:
			formUtil.changeHiddenMustByName("itemCode");
			formUtil.changeHiddenMustByName("projectCostCenter");
			formUtil.changeHiddenByName("itemCode");
			formUtil.changeHiddenByName("text_NT5r");
			formUtil.changeHiddenByName("text_drR4");
			formUtil.changeHiddenByName("projectCostCenter");
			formUtil.changeHiddenByName("projectCostCenterName");
			$("[name='itemCode']").val("");
			$("[name='text_NT5r']").val("");
			$("[name='text_drR4']").val("");
			$("[name='reimbProject']").val("0");
			break;
	}
	console.log("isProjectReimb:" + (Date.now() - num));
}

//业务名称为门店显示分配前置 其余情况隐藏
function changeLoanTypeShowOrHide() {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var subjectType = $("[name='subject_type']").val();
	var activityName = $("#activityName").val();
	var costAttribution = $("[name='costAttribution']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	if ((subjectType == '07' || bussinessName == 'YJ01' || bussinessName == 'YY05') && costAttribution == '1') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		/*if(activityName == '申请人填写'){
                formUtil.changeNotEditByName("costAttribution");
            }*/

	} else {
		/*
            if(activityName == '申请人填写'){
                formUtil.changeEditByName("costAttribution");
            }*/
		/*if(subjectType == '12'){
                formUtil.tableFun.chooseModelShowByTableParam({name:'loanDetail',colNum:20});
            }else{
                formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:20});
            }*/
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		$("[name='loanDetail'] tbody tr").find("td[data-label='分配前置']").find("select").val("");
		layui.form.render("select");
	}
	if (subjectType == '07' || subjectType == '11' || subjectType == '12') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 10
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 10
		});
	}
	console.log("changeLoanTypeShowOrHide:" + (Date.now() - num));
}

//借款类型--门店时，借款明细中-分配 可编辑 其他情况固定为个人借款
function changeleader() {
	var costAttribution = $("[name='costAttribution']").val();
	var activityName = $("#activityName").val();
	var domObjArr = formUtil.tableFun.getDomObjArrByTableParam({
		name: 'loanDetail',
		colNum: 9
	});
	if (activityName == '申请人填写' || activityName == '申请人确认') {
		if (costAttribution == "1" || costAttribution == "2") {
			formUtil.tableFun.changeEditByTableParam({
				name: 'loanDetail',
				colNum: 9
			});
			//可编辑
			for (var i = 0; i < domObjArr.length; i++) {
				var domObj = $(domObjArr[i]);
				domObj.find("input").val("");
			}
		} else {

			formUtil.tableFun.changeNotEditByTableParam({
				name: 'loanDetail',
				colNum: 9
			});
			//不可编辑
			for (var i = 0; i < domObjArr.length; i++) {
				var domObj = $(domObjArr[i]);
				domObj.find("input").val("个人借款");
			}
		}
	}
	if (costAttribution == '1') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'loanDetail',
			colNum: 0
		});
		$("[name='loanDetail'] tbody tr").find("td[data-label='分配前置']").find("select").val("");
		layui.form.render();
	}
	//addOnChange();
}

//借款类型为本人时赋值流程发起人
function setUserByLoanType(obj) {
	var costAttribute = $(obj).val();
	var pageType = $("#pageType").val();
	var userUid = "";
	if (pageType == 'startProcess') {
		userUid = $("#userId").val();
	} else {
		userUid = $("#insInitUser").val();
	}
	var userName = $("#userName").val();
	if (costAttribute == '3' || costAttribute == '6') {
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			$(this).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input").val(userUid);
			$(this).find("td[data-label='名称']").find("input").not(".no_data").val(userName);
			$(this).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").change();
		});
	} else {
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			$(this).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input").val('');
			$(this).find("td[data-label='名称']").not(".no_data").find("input").val('');
		});
	}
}

//借款类型切换清空table数据
function cleanTableDataByLoanType() {
	var rowList = $("[name='loanDetail']").find("tr");
	$('[name="loanDetail"]').find("tbody").find("tr:gt(0)").remove();
	// 删除下标大于0的tr
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 0
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 1
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 2
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 3
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 5
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 6
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 7
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 8
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 10
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 11
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 12
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 13
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'loanDetail',
		rowNum: 0,
		colNum: 14
	});
	$('[name="payees"]').find("tbody").find("tr:gt(0)").remove();
	// 删除下标大于0的tr
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 0
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 1
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 2
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 3
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 4
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 5
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 6
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 7
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 8
	});
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'payees',
		rowNum: 0,
		colNum: 9
	});
	getAmount();
}

//借款类型在业务事项名称对应 事项(门店运营费) 名称(门店租赁费) 情况下显示 其余隐藏
/*function showOrhide(){
    	//业务事项
    	var subject_type = $('[name="subject_type"]').val();
    	//业务名称
    	var bussiness_name = $('[name="bussiness_name"]').val();
    	if(subject_type=="07" && bussiness_name=="MDRC15"){
    		formUtil.changeShowByName('costAttribution');
    	}else{
    		formUtil.changeHiddenByName('costAttribution');
    	}
    }*/

//借款类型切换隐藏不同列
/*function changeEditColumnInLoanTable(obj){
    	var loanType = $(obj).val();
    	$("[name='payees'] tbody tr").find("td[data-label='收款人类型']").find("select").val(loanType);
    	layui.form.render();
    	switch(loanType){
    		case '1':
    			formUtil.tableFun.chooseModelShowByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:7});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:8});
    			formUtil.tableFun.changeShowMustByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:7});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:8});
    			break;
    		case '2':
    		formUtil.tableFun.chooseModelShowByTableParam({name:'loanDetail',colNum:8});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:7});
    			formUtil.tableFun.changeShowMustByTableParam({name:'loanDetail',colNum:8});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:7});
    			break;
    		case '3':
    			formUtil.tableFun.chooseModelShowByTableParam({name:'loanDetail',colNum:7});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.chooseModelHiddenByTableParam({name:'loanDetail',colNum:8});
    			formUtil.tableFun.changeShowMustByTableParam({name:'loanDetail',colNum:7});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:6});
    			formUtil.tableFun.changeHiddenMustByTableParam({name:'loanDetail',colNum:8});
    			break;
    		default:
    			break;
    	}
    }*/

//若业务事项选中门店  则固定借款类型为门店
function setLoanTypeByBus(obj) {
	var subjectType = $(obj).val();
	var costAttribution = $("[name='costAttribution']").val();
	if (subjectType == '07') {
		if (costAttribution != '1') {
			$("[name='costAttribution']").val("1");
			$("[name='costAttribution']").change();
		}
	} else {
		$("[name='costAttribution']").val("")
	}
	layui.form.render();
}

function rowChangeEvent(obj, sign) {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var activityName = $("#activityName").val();
	var loanType = $("[name='costAttribution']").val();
	var personLiable = $("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='事项负责人']").find("input").val();
	var currency = $("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='币种']").find("select").val();
	var costAttribution = $("[name='costAttribution']").val();
	var userId = $("#userId").val();
	var userName = $("#userName").val();
	var code = $("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='(供应商/个人)编码']").find("input[type='text']").val();
	var rowList = $("[name='loanDetail'] tbody").find("tr");
	var dataList = $("[name='payees'] tbody").find("tr");
	if (activityName == '申请人填写') {
		if (rowList.length > dataList.length) {
			myrowChangeEvent(obj);
		}
		if (tableName == 'loanDetail') {
			if (activityName == '申请人填写' || activityName == '申请人确认') {
				$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='(供应商/个人)编码']").find("input[type='text']").removeAttr("readonly");
				$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
			}
			if (!personLiable) {
				$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='事项负责人']").find("input").val("个人借款");
			}
			if (!currency) {
				$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='币种']").not(".no_data").find("select").val("CNY");
			}
			if (costAttribution != '3' && costAttribution != '6') {
				$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='事项负责人']").find("input").val("");
			}
			if (sign != '1') {
				if ((costAttribution == '3' || costAttribution == '6') && !code) {
					$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='(供应商/个人)编码']").find("input").val(userId);
					$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='名称']").find("input").val(userName);
					formUtil.tableFun.changeNotEditByTableParam({
						name: 'loanDetail',
						colNum: 7
					});
					$("[name='loanDetail'] tbody").find("tr:last").find("td[data-label='(供应商/个人)编码']").find("input[type='text']").change();
				}
			}
		}
		if (tableName == 'payees') {
			$("[name='payees'] tbody ").find("tr:last").find("td[data-label='收款人类型']").find("select").val(loanType);
		}
	}
	console.log("rowChangeEvent:" + (Date.now() - num));
	//layui.form.render();
}

// 根据同步的供应商编号查询供应商信息
function getLinInfoByCode(obj) {
	var errorMsg = "";
	var shoukuanrentype = $("[name='costAttribution']").val();
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var zhuanzhangMoney = $(obj).parent().parent().find("td[data-label='借款金额']").not(".no_data").find('input').val();
	var code = $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").val();
	var remark = $(obj).parent().parent().find("td[data-label='款项内容']").find("input").val();
	remark = remark.substring(0, 20);
	var index = $(obj).parent().parent().index();
	if (code != "") {
		$.ajax({
			url: common.getPath() + '/sysAwBankinfo/searchSysAwBankinfo?receiveCode=' + code + "&receiveType=" + shoukuanrentype,
			// 		url: 'http://172.19.53.31:8080/bpm/rbQuerySAPInfo/getLinInfoByCode',

			type: 'post',
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {

				var data = result.data.list;
				if (data.length <= 0) {
					layer.msg('该供应商不存在!请重新确认', {
						icon: 2
					});
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val("");
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					clearTdShouKuanRenByIndex(obj);
					return;
				}

				$(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find('input').val(data[0].receiveName);
				$(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find('.value_id').val(data[0].receiveCode);
				$(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find('.value_code').val(data[0].receiveCode);
				var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
				for (var i = 0; i < shoukuanrentrs.length; i++) {
					var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
					if (shoukaunrenId == detailId) {
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(data[0].receiveCode);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val(data[0].receiveName);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val(data[0].bkref);

						//$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val(result.data[0].zhuilu);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val(data[0].zzhlx);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val(data[0].zzhangh);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val(data[0].text);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val(zhuanzhangMoney);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val(data[0].zzhytText);

						setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input'));

						break;
					}
				}
				if (!data[0].receiveCode) {
					errorMsg += "收款人编号,"
				}
				if (!data[0].receiveName) {
					errorMsg += "收款人名称,"
				}
				if (!data[0].bkref) {
					errorMsg += "收款人账号,"
				}
				if (!data[0].zzhlx) {
					errorMsg += "收款人账户类型,"
				}
				if (!data[0].zzhangh) {
					errorMsg += "开户行行号,"
				}
				if (!data[0].text) {
					errorMsg += "开户行名称,"
				}
				if (errorMsg) {
					layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请确认收款人数据是否完整', {
						icon: 2
					});
					return;
				}
				//setCostCenterByCondition(obj);
				layui.form.render();
			}
		})
	}
}

// 根据门店查询供应商信息和门店信息
/*function getWerkAndLinInfo(obj) {
        var errorMsg = "";
        var shoukuanrentype = $("[name='costAttribution']").val();
        var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
        var zhuanzhangMoney = $(obj).parent().parent().find("td[data-label='借款金额']").not(".no_data").find('input').val();
        var code = $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").val();
        var remark = $(obj).parent().parent().find("td[data-label='款项内容']").find("input").val();
        remark = remark.substring(0, 20);
        var index = $(obj).parent().parent().index();
        if (code != "") {

            $.ajax({
                url: common.getPath() + '/rbQuerySAPInfo/getWerkAndLinInfo',
                // 		url: 'localhost:8080/bpm/rbQuerySAPInfo/getWerkAndLinInfo',

                type: 'post',
                dataType: 'json',
                data: JSON.stringify({
                    "werk": code
                }),
                contentType: 'application/json;charset=UTF-8',
                success: function(result) {

                    var data = result.data;
                    if (data.length <= 0) {
                        layer.msg('该门店不存在!请重新确认', {
                            icon: 2
                        });
                        $("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val("");
                        $("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
                        clearTdShouKuanRenByIndex(obj);
                        return;

                    }

                    $(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find('input').val(result.data[0].name1);
                    $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find('.value_id').val(result.data[0].name1);
                    $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find('.value_code').val(code);
                    $(obj).parent().parent().find("td[data-label='门店费用归属编码']").not(".no_data").find('input').val(code);
                    $(obj).parent().parent().find("td[data-label='门店费用归属编码']").not(".no_data").find('input').change();
                    var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
                    for (var i = 0; i < shoukuanrentrs.length; i++) {
                        var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
                        if (shoukaunrenId == detailId) {
                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(result.data[0].lifnr);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val(result.data[0].emftx);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val(result.data[0].bkref);

                            //$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val(result.data[0].zhuilu);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val(result.data[0].zzhlx);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val(result.data[0].zhangh);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val(result.data[0].text);

                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val(zhuanzhangMoney);
                            $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val(remark);
                            if (result.data[0].zkuah == "1" || !result.data[0].zkuah) {
                                setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input'));
                            } else {
                                $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("0");
                            }
                            break;
                        }
                    }
                    if (!result.data[0].lifnr) {
                        errorMsg += "收款人编号,"
                    }
                    if (!result.data[0].emftx) {
                        errorMsg += "收款人名称,"
                    }
                    if (!result.data[0].bkref) {
                        errorMsg += "收款人账号,"
                    }
                    if (!result.data[0].zzhlx) {
                        errorMsg += "收款人账户类型,"
                    }
                    if (!result.data[0].zhangh) {
                        errorMsg += "开户行行号,"
                    }
                    if (!result.data[0].text) {
                        errorMsg += "开户行名称,"
                    }
                    if (errorMsg) {
                        layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请先在SAP进行主数据维护后再进行操作,如有疑问请找主数据维护人员', {
                            icon: 2
                        });
                        return;
                    }
                    //setCostCenterByCondition(obj);
                    layui.form.render();

                }
            });
        }
    }*/

// 根据工号获取银行信息
function getSysAwBankInfo(obj) {
	var errorMsg = "";
	var shoukuanrentype = $("[name='costAttribution']").val();
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var amount = $(obj).parent().parent().find("td[data-label='借款金额']").not(".no_data").find('input').val();
	var code = $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").val();
	var remark = $(obj).parent().parent().find("td[data-label='款项内容']").find("input").val();
	remark = remark.substring(0, 20);
	var name = $(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find("input").val();
	var index = $(obj).parent().parent().index();
	if (code != "") {
		$.ajax({
			url: common.getPath() + '/sysAwBankinfo/searchSysAwBankinfo?receiveCode=' + code + "&receiveType=" + shoukuanrentype,
			type: 'post',
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.msg == '接口返回异常') {
					layer.msg('该员工不存在!请重新确认', {
						icon: 2
					});
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val("");
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					clearTdShouKuanRenByIndex(obj);
					return;
				}
				var dataArr = result.data.list;
				dataArr = dataArr.filter(function(s) {
					return s.zzhyt == '2' || s.zzhyt == '3';
				});
				var data = dataArr[0];
				if (result.status == 0) {
					if (!data) {
						layer.msg('该员工不属于爱屋公司成员存在!请重新确认', {
							icon: 2
						});
						$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val("");
						$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					}
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val(data.receiveCode);
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val(data.receiveName);
					$("[name='payees'] tbody").find("tr").each(function() {
						var sortNo = $(this).find("td[data-label='排序']").not(".no_data").find("input").val();
						if (detailId == sortNo) {
							$(this).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
							$(this).find("td[data-label='收款人编号']").not(".no_data").find('input').val(data.receiveCode);
							$(this).find("td[data-label='收款人名称']").not(".no_data").find('input').val(data.receiveName);
							$(this).find("td[data-label='收款人账号']").not(".no_data").find('input').val(data.bkref);
							$(this).find("td[data-label='开户行行号']").not(".no_data").find('input').val(data.zzhangh);
							$(this).find("td[data-label='开户行名称']").not(".no_data").find('input').val(data.text);
							$(this).find("td[data-label='转账金额']").not(".no_data").find('input').val(amount);
							$(this).find("td[data-label='附言']").not(".no_data").find('input').val(data.zzhytText);
							$(this).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("1");
							$(this).find("td[data-label='汇路']").not(".no_data").find('select').val("6");
							return;
						}
					});

				} else {
					layer.msg('该员工不属于爱屋公司成员存在!请重新确认', {
						icon: 2
					});
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").find("input").val("");
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					clearTdShouKuanRenByIndex(obj);
					return;
				}

				if (!data.receiveCode) {
					errorMsg += "收款人编号,"
				}
				if (!data.bkref) {
					errorMsg += "收款人账号,"
				}
				if (!data.zzhangh) {
					errorMsg += "开户行行号,"
				}
				if (!data.text) {
					errorMsg += "开户行名称,"
				}
				if (errorMsg) {
					layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请先进行维护后再进行操作', {
						icon: 2
					});
					return;
				}
				layui.form.render("select");

			}
		})
	}
}

function clearTdShouKuanRenByIndex(obj) {
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();

	//     $(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find('input').val("");

	var paixuIndex = $('[name="payees"]').find("tbody").find('tr').eq(0).find("td[data-label='排序']").index();
	var payeesTrs = $('[name="payees"]').find("tbody").find("tr");
	for (var i = 0; i < payeesTrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {
			$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0):lt('" + (paixuIndex - 1) + "') input").val("")
			$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0) select").val("");
		}
	}
}

function addOnChange() {
	var shoukuanrentype = $("[name='costAttribution']").val();

	var mainTrs = $("[name = 'loanDetail'] tbody ").find("tr");
	for (var i = 0; i < mainTrs.length; i++) {
		switch (shoukuanrentype) {
			case '1':
				$("[name = 'loanDetail'] tbody ").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getWerkAndLinInfo(this);");
				break;
			case '2':
				$("[name = 'loanDetail'] tbody ").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this);");
				break;
			case '3':
				$("[name = 'loanDetail'] tbody ").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getSysAwBankInfo(this);");
				break;
			case '6':
				$("[name = 'loanDetail'] tbody ").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getSysAwBankInfo(this);");
				break;
			default:
				$("[name = 'loanDetail'] tbody ").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").not(".no_data").find("input").attr("onchange", "");
				break;
		}
	}
	var fuTrs = $("[name = 'payees'] tbody ").find("tr");

	for (var i = 0; i < fuTrs.length; i++) {

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val("");
		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val("");

		$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val("");

	}

	layui.form.render();

}

function uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4";
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}

function giveDiYiHangBiaoJi() {
	var num = Date.now();
	var isHaveId = $("[name = 'loanDetail'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val();
	if (!isHaveId) {
		var detailId = uuid();
		$("[name = 'loanDetail'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
		$("[name = 'payees'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
	}
	console.log("giveDiYiHangBiaoJi:" + (Date.now() - num));
}
//动态添加行数重构事件
function myrowChangeEvent(obj) {
	var num = Date.now();
	var title = $(obj).parent().parent().parent().parent().attr("name");
	var costAttribution = $("[name='costAttribution']").val();
	if (title == "loanDetail") {
		var detailId = uuid();
		$("[name = 'loanDetail'] tbody ").find("tr:last").find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
		if (costAttribution != '6') {
			formUtil.tableFun._addDataRow("payees");
			$("[name = 'payees'] tbody ").find("tr:last").find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
		}
	}
	console.log("myrowChangeEvent:" + (Date.now() - num));
}

//切换借款类型影响收款人跟借款明细两表联动
function changePayeesByCostAttribute() {
	var costAttribution = $("[name='costAttribution']").val();
}

function givePayeesValues(obj) {
	var rowIndex = $(obj).parent().parent().index();
	var detailId = $("[name = 'loanDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='排序']").not(".no_data").find("input").val();
	var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
	var shoukuanrentrIndex;
	for (var i = 0; i < shoukuanrentrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {
			shoukuanrentrIndex = $("[name = 'payees'] tbody ").find("tr").eq(i).index();
		}
	}
	var shoukuanrentds = $("[name = 'payees'] tbody ").find("tr").eq(shoukuanrentrIndex).find("td");
	for (var i = 0; i < shoukuanrentrs.length; i++) {}
}

function myRowRemove(obj) {
	var title = $(obj).parent().parent().parent().parent().attr("name");
	var rowIndex = $(obj).parent().parent().index();
	var detailId = $("[name = 'loanDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='排序']").not(".no_data").find("input").val();
	var shoukuanrentrIndex;
	if (title == "loanDetail") {
		if ($('[name="payees"]').find("tbody").find("tr").length > 1) {
			var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
			for (var i = 0; i < shoukuanrentrs.length; i++) {
				var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
				if (shoukaunrenId == detailId) {
					shoukuanrentrIndex = $("[name = 'payees'] tbody ").find("tr").eq(i).index();
				}
			}
			$('[name="payees"]').find("tbody").find("tr").eq(shoukuanrentrIndex).remove();
		}
	}
}

//删除行触发事件
function rowRemoveChangeEvent(obj) {
	getAmount();
	myRowRemove(obj);
}

function giveMoney(obj) {
	var rowIndex = $(obj).parent().parent().index();
	var jieKuanMoney = $("[name = 'loanDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='借款金额']").not(".no_data").find("input").val();
	var detailId = $("[name = 'loanDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='排序']").not(".no_data").find("input").val();

	var loanDetailTrs = $("[name = 'payees'] tbody ").find("tr");
	for (var i = 0; i < loanDetailTrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {
			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find("input").val(jieKuanMoney);
			setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find("input"));
			return;
		}
	}
}

//收款人类型为供应商、门店、时默认成本中心为发起人的成本中心，名称是发起人的部门名称,本人查询本人的成本中心
/*function setCostCenterByCondition(obj) {
        var index = $(obj).parent().parent().index();
        var userUid = $("#userId").val();
        var userName = $("#userName").val();
        var departmentId = $("#departNo").val();
        if (departmentId) {
            $.ajax({
                url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmentId,
                type: 'post',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        if (result.data.kostl) {
                            $("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
                            $("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
                            $("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val(result.data.cstctrShortText);
                            return true;
                        } else {
                            layer.alert("该部门没有对应的成本中心，请联系人力部门解决");
                            return false;
                        }

                    } else {
                        layer.alert(result.msg);
                        return;
                    }
                },
                error: function(result) {

                }
            });
        }

    }*/

//获取项目对应成本中心预算
function getItemBudget() {
	var projectCostCenter = $("[name='projectCostCenter']").val();
	var itemCode = $("[name='itemCode']").val();
	var pageType = $("#pageType").val();
	var insInitDate = $("#insInitDate").val();
	var month = 0;
	if (pageType == 'startProcess') {
		month = (new Date()).getMonth() + 1;
	} else {
		month = (new Date(insInitDate)).getMonth() + 1;
	}
	var subjectType = $("[name='subject_type']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	$.ajax({
		url: common.getPath() + '/LYFSynRB/qryBudgetByCostCenter?costCenter=' + projectCostCenter + "&month=" + month + "&tbpmCode=" + bussinessName + "&itemCode=" + itemCode,
		type: 'get',
		async: false,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (JSON.stringify(result.data) == '[]') {

				layer.alert("成本中心" + projectCostCenter + "本月没有对应业务预算,请找预算联络人确认");
				flag = false;
				return flag;
			}
			var dataArr = result.data;
			if (itemCode) {
				dataArr = dataArr.filter(function(e) {
					return e.itemCode == itemCode;
				});
			} else {
				dataArr = dataArr.filter(function(e) {
					return e.itemCode == null;
				});
			}
			if (dataArr.length > 0) {
				$("[name='loanDetail'] tbody").find("tr").each(function() {
					var index = $(this).index();
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心预算']").not(".no_data").find("input").val(dataArr[0].availableAmount);
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='预算控制模式']").not(".no_data").find("input").val(dataArr[0].controlType);

				});
			}
			if (dataArr.length == 0) {
				layer.alert("成本中心" + projectCostCenter + "该业务当月没有项目预算,请找预算联络人确认");
				flag = false;

			} else {
				flag = true;
			}
		},
		error: function(result) {}
	});
	return flag;
}

//提交时批量获取成本中心预算及控制模式
function getCostCenterBudget() {
	var bussinessName = $("[name='bussiness_name']").val();
	if (bussinessName == 'BM011') {
		getAllTrafficSubsidy();
		return true;
	}
	if (bussinessName == "RL06") {
		qryLeagueByCode();
		return true;
	}
	var pageType = $("#pageType").val();
	var insInitDate = $("#insInitDate").val();
	var month = 0;
	if (pageType == 'startProcess') {
		month = (new Date()).getMonth() + 1;
	} else {
		month = (new Date(insInitDate)).getMonth() + 1;
	}
	var costCenter = [];
	var itemCode = $("[name='itemCode']").val();
	if (itemCode == null || itemCode == undefined) {
		itemCode = "";
	}
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var costCenterCode = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		costCenter.push(costCenterCode);
	});
	var flag = false;

	$.ajax({
		url: common.getPath() + '/LYFSynRB/qryBudgetByCostCenter?costCenter=' + costCenter.toString() + "&month=" + month + "&tbpmCode=" + bussinessName + "&itemCode=" + itemCode,
		type: 'get',
		async: false,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (JSON.stringify(result.data) == '[]') {
				layer.alert("成本中心" + costCenter.toString() + "本月没有对应业务预算,请找预算联络人确认");
				$("[name='loanDetail'] tbody").find("tr").each(function() {
					$(this).find("td[data-label='成本中心代码']").find("input").val("");
					$(this).find("td[data-label='成本中心名称']").find("input").val("");
					$(this).find("td[data-label='成本中心预算']").find("input").val("");
					$(this).find("td[data-label='预算控制模式']").find("input").val("");
				});
				flag = false;
				return flag;
			}
			var dataArr = result.data;
			if (itemCode) {
				dataArr = dataArr.filter(function(e) {
					return e.itemCode == itemCode;
				});
			} else {
				dataArr = dataArr.filter(function(e) {
					return e.itemCode == null || e.itemCode == "";
				});
			}
			if (dataArr.length > 0) {
				$("[name='loanDetail'] tbody").find("tr").each(function() {
					var costCenterNo = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
					for (var i = 0; i < dataArr.length; i++) {
						if (costCenterNo == dataArr[i].costCenter) {
							$(this).find("td[data-label='成本中心预算']").not(".no_data").find("input").val(dataArr[i].availableAmount);
							$(this).find("td[data-label='预算控制模式']").not(".no_data").find("input").val(dataArr[i].controlType);
							for (var j = 0; j < costCenter.length; j++) {
								costCenter.remove(costCenterNo);
							}
						}
					}

				});
			}
			if (costCenter.length > 0) {
				costCenter = unique(costCenter);
				layer.alert("成本中心" + costCenter.toString() + "该业务当月没有预算,请找预算联络人确认");
				$("[name='loanDetail'] tbody").find("tr").each(function() {
					var costCenterNum = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
					if (costCenter.indexOf(costCenterNum) != -1) {
						$(this).find("td[data-label='成本中心代码']").find("input").val("");
						$(this).find("td[data-label='成本中心名称']").find("input").val("");
						$(this).find("td[data-label='成本中心预算']").find("input").val("");
						$(this).find("td[data-label='预算控制模式']").find("input").val("");
					}
				});
				flag = false;
				return flag
			} else {
				flag = true;
			}
		},
		error: function(result) {}
	});
	return flag;
}

//批量查询成本中心是否存在
function judgeAllCostCenterExist() {
	var num = Date.now();
	var costCenterArr = [];
	var errorCostCenterArr = [];
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		if (costCenterArr.indexOf(costCenter) == -1) {
			costCenterArr.push(costCenter);
		}
	});
	if (costCenterArr.length > 0) {
		$.ajax({
			url: common.getPath() + '/sysAwCostcenter/queryCostCenterByList?costCenterArr=' + costCenterArr.toString(),
			type: 'post',
			dataType: 'json',
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.status == 0) {
					var dataArr = result.data;
					var costCenters = [];
					var errorCostCenter = [];
					if (dataArr.length > 1) {
						for (var j = 0; j < dataArr.length; j++) {
							if (costCenters.indexOf(dataArr[i].costCenter) == -1) {
								costCenters.push(dataArr[i].costCenter);
							}
						}
						for (var i = 0; i < dataArr.length; i++) {
							var costCenter = dataArr[i].costCenter;
							var costCenterName = dataArr[i].costCenterName;
							$("[name='loanDetail'] tbody").find("tr").each(function() {
								var costCenter1 = $(this).find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val();
								if (costCenters.indexOf(costCenter1) != -1) {
									if (costCenter == costCenter) {
										$(this).find("td[data-label='成本中心名称']").not(".no_data").find("input").val(costCenterName);
									}
								} else {
									if (errorCostCenter.indexOf(costCenter1) == -1) {
										errorCostCenter.push(costCenter1);
									}
									$(this).find("td[data-label='成本中心代码']").not(".no_data").find("input").val("");
									$(this).find("td[data-label='成本中心名称']").not(".no_data").find("input").val("");
								}

							});

						}
						if (errorCostCenter.length > 0) {
							layer.alert("成本中心编码:" + errorCostCenter.toString() + "不存在，请重新确认");
						}

					} else {
						layer.alert("成本中心编码:" + costCenterArr.toString() + "不存在，请重新确认");
						$("[name='loanDetail'] tbody").find("tr").each(function() {
							$(this).find("td[data-label='成本中心代码']").find("input").val("");
							$(this).find("td[data-label='成本中心名称']").find("input").val("");
						});
					}
				} else {
					layer.alert(result.msg);
					$("[name='loanDetail'] tbody").find("tr").each(function() {
						$(this).find("td[data-label='成本中心代码']").find("input").val("");
						$(this).find("td[data-label='成本中心名称']").find("input").val("");
					});
				}
			},
			error: function(result) {
			}
		});
	}
	console.log("批量校验成本中心:" + (Date.now() - num));
}
//提供手输方法查询成本中心是否存在
function judgeCostCenterExist(obj) {
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var index = $(obj).parent().parent().index();
	var costCenter = $(obj).val();
	$.ajax({
		url: common.getPath() + '/sysAwCostcenter/searchSysAwCostCenter?costCenter=' + costCenter,
		type: 'post',
		contentType: 'application/json;charset=UTF-8',
		async: false,
		success: function(result) {
			if (result.status == 0) {
				var dataArr = result.data.list;
				if (dataArr.length > 1) {
					layer.alert("成本中心:" + costCenter + "存在多个,请重新确认")
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
				} else {
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(dataArr[0].costCenter);
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(dataArr[0].costCenterName);
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").not(".no_data").find("input").val(dataArr[0].costCenterName);
				}
			} else {
				layer.alert(result.msg);
				$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
				$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
			}
		},
		error: function(result) {
		}
	});
}

//业务名称如果对应BM01、BM011则显示车贴年月必填项
function changeSubsidyDateShowOrHide() {
	var num = Date.now();
	var costAttribution = $("[name='costAttribution']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	if (bussinessName == "BM011" && costAttribution == '3') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'loanDetail',
			colNum: 3
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'loanDetail',
			colNum: 3
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'loanDetail',
			colNum: 3
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'loanDetail',
			colNum: 3
		});
		formUtil.tableFun.clearTargetObjValueByParam({
			name: 'loanDetail',
			colNum: 3
		});
	}
	console.log("changeSubsidyDateShowOrHide:" + (Date.now() - num));
}

//���量获取本人对应月份的交通补贴额度
//因为选中����份时已经查询对应月份在定额交通补贴信息中是否已经存在,这里提交时再查一遍必定存在
//这里BM011定额设定只能为本人发起,则该类型发起必定为流程发起人
function getAllTrafficSubsidy() {
	var pageType = $("#pageType").val();
	var code = "";
	if (pageType == 'startProcess')
		code = $("#userId").val();
	else
		code = $("#insInitUser").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var transSubsidyDateArr = [];
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var transSubsidyDate = $(this).find("td[data-label='报销月份']").find("input").val();
		transSubsidyDate = transSubsidyDate.replace("-", "");
		if (transSubsidyDateArr.indexOf(transSubsidyDate) == -1) {
			transSubsidyDateArr.push(transSubsidyDate);
		}
	});
	if (transSubsidyDateArr.length > 0) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryQuotaInfo?bissinessName=' + bussinessName + '&userNo=' + code + '&month=' + transSubsidyDateArr.toString(),
			type: 'post',
			dataType: 'json',
			async: false,
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.data.length == 0) {
					layer.msg("该员工对应月份" + transSubsidyDateArr.toString() + "没有对应交通补贴,请重新确认", {
						icon: 2
					});
					$("[name = 'loanDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='报销月份']").not(".no_data").find("input").val("");
					$("[name = 'loanDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val("");
					return;

				}
				$("[name='loanDetail'] tbody").find("tr").each(function() {
					var reimbMonth = $(this).find("td[data-label='报销月份']").find("input").val();
					var index = $(this).index();
					reimbMonth = reimbMonth.replace("-", "");
					for (var i = 0; i < result.data.length; i++) {
						if (reimbMonth == result.data[i].month) {
							$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val(result.data[i].canUserQuota);
						}
					}
				});
			}
		});
	}
}

//获取某月对应本人的交通补贴额度
function getTrafficSubsidy(obj) {
	var index = $(obj).parent().parent().index();
	var code = $(obj).parent().parent().find("td[data-label='(供应商/个人)编码']").find("input").val();
	var bussinessName = $("[name='bussiness_name']").val();
	// var transSubsidyDate = $(obj).val();
	// transSubsidyDate = new Date(transSubsidyDate);
	// transSubsidyDate = transSubsidyDate.getFullYear() + '-' + transSubsidyDate.getMonth();
	// transSubsidyDate = new Date(transSubsidyDate);
	// transSubsidyDate = transSubsidyDate.getFullYear() + '' + getMonth(transSubsidyDate);
	var transSubsidyDate = $(obj).val();
	transSubsidyDate = transSubsidyDate.replace("-", "");
	if (code && transSubsidyDate) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryQuotaInfo?bissinessName=' + bussinessName + '&userNo=' + code + '&month=' + transSubsidyDate,
			type: 'post',
			dataType: 'json',
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.data.length == 0) {
					layer.msg('该员工当前月份没有对应交通补贴,当前月度补贴报销申请请于11日以后提交', {
						icon: 2
					});
					$("[name = 'loanDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='报销月份']").not(".no_data").find("input").val("");
					$("[name = 'loanDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val("");
					return;

				}
				var useQuota = isNaN(parseFloat(result.data[0].useQuota)) ? 0 : parseFloat(result.data[0].useQuota);
				var canUserQuota = isNaN(parseFloat(result.data[0].canUserQuota)) ? 0 : parseFloat(result.data[0].canUserQuota);
				$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val(canUserQuota);
				layer.alert("该类型报销请于每月11日以后提交。</br>当前月份已用额度：" + useQuota + "</br>" + "当前月份可使用额度：" + canUserQuota);

				layui.form.render();

			}
		});
	}

}

//财务环节显示财务审核确认部分
function changeHiddenByActivity() {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总部", "财务管理部经理-总部", "财务总监-总部", "财务会计-子公司1", "财务会计-子公司2", "财务经理-子公司1", "财务经理-子公司2", "财务总监-子公司", "出纳进行付款"];
	if (activityArr.indexOf(activityName) == -1) {
		formUtil.changeHiddenByName("text_Pnyz");
		formUtil.changeHiddenByName("voucherNumber");
		formUtil.changeHiddenByName("text_dTNb");
		formUtil.changeHiddenByName("text_SQf7");
		formUtil.changeHiddenByName("postingDate");
		formUtil.changeHiddenMustByName("postingDate");
		$("table[title='财务审核确认']").prev().hide();
	} else {
		formUtil.changeShowByName("text_Pnyz");
		formUtil.changeShowByName("voucherNumber");
		formUtil.changeShowByName("text_dTNb");
		formUtil.changeShowByName("text_SQf7");
		formUtil.changeShowByName("postingDate");
		formUtil.changeShowMustByName("postingDate");
		$("table[title='财务审核确认']").prev().show();
	}
	console.log("changeHiddenByActivity:" + (Date.now() - num));
}

//加载凭证制单人以及凭证审核人
function getVoucherMakerAndAuditer() {
	var activityName = $("#activityName").val();
	var companyCode = $("[name='companyCode']").val();
	if (activityName == '申请人填写') {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryVoucherMakerAndAuditer?companyCode=' + companyCode,
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == 0) {
					var data = result.data[0];
					$("[name='text_dTNb']").val(data.employeeName);
					$("[name='text_SQf7']").val(data.approverName);
				} else {
					layer.alert("凭证制单人以及凭证审核人查询接口调用失败");
				}
			},
			error: function(result) {
			}
		});
	}
}

//根据项目编号获取项目信息
function getProjectInfoByProjectNo(obj) {
	if (obj) {
		$("[name='itemCode']").val(obj.projectNumInput);
		$("[name='text_NT5r']").val(obj.abbreviation);
		$("[name='text_drR4']").val(obj.projectLeader);
	}
}

//判断填写的金额是否超出对应项目预算
function judgeIsOverItemBudget() {
	return true;
	var flag = false;
	var total = parseFloat($("[name='total']").val());
	total = isNaN(total) ? 0 : total;
	var projectCostCenter = $("[name='projectCostCenter']").val();
	var subjectType = $("[name='subject_type']").val();
	var tableName = "";

	var itemBudget = $("[name='loanDetail'] tbody").find("tr:eq(0)").find("td[data-label='成本中心预算']").find("input").val();
	var controlType = $("[name='loanDetail'] tbody").find("tr:eq(0)").find("td[data-label='预算控制模式']").find("input").val();
	itemBudget = isNaN(parseFloat(itemBudget)) ? 0 : parseFloat(itemBudget);
	if (controlType == '不控制') {
		flag = true;
		return flag;
	}
	if (total <= itemBudget) {
		flag = true;
	} else {
		layer.alert(projectCostCenter + "成本中心预算金额不足,该成本中心当前期间预算为:" + itemBudget + ",请找预算联络人确认");
		flag = false;
	}
	return flag;

}

//校验同一成本中心下预算是否超出
function judgeIsOverBudget() {
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	var costAttribution = $("[name='costAttribution']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var isProject = $("[name='select_BJ5k']").val();
	var itemCode = $("[name='itemCode']").val();
	var flag = false;
	if (checkBudgetAndAmount == '1') {
		return true;
	}
	if (isProject == '0' && itemCode) {
		return judgeIsOverItemBudget();
	}
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var amount = 0;
		var transAmount = 0;
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		var budget = parseFloat($(this).find("td[data-label='成本中心预算']").find("input").val());
		var transSubsidy = parseFloat($(this).find("td[data-label='车贴金额']").find("input").val());
		var controlType = $(this).find("td[data-label='预算控制模式']").find("input").val();
		var transDate = $(this).find("td[data-label='报销月份']").find("input").val();
		budget = isNaN(budget) ? 0 : budget;
		transSubsidy = isNaN(transSubsidy) ? 0 : transSubsidy;
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			var costCenter1 = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
			var total = parseFloat($(this).find("td[data-label='借款金额']").find("input").val());
			var transDate1 = $(this).find("td[data-label='报销月份']").find("input").val();
			total = isNaN(total) ? 0 : total;
			if (costCenter == costCenter1) {
				amount += total;
			}
			if (transDate == transDate1) {
				transAmount += total;
			}
		});
		if (costAttribution == '3' && bussinessName == 'BM011') {
			if (transSubsidy >= transAmount) {
				flag = true;
			} else {
				flag = false;
				layer.alert("实际报销金额超出" + transDate + "交通补贴额度,当前月份交通补贴额度为:" + transSubsidy);
				return flag;
			}
		} else {
			flag = true;
			return flag;
			if (controlType == '不控制') {
				flag = true;
			} else {
				if (amount <= budget) {
					flag = true;
				} else {
					flag = false;
					layer.alert(costCenter + "成本中心预算金额不足,该成本中心当前期间预算为:" + budget + ",请找预算联络人确认");
					return flag;
				}
			}
		}

	});
	return flag;
}

//重构手选部门方法赋值成本中心
/*function getCostCenter(departmentId, elementId) {
        if (elementId == "choose_depart_xfxc_hide") {
            $.ajax({
                url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmentId,
                type: 'post',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        if (result.data == null) {
                            layer.alert("该部门没有对应的成本中心");
                            $("[name='projectCostCenter']").val("");
                            $("[name='projectCostCenterName']").val("");
                            return;
                        }
                        if (result.data.kostl == null) {
                            layer.alert("该部门没有对应的成本中心");
                            $("[name='projectCostCenter']").val("");
                            $("[name='projectCostCenterName']").val("");
                        } else {
                            $("[name='projectCostCenter']").parent().find("input[type='text']").val(result.data.kostl);
                            $("[name='projectCostCenter']").parent().find("input[type='hidden']").val(result.data.departmentId);
                            $("[name='projectCostCenterName']").val(result.data.cstctrShortText);
                        }
                    } else {
                        layer.alert("该部门没有对应成本中心,请联系人力解决");
                        $("[name='projectCostCenter']").val("");
                        $("[name='projectCostCenterName']").val("");
                    }
                },
                error: function(result) {

                }
            });
        } else {
            var index = $("#" + elementId).parent().parent().index();
            var tableName = $("#" + elementId).parent().parent().parent().parent().attr("name");
            $.ajax({
                url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmentId,
                type: 'post',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        if (result.data == null) {
                            layer.alert("该部门没有对应的成本中心，请联系人力部门解决");
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
                            return;
                        }
                        if (result.data.kostl == null) {
                            layer.alert("该部门没有对应的成本中心");
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
                        } else {
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(result.data.kostl);
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(result.data.departmentId);
                            $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").not(".no_data").find("input").val(result.data.cstctrShortText);
                        }
                    } else {
                        layer.alert(result.msg);
                        $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
                        $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
                    }
                },
                error: function(result) {

                }
            });
        }
    }*/

//成本中心页面选择复写方法
function getCostCenterForProject(elementId, result) {
	if (elementId == "choose_depart_xfxc_hide") {
		$("[name='projectCostCenterName']").val(result.cstctrShortText);
	}
}
//根据转账金额设置汇路值
function setSinkRoadByTotal(obj) {
	var amount = parseFloat($(obj).val());
	var index = $(obj).parent().parent().index();
	var sinkRoad = $("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").find("select").val();
	if (sinkRoad == '0') {
		return;
	}
	if (amount < 50000) {
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").not(".no_data").find("select").val("6");
	} else {
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").not(".no_data").find("select").val("7");
	}
	layui.form.render("select");
}

//根据收款人类型选择数据重写选值组件打开新的自定义页面
common.chooseDicDataPath = function(id, dicUid, dicCode) {
	var pageType = $("#pageType").val();
	var userUid = "";
	if (pageType == "startProcess") {
		userUid = $("#userId").val();
	} else {
		userUid = $("#insInitUser").val();
	}
	var bussinessName = $("[name='bussiness_name']").val();
	if (id == "choose_value_z8Hm_hide") {
		return common.getPath() + "/LYFData/queryAiWuProject?elementId=" + id + "&isSingle=true&userNo=" + userUid;
	}
}

common.chooseDicData = function(id, dicUid, dicCode) {
	var costAttribute = $("[name='costAttribution']").val();
	if (id != "choose_value_z8Hm_hide") {
		if (costAttribute != "2") {
			costAttribute = '3';
		}
		return common.chooseSysAwLifnr(id, costAttribute);
	}
	var title = "";
	if (id == "choose_value_z8Hm_hide") {
		title = "项目信息";
		var boo = queryCenterProject($("[name='select_BJ5k']"));
		if (!boo) {
			return;
		}

	} else {
		title = "选择员工或供应商";
	}
	var index = layer.open({
		type: 2,
		title: title,
		shadeClose: true,
		shade: 0.3,
		offset: "2%",
		area: ['600px', '90%'],
		content: common.chooseDicDataPath(id, dicUid, dicCode),
		success: function(layero, lockIndex) {
			var body = layer.getChildFrame('body', lockIndex);
			body.find('button#cancel_btn').on('click', function() {
				layer.close(lockIndex);
			});
			body.find('button#sure_btn').on('click', function() {
				layer.close(lockIndex);
			});
		}
	});
}

common.chooseDepart = function(elementId) {
	var company = $("[name='AwCompany']").val();
	if (!company) {
		layer.alert("请先选择借款所属公司，再选择成本中心");
		return;
	}
	common.chooseSysAwCostcenter(elementId, company);
}

//提交生成对应的报销单号
function createRBNoInForm() {
	var pageType = $("#pageType").val();
	var fourParent = parent.parent.parent.parent;
	var companyCode = $("[name='companyCode']").val();
	var mongoKey = $("[name='mongoKey']").val();
	var processType = $("[name='processType']").val();
	var reimburseNumber = $("[name='reimburseNumber']").val();
	var formData = {
		"companyCode": companyCode,
		"mongoKey": mongoKey,
		"processType": processType,
	};
	if (pageType == 'startProcess' || !reimburseNumber) {
		$.ajax({
			url: common.getPath() + '/LYFData/createAwRBNoInForm',
			type: 'post',
			data: JSON.stringify(formData),
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.status == 0) {
					$("[name='reimburseNumber']").not(".no_data").val(result.data);
					fourParent.layer.open({
						offset: 't',
						content: "报销单号:" + result.data,
						closeBtn: 0,
						shade: [0.1, '#ffffff'],
						shadeClose: true,
						time: 3000,
						btn: []
					});
					setInsTitleByBussinessName("[name='bussiness_name']");
				}
			},
			error: function(result) {
			}
		});
	}
}

//移除借款明细表中编码 成本中心只读属性,使其可手动输入搜索
function setPropertiesByType() {
	var num = Date.now();
	var costAttribute = $("[name='costAttribution']").val();
	var activityName = $("#activityName").val();
	if (costAttribute == '1' || costAttribute == '2') {
		if (activityName == '申请人填写' || activityName == '申请人确认') {
			formUtil.tableFun.changeEditByTableParam({
				name: 'loanDetail',
				colNum: 7
			});
		}
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			$(this).find("td[data-label='(供应商/个人)编码']").find("input[type='text']").removeAttr("readonly");
			$(this).find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
		});
	} else {
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'loanDetail',
			colNum: 7
		});
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			$(this).find("td[data-label='(供应商/个人)编码']").find("input[type='text']").attr("readonly", "readonly");
			$(this).find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
		});
	}

	console.log("setPropertiesByType:" + (Date.now() - num));
}

//百问百答页面
function _formContentLayuiOpen(param) {
	var bussiness_name_val = $("select[name='bussiness_name']").val();
	if (param == 1) {
		$.ajax({
			url: common.getPath() + '/rbHelp/qryHelpInfoByCode?code=' + bussiness_name_val,
			type: 'get',
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.status == 0) {
					var content = result.data.document;
					var note = result.data.note;
					if (content == null) {
						content = "";
					}
					if (note == null) {
						note = "";
					}
					layer.open({
						title: '帮助',
						shadeClose: true,
						shade: 0.3,
						area: ['600px', '400px'],
						//time: time,
						content: '<div style="padding-top:20px;width:100%;display:flex">' + '<div style="padding:10px;width:50%;box-shadow: 0px 0px 2px 1px #e6e6e6;">' + '<div style="color:#1e9fff">所需文档：</div>' + '<div style="margin-top:10px">' + content + '</div>' + '</div>' + '<div style="width:50%;padding:10px;box-shadow: 0px 0px 2px 1px #e6e6e6;margin-left:20px">' + '<div style="color:red">注意事项：</div>' + '<div style="margin-top:10px">' + note + '</div>' + '</div>' + '</div>',
					});
				}
			},
			error: function(result) {
			}
		});
	} else if (param == 2) {
		layer.open({
			type: 2,
			title: '百问百答',
			shadeClose: true,
			shade: 0.3,
			area: ['600px', '400px'],
			content: common.getPath() + '/LYFData/qryHelpInfo',
		})
	}

}
//百问百答按钮
function _formContentRender() {
	var buttom = "<div style='width:100%;text-align:end'><button type='button' class='layui-btn layui-btn-primary' onclick='_formContentLayuiOpen(1)'>帮助</button></div>"
	if (!common.isMobile()) {
		$("#insTitle_input").parent().parent().parent().parent().parent().before(buttom);
	}

}

//重写导入成功数据写入之前触发的方法
function beforeFileUploadEvent(fileObj) {
	var tableName = fileObj.parent().parent().parent().parent().attr("name");
	if (tableName == 'loanDetail') {
		$('[name="payees"]').find("tbody").find("tr:gt(0)").remove();
	}
}

//重写excel导入数据填充到数据表格补充函数
function fileUploadChangeEvent() {
	var costAttribution = $("[name='costAttribution']").val();
	//setUuidtoSortVal();//导入时重新设定排序号
	var num = Date.now();
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		//var index = $(this).index();
		//setUuidtoSortVal(index);
		//giveMoney($(this).find("td[data-label='借款金额']").find("input"));
		checkAndfomartNumber($(this).find("td[data-label='借款金额']").find("input"), 8, 2);
	});
	getAmount();

	setPropertiesByType();
	setPayeesInfoByFileUpload();
	// queryStoreLastMonthDetialForUpload();
	//getPayeesInfoByReimburseDetail();
	layui.form.render("select")
	console.log("导入赋值时间:" + (Date.now() - num));

}

//将导入回传会表单的JSON数据赋值到收款人信息表中
function setPayeesInfoByFileUpload() {
	var num = Date.now();
	var errorMsgArr = [];
	var errorUserArr = [];
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var errorArr = [];
		var errorMsg = "";
		var receiveCode = $(this).find("td[data-label='(供应商/个人)编码']").find("input[type='text']").val();
		var payeeInfoJson = $(this).find("td[data-label='收款人信息']").find("input").val();
		payeeInfoJson = JSON.parse(payeeInfoJson);
		var remark = payeeInfoJson.remarkB;
		if (remark.length > 20) {
			remark = remark.substring(0, 20);
		}
		var index = $(this).index();
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='收款人类型']").not(".no_data").find("select").val(payeeInfoJson.payeeType);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='收款人编号']").not(".no_data").find("input").val(payeeInfoJson.payeeNumber);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='收款人名称']").not(".no_data").find("input").val(payeeInfoJson.payee);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='收款人账号']").not(".no_data").find("input").val(payeeInfoJson.bankAccount);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").not(".no_data").find("select").val(payeeInfoJson.sinkRoad);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='收款人账户类型']").not(".no_data").find("select").val(payeeInfoJson.bankAccountType);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='开户行行号']").not(".no_data").find("input").val(payeeInfoJson.bankCode);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='开户行名称']").not(".no_data").find("input").val(payeeInfoJson.bankName);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='转账金额']").not(".no_data").find("input").val(payeeInfoJson.transferAmount);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='附言']").not(".no_data").find("input").val(remark);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='排序']").not(".no_data").find("input").val(payeeInfoJson.sort3);
		if (!payeeInfoJson.payee) {
			errorArr.push("收款人名称");
		}
		if (!payeeInfoJson.bankAccount) {
			errorArr.push("收款人账号");
		}
		if (!payeeInfoJson.bankCode) {
			errorArr.push("开户行行号");
		}
		if (!payeeInfoJson.bankName) {
			errorArr.push("开户行名称");
		}
		if (errorArr.length > 0) {
			errorMsg = "收款人:" + receiveCode + errorArr.toString() + "信息缺失"
			if (errorUserArr.indexOf(receiveCode) == -1) {
				errorUserArr.push(receiveCode);
				errorMsgArr.push(errorMsg);
			}
		}

	});
	if (errorMsgArr.length > 0) {
		layer.alert(errorMsgArr.toString() + ",请先在SAP进行主数据维护后再进行操作,如有疑问请找主数据维护人员");
	}
	judgeAllCostCenterExist();

	console.log("收款人信息赋值:" + (Date.now() - num));
}

//团建开始日期不能大于团建结束日期
function compareDate() {
	var startDate = $("[name='date_isB6']").val();
	var endDate = $("[name='date_QmCe']").val();
	if ((new Date(startDate.replace(/-/g, "\/"))) > (new Date(endDate.replace(/-/g, "\/")))) {
		layer.msg("日期填写错误,起始日期不能大于结束日期", {
			icon: 2
		});
		$("[name='date_QmCe']").val("");
	}
}

//获取团建补贴根据团建日期及对应成本中心人数计算额度
function setLeagueBuildFeeByTimeAndNumberOfPeople() {
	var BEGDA = $("[name='date_isB6']").val();
	var ENDDA = $("[name='date_QmCe']").val();
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var kostl = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		var index = $(this).index();
		if (kostl && BEGDA && ENDDA) {
			$.ajax({
				url: common.getPath() + '/rbQuerySAPInfo/accordingToTheCostCenterQueriedDuringThePeriod',
				type: 'post',
				data: JSON.stringify({
					"parentNode": "IN_DATA",
					"KOSTL": kostl,
					"BEGDA": BEGDA,
					"ENDDA": ENDDA
				}),
				contentType: "application/json;charset=utf-8",
				success: function(result) {
					var data = $.parseJSON(result.obj.responseBody);
					var dataJson = data["Body"]["ZIFHR_GET_RYS.Response"].ET_DATA.item;
					var flag = dataJson instanceof Array;
					var amount = 0;
					var officeWork = null;
					var jockey = null;
					if (flag) {
						for (var i = 0; i < dataJson.length; i++) {
							officeWork = parseInt(dataJson[i].RYS);
							officeWork = isNaN(officeWork) ? 0 : officeWork;
							jockey = parseInt(dataJson[i].RYS_HQ);
							jockey = isNaN(jockey) ? 0 : jockey;
							amount += 50 * officeWork + 10 * jockey;
						}
					} else {
						officeWork = parseInt(dataJson.RYS);
						officeWork = isNaN(officeWork) ? 0 : officeWork;
						jockey = parseInt(dataJson.RYS_HQ);
						jockey = isNaN(jockey) ? 0 : jockey;
						amount = 50 * officeWork + 10 * jockey;
					}
					$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心预算']").find("input").val(amount);
				}
			});
		}
	});
}

//生成流程主题规则
function setInsTitleByBussinessName(obj) {
	var bussinessName = $(obj).find("option:selected").text();
	var index = bussinessName.lastIndexOf("\-");
	bussinessName = bussinessName.substring(index + 1, bussinessName.length);
	var userName = $("#userName").val();
	var proName = "";
	var processType = $("[name='processType']").val();
	if (processType) {
		proName = "借款";
	}
	var insTitle = "";
	var reimburseNumber = $("[name='reimburseNumber']").val();
	if (userName && proName && bussinessName) {
		insTitle = userName + proName + bussinessName;
		if (reimburseNumber) {
			reimburseNumber = reimburseNumber.substr(11, reimburseNumber.length);
			insTitle = insTitle + reimburseNumber;
		}
		$("#insTitle_input").val(insTitle);
	}
}

// 清空普通表中排序号对应的收款人表的td
function cleanPayeesDateByIndex(index) {
	var num = Date.now();
	var detailId = $("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='排序']").not(".no_data").find('input').val();
	//var paixuIndex = $('[name="payees"]').find("tbody").find('tr').eq(0).find("td[data-label='排序']").index();
	var payeesTrs = $('[name="payees"]').find("tbody").find("tr");
	for (var i = 0; i < payeesTrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {
			$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0):lt('" + (0 - 1) + "') input").val("")
			$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0) select").val("");
		}
	}
	console.log("cleanPayeesDateByIndex:" + (Date.now() - num));
}

//窗体加载时，设置发起人成本中心代码
function setCostCenterCodeToHideInput(obj) {
	var val = $(obj).val();

	if (val == "0") {
		var tbpmCode = $("[name='bussiness_name']").val();
		if (tbpmCode == "" || tbpmCode == undefined) {
			layer.msg("请先选择业务名称");
			$("[name='select_BJ5k']").val("1");
			$("[name='select_BJ5k']").change();
			return;
		}

		var costCenterCode = $("[name='projectCostCenter']").val();
		if (!costCenterCode) {
			layer.msg("请选择项目归属成本中心");
			// $("[name='select_BJ5k']").val("1");
			// $("[name='select_BJ5k']").change();
			return;
		}
		$("[name='costCenterCode']").val(costCenterCode);

		//查询项目的数量
		queryCenterProject(obj);

	}
	layui.form.render("select");
}

//门店导入时水电费弹窗
function queryStoreLastMonthDetialForUpload() {
	var num = Date.now();
	//门店编码
	var code = "";

	var bussinessName = $("[name='bussiness_name']").val();
	var subjectType = $("[name='subject_type']").val();
	if (subjectType == "07" && bussinessName == "MDRC08") {
		var detailTrs = $("[name='loanDetail']").find("tbody").find("tr");
		for (var i = 0; i < detailTrs.length; i++) {
			var storeCode = $("[name='loanDetail']").find("tbody").find("tr").eq(i).find("td[data-label='(供应商/个人)编码']").find("input[type=text]").val();
			if (storeCode != "" && storeCode != undefined) {
				code += storeCode + ",";
			}
		}
		var index = layer.open({
			type: 2,
			title: "当前门店近三月报销明细",
			shadeClose: true,
			shade: 0.3,
			offset: "2%",
			area: ['945px', '90%'],
			content: common.getPath() + "/LYFData/queryStoreDetailInfo?codes=" + code,
			success: function(layero, lockIndex) {
				var body = layer.getChildFrame('body', lockIndex);
				body.find('button#cancel_btn').on('click', function() {
					layer.close(lockIndex);
				});
				body.find('button#sure_btn').on('click', function() {
					layer.close(lockIndex);
				});
			}
		});

		console.log("queryStoreLastMonthDetialForUpload:" + (Date.now() - num));
	}

}

//根据成本中心编码查询成本中心下的所有项目并放到下拉框中
function queryCenterProject(obj) {
	//成本中心编码，这个成本中心编码怎么来，还需要问
	//判断是否项目报销
	var val = $(obj).val();
	var flag = false;
	if (val == "0") {
		var tbpmCode = $("[name='bussiness_name']").val();
		if (tbpmCode == "" || tbpmCode == undefined) {
			layer.msg("请先选择业务名称");
			$("[name='select_BJ5k']").val("1");
			$("[name='select_BJ5k']").change();
			flag = false;
			return flag;
		}

		var costCenterCode = $("[name='projectCostCenter']").val();
		if (!costCenterCode) {
			layer.msg("请选择项目归属成本中心");
			// $("[name='select_BJ5k']").val("1");
			// $("[name='select_BJ5k']").change();
			flag = false;
			return flag;
		}
		$("[name='costCenterCode']").val(costCenterCode);

		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryCenterProject?costCenter=' + costCenterCode + '&tbpmCode=' + tbpmCode + '&pageSize=10&pageNum=1',
			type: 'get',
			contentType: "application/json;charset=utf-8",
			async: false,
			success: function(result) {
				if (result.data) {
					if (result.data.list.length == 0) {
						layer.msg("当前成本中心:" + costCenterCode + " 下无项目信息");
						// $("[name='select_BJ5k']").val("1");
						// $("[name='select_BJ5k']").change();
						flag = false;
					} else {
						flag = true;
					}

				} else {
					layer.msg("接口异常");
					// $("[name='select_BJ5k']").val("1");
					// $("[name='select_BJ5k']").change();
					flag = false;
				}

				layui.form.render("select");
			}
		})

	}
	return flag;

}

function queryStoreLastMonthDetial(obj) {
	//门店编码
	var code = $(obj).val();
	var bussinessName = $("[name='bussiness_name']").val();
	var subjectType = $("[name='subject_type']").val();
	if (subjectType == "07" && bussinessName == "MDRC08") {
		var index = layer.open({
			type: 2,
			title: "当前门店近三月报销明细",
			shadeClose: true,
			shade: 0.3,
			offset: "2%",
			area: ['945px', '90%'],
			content: common.getPath() + "/LYFData/queryStoreDetailInfo?codes=" + code,
			success: function(layero, lockIndex) {
				var body = layer.getChildFrame('body', lockIndex);
				body.find('button#cancel_btn').on('click', function() {
					layer.close(lockIndex);
				});
				body.find('button#sure_btn').on('click', function() {
					layer.close(lockIndex);
				});
			}
		});
	}

}
//输入项目关联项目预算
function queryProjectBudget(obj) {
	//项目编码
	var itemCode = $(obj).val();
	$.ajax({
		url: common.getPath() + '/LYFSynRB/queryProjectBudget?itemCode=' + itemCode,
		type: 'get',
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			layer.msg("当前项目的预算为:" + result.data, {
				icon: 2
			});
		}
	})
}

//控制RL12、RL13可发起人类型只能为本人
function setStartProcessApprovalByBussinessName() {
	var bussinessName = $("[name='bussiness_name']").val();
	var costAttribution = $("[name='costAttribution']").val();
	if ((bussinessName == 'RL12' || bussinessName == 'RL13') && costAttribution != '3') {
		layer.msg("月度或年度报销收款人类型只能为本人", {
			icon: 2
		});
		return false;
	} else
		return true;
}

//控制定额可发起时间不能在每月10号及10号以前
/*function setSubmitTimeByBussinessName(){
    	var bussinessName = $("[name='bussiness_name']").val();
    	var sysDate = new Date();
    	sysDate = sysDate.getDate();
    	if(bussinessName == 'BM011'){
    		if(sysDate <= 10){
    			layer.alert("该类型报销请于每月11日以后提交");
    			return false;
    		}
    		return true;
    	}else{
    		return true;
    	}
    }*/

//收款人信息提供按钮手动打开供应商页面选择对应供应商
function setNewLifnrInfoInPayees(obj) {
	var elementId = $(obj).attr("id");
	var receiveCode = $(obj).parent().find("input").val();
	if (!receiveCode) {
		layer.alert("请先选择明细项收款人");
		return;
	}
	if (common.isMobile()) {
		mobileRBUtil.chooseLifnr(elementId);
	} else {
		common.chooseSysAwBankinfo(elementId, receiveCode);
	}
}

//明细备注字段自动填充到收款人信息表中
/*function setRemarkByTableDetail(obj) {
        var num = Date.now();
        var summary = $(obj).val();
        summary = summary.substring(0, 20);
        var index = $(obj).parent().parent().index();
        var tableName = $(obj).parent().parent().parent().parent().attr("name");
        var sortNo1 = $(obj).parent().parent().find("td[data-label='排序']").find("input").val();
        $("[name='payees'] tbody").find("tr").each(function() {
            var sortNo2 = $(this).find("td[data-label='排序']").find("input").val();
            if (sortNo1 == sortNo2) {
                $(this).find("td[data-label='附言']").not(".no_data").find("input").val(summary);
            }
        });
        console.log("setRemarkByTableDetail:" + (Date.now() - num));
    }*/

//根据采购订单号批量查询校验实际报销金额是否在采购订单金额总和范围内
function getPurchaseOrdersMoney(obj) {
	var purchaseOrderNo = $(obj).val();
	var purchaseArr = purchaseOrderNo.split(",");
	var errorPurchaseArr = [];
	for (var i = 0; i < purchaseArr.length; i++) {
		if (!purchaseArr[i]) {
			purchaseArr.remove(purchaseArr[i]);
			break;
		}
		if (purchaseArr[i].length > 10) {
			errorPurchaseArr.push(purchaseArr[i]);
		}
	}
	if (errorPurchaseArr.length > 0) {
		layer.msg(errorPurchaseArr.toString() + "采购订单号最长为10位,多个订单号通过,分隔请重新确认");
		$("[name='purchaseOrderNo']").val("");
		$("[name='orderMoney']").val("");
		return;
	}
	$.ajax({
		url: common.getPath() + '/rbQuerySAPInfo/getPurchaseOrdersMoney?orderIds=' + purchaseOrderNo,
		type: 'post',
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (result.status == 0) {
				var dataArr = result.data;
				var total = 0;
				if (dataArr.length > 0) {
					for (var i = 0; i < dataArr.length; i++) {
						total = NumUtil.add(total, parseFloat(dataArr[i].netwr), 2);
					}
					$("[name='orderMoney']").not(".no_data").val(total);
				} else {
					layer.msg("采购订单号:" + purchaseOrderNo + "不存在,请重新确认");
					$("[name='purchaseOrderNo']").val("");
					$("[name='orderMoney']").val("");
				}

			} else {
				layer.msg(result.msg);
				$("[name='purchaseOrderNo']").val("");
				$("[name='orderMoney']").val("");
			}

		},
		error: function(result) {
		}
	});
}

//当采购订单号存在时判断实际含税金额(报销金额)与税金+采购订单净值总和相等
/*function judgeTotalEqualTaxAndOrderMoney(){
    	var orderMoney = $("[name='orderMoney']").val();
    	var total = 0;
    	var taxAmount = 0;
    	if(orderMoney){
    		$("[name='reimburseDetail'] tbody").find("tr").each(function(){
    			var amount = parseFloat($(this).find("td[data-label='金额']").find("input").val());
    			var tax = parseFloat($(this).find("td[data-label='税金']").find("input").val());
    			total = NumUtil.add(total,amount,2);
    			taxAmount = NumUtil.add(taxAmount,tax,2);
    		});
    		if(total == (taxAmount+parseFloat(orderMoney))){
    			return true;
    		}else{
    			if(total < (taxAmount+parseFloat(orderMoney))){
    				layer.msg("实际报销金额(含税金额)与(税金总和+采购订单净值总和)不一致,低于实际报销金额:"+(NumUtil.minus(total,(taxAmount+parseFloat(orderMoney)),2)), {
    					icon: 2
    				});
    			}else{
    				layer.msg("实际报销金额(含税金额)与(税金总和+采购订单净值总和)不一致,超出实际报销金额:"+(NumUtil.minus(total,(taxAmount+parseFloat(orderMoney)),2)), {
    					icon: 2
    				});
    			}
    			return false;
    		}
    	}
    }
    */
//判断实际报销金额是否超过采购订单金额
/*function judgeAmountIsOverOrderMoney(obj){
    	var num = Date.now();
    	var amount = $(obj).val();
    	var index = $(obj).parent().parent().index();
    	var orderMoney =$(obj).parent().parent().find("td[data-label='订单金额']").find("input").val();
    	if(orderMoney){
    		orderMoney = parseFloat(orderMoney);
    		orderMoney = isNaN(orderMoney)? 0:orderMoney;
    		if(amount > orderMoney){
    			layer.msg("借款金额超过实际采购订单金额总和,差异金额总和:"+NumUtil.minus(amount,orderMoney,2));
    			$("[name='loanDetail'] tbody").find("tr:eq("+index+")").find("td[data-label='金额']").not(".no_data").find("input").val(orderMoney);
    		}
    	}
    	console.log("judgeAmountIsOverOrderMoney:"+(Date.now()-num));
    }*/

//判断收款人是否属于黑名单中的人员(黑名单人员不予报销)
function judgeExistInBlacklist() {
	var num = Date.now();
	var codeArr = [];
	var errorCodeArr = [];
	var flag = false;
	$("[name='payees'] tbody").find("tr").each(function() {
		var code = $(this).find("td[data-label='收款人编号']").find("input").val();
		if (codeArr.indexOf(code) == -1 && code) {
			codeArr.push(code);
		}
	});
	if (codeArr.length > 0) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/existInBlacklist?code=' + codeArr.toString(),
			type: 'get',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == 0 && result.data.length == 0) {
					flag = true;
				} else {
					for (var i = 0; i < result.data.length; i++) {
						if (errorCodeArr.indexOf(result.data[i].code) == -1) {
							errorCodeArr.push(result.data[i].code);
						}
					}
					layer.msg("收款人" + errorCodeArr.toString() + "属于黑名单人员,不予报销,请重新确认", {
						icon: 2
					});
					flag = false;
				}

			},
			error: function(result) {
			}
		});
	} else {
		return true;
	}
	return flag;
	console.log("judgeExistInBlacklist:" + (Date.now() - num));
}

//校验门店是否存在
function judgeWerkExistByCode(obj) {
	var num = Date.now();
	var werk = $(obj).val();
	var index = $(obj).parent().parent().index();
	if (!werk) {
		return;
	}
	$.ajax({
		url: common.getPath() + '/rbQuerySAPInfo/getWerkAndLinInfo',
		// 		url: 'localhost:8080/bpm/rbQuerySAPInfo/getWerkAndLinInfo',

		type: 'post',
		dataType: 'json',
		data: JSON.stringify({
			"werk": werk
		}),
		contentType: 'application/json;charset=UTF-8',
		success: function(result) {

			var data = result.data;
			if (data.length <= 0) {
				layer.msg('该门店不存在,请重新确认', {
					icon: 2
				});
				$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='门店费用归属编码']").find("input").val("");
				return;

			} else {
				$("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(供应商/个人)编码']").not(".no_data").find(".value_id").val(result.data[0].name1);
			}
			// queryStoreLastMonthDetial(obj);
			layui.form.render("select");

		}
	});
	console.log("judgeWerkExistByCode:" + (Date.now() - num));
}

//因团建实际是不控制预算的 所以这里直接动态设定所有的明细项控制模式为不控制
//批量获取团建成本中心对应人数预算总和
function qryLeagueByCode() {
	var num = Date.now();
	var costCenterArr = [];
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		if (costCenterArr.indexOf(costCenter) == -1) {
			costCenterArr.push(costCenter);
		}
	});
	var beginTime = $("[name='date_isB6']").val();
	var endTime = $("[name='date_QmCe']").val();
	if (costCenterArr.length > 0 && beginTime && endTime) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/qryLeagueByCode?centerCode=' + costCenterArr.toString() + '&endTime=' + endTime + '&beginTime=' + beginTime,
			type: 'get',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == '0') {
					var dataArr = result.data;
					if (dataArr.length > 0) {
						for (var i = 0; i < dataArr.length; i++) {
							var costCenter = dataArr[i].kostl;
							var budget = dataArr[i].available;
							var controlType = dataArr[i].controlType;
							$("[name='loanDetail'] tbody").find("tr").each(function() {
								var costCenterCode = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
								if (costCenter == costCenterCode) {
									$(this).find("td[data-label='成本中心预算']").not(".no_data").find("input").val(budget);
									$(this).find("td[data-label='预算控制模式']").not(".no_data").find("input").val(controlType);
								}
							});
						}
					}
				} else {
					layer.msg("成本中心在团建维护表中不存在");
				}

			},
			error: function(result) {
			}
		});
	}
	console.log("qryLeagueByCode:" + (Date.now() - num));
}

//批量获取门店类型数据判断门店是否冻结：0”代表利润中心不存在；“1”代表利润中心存在，未被冻结；“2”代表利润中心存在，已被冻结。
/*function getWerksIsFrozen() {
        var werks = [];
        var frozenWerk = [];
        var errorWerk = [];
        var costAttribution = $("[name='costAttribution']").val();
        var flag = false;
        var companyArr = [];
        var companyCode = $("[name='companyCode']").val();
        $("[name='loanDetail'] tbody").find("tr").each(function() {
            var storeCode = $(this).find("td[data-label='(供应商/个人)编码']").find("input[type='text']").val();
            if (costAttribution == '1') {
                if (werks.indexOf(storeCode) == -1) {
                    werks.push(storeCode);
                }
            }

        });
        if (werks.length > 0) {
            $.ajax({
                url: common.getPath() + '/LYFData/queryWerksByStoreCodeList?werks=' + werks.toString(),
                type: 'post',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        var dataArr = result.data;
                        var errorMsg = "";
                        for (var i = 0; i < dataArr.length; i++) {
                            var werk = dataArr[i].werks;
                            var prctrWerks = dataArr[i].prctrWerks;
                            var bukrs = dataArr[i].bukrs;
                            if (prctrWerks == '0') {
                                if (errorWerk.indexOf(werk) == -1) {
                                    errorWerk.push(werk);
                                }
                            } else if (prctrWerks == '2') {
                                if (frozenWerk.indexOf(werk) == -1) {
                                    frozenWerk.push(werk);
                                }
                            }
                            if (companyArr.indexOf(bukrs) == -1) {
                                companyArr.push(bukrs);
                            }
                        }
                        if (companyArr.length == 0) {
                            layer.msg("当前门店没有对应到公司,不能进行报销,请重新确认", {
                                icon: 2
                            });
                            flag = false;
                        } else if (companyArr.length > 1) {
                            layer.msg("当前门店对应多家公司,不能进行报销,请重新确认", {
                                icon: 2
                            });
                            flag = false;
                        } else {
                            if (companyCode == companyArr[0]) {
                                flag = true;
                            } else {
                                layer.msg("门店对应公司编码与成本中心预算对应公司不一致,请重新确认", {
                                    icon: 2
                                });
                                flag = false;
                            }
                        }
                        if (flag) {
                            if (errorWerk.length > 0) {
                                errorMsg += "门店:" + errorWerk.toString() + "对应利润中心不存在";
                            }
                            if (frozenWerk.length > 0) {
                                errorMsg += "门店:" + frozenWerk.toString() + "对应利润中心被冻结";
                            }
                            if (errorMsg) {
                                layer.msg(errorMsg);
                            }
                        }

                    } else {
                        layer.msg(
                            result.msg, {
                                icon: 2
                            }
                        );
                        flag = false;
                    }

                },
                error: function(result) {

                }
            });
            return flag;
        }
        return true;
    }*/

//根据环节设定驳回发起人时是否触发预算解锁隐藏值
/*function setIsBudgetUnlockByActivityName() {
        var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
        if (!checkBudgetAndAmount) {
            $("[name='checkBudgetAndAmount']").not(".no_data").val("0");
        }
    }*/

/**
 此方法只在财务环节驳回到发起人进行校验，业务审核环节驳回预算进行释放
 但财务环节驳回发起人预算不释放，此处可以支持修改金额 但因为预算不释放故不进行预算校验
 修改金额的前提是只支持改小 不能超过原本他申请所报销的金额 此处校验修改前后金额
 */
function judgeAmountIsOverCheckAmount() {
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	//业务环节驳回默认
	if (checkBudgetAndAmount == '0' || !checkBudgetAndAmount) {
		return true;
	}
	var actualPaymentAmount = parseFloat($("[name='actualPaymentAmount']").val());
	//用于验证的实际���款金额
	actualPaymentAmount = isNaN(actualPaymentAmount) ? 0 : actualPaymentAmount;
	var total = parseFloat($("[name='total']").val());
	total = isNaN(total) ? 0 : total;
	if (total <= actualPaymentAmount) {
		return true;
	}
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		var checkAmount = parseFloat($(this).find("td[data-label='��证金']").find("input").val());
		var amount = parseFloat($(this).find("td[data-label='借款金额']").find("input").val());
		var index = $(this).index();
		if (amount != checkAmount) {
			$(this).find("td[data-label='借款金额']").find("input").val(checkAmount);
			giveMoney($("[name='loanDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='借款金额']").find("input"));
		}

	});
	getAmount();
	layer.msg("财务驳回以后修改金额以后当前报销实际付款不能超过原有实际报销付款金额,现已帮您修改回原始值");
	return false;
}

//提交以后生成对应的的对应的验证金
function setCheckAmount() {
	var activityName = $("#activityName").val();
	var pageType = $("#pageType").val();
	var total = $("[name='total']").val();
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	if (activityName == '申请人填写') {
		$("[name='loanDetail'] tbody").find("tr").each(function() {
			var amount = $(this).find("td[data-label='借款金额']").find("input").val();
			var checkAmount = $(this).find("td[data-label='验证金']").find("input").val();
			if (!checkAmount || checkBudgetAndAmount == '0') {
				$(this).find("td[data-label='验证金']").not(".no_data").find("input").val(amount);
			}
		});
		if (checkBudgetAndAmount == '0') {
			$("[name='actualPaymentAmount']").not(".no_data").val(total);

		}
	}
}

//业务招待费根据填写人数计算人均金额
function getPerCapitaAmount() {
	var bussinessName = $("[name='bussiness_name']").val();
	if (bussinessName != 'BM10') {
		return;
	}
	var total = parseFloat($("[name='total']").val());
	total = isNaN(total) ? 0 : total;
	var bussinessGuestNum = parseFloat($("[name='bussinessGuestNum']").val());
	bussinessGuestNum = isNaN(bussinessGuestNum) ? 0 : bussinessGuestNum;
	var perCapitaAmount = NumUtil.divide(total, bussinessGuestNum, 2);
	$("[name='perCapitaAmount']").not(".no_data").val(perCapitaAmount);
}

function judgeCostCenterExistForProject(obj) {

	var kostl = $(obj).val();
	$.ajax({
		url: common.getPath() + '/LYFData/selectCostCenterAndDepartmentByKostl?kostl=' + kostl,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json;charset=UTF-8',
		async: false,
		success: function(result) {
			if (result.status == 0) {
				if (result.data.length > 1 || !result.data[0].departmentId) {
					layer.alert("成本中心:" + kostl + "存在多个部门或没有对应到部门,请找人事协调")
					$(obj).val("");
					$("[name='projectCostCenterName']").val("");
				} else {
					$(obj).parent().find("input[type='text']").val(result.data[0].kostl);
					$(obj).parent().find("input[type='hidden']").val(result.data[0].departmentId);
					$("[name='projectCostCenterName']").val(result.data[0].cstctrShortText)
				}
			} else {
				layer.alert(result.msg);
				$(obj).val("");
				$("[name='projectCostCenterName']").val("");
			}
		},
		error: function(result) {
		}
	});
}

//是否SAP下采购订单
function judgeIsPurchaseOrderInSAP(obj) {
	var isPurchaseOrder = $(obj).val();
	if (isPurchaseOrder == '0') {
		formUtil.changeShowByName("purchaseOrderNo");
		formUtil.changeShowByName("orderMoney");
	} else {
		formUtil.changeHiddenByName("purchaseOrderNo");
		formUtil.changeHiddenByName("orderMoney");
		$("[name='purchaseOrderNo']").val("");
		$("[name='orderMoney']").val("");
	}
}

// 金额数值格式调整
function NumberFormat() {
	$("[name='loanDetail'] tbody").find("tr").each(function() {
		checkAndfomartNumber($(this).find("td[data-label='借款金额']").find("input"), 16, 2);
	});
	$("[name='payees'] tbody").find("tr").each(function() {
		checkAndfomartNumber($(this).find("td[data-label='转账金额']").find("input"), 16, 2);
	});
	getAmount();
	checkAndfomartNumber($("[name='total']"), 16, 2);
}

// 申请环节提供验证供应商 若收款人对应供应商时且收款人为500260的情况下是否出现多条
function judgePayeeTypeIsTrue() {
	var bankCodeArr = [];
	$("[name='payees'] tbody").find("tr").each(function() {
		var payeeType = $(this).find("td[data-label='收款人类型']").find("select").val();
		var payeeCode = $(this).find("td[data-label='收款人编号']").find("input").val();
		var bankCode = $(this).find("td[data-label='收款人账号']").find("input").val();
		if (payeeType == '2' && payeeCode == '500260') {
			if (bankCodeArr.indexOf(bankCode) == -1) {
				bankCodeArr.push(bankCode);
			}
		}
	});
	if (bankCodeArr.length > 1) {
		layer.msg("收款人类型为供应商且使用一次性供应商进行报销时,不允许一次性供应商对应多个不同的银行账号", {
			icon: 2
		});
		return false;
	} else {
		return true;
	}
}
// </script>
