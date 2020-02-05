// <script type='text/javascript'>
var a0;
var a1;
var a2;
var a3;
var a4;
var a5;
var a6;
var a7;
var a8;
var a9;
var a10;

var c0;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var c10;
var c11;
var c12;
var c13;
var c14;
var c15;
var c16;
var c17;
var c18;
var c19;
var c20;
var c21;
var c22;
var c23;
var c24;
var c25;
var c26;
var c27;
var c28;
var c29;
var c30;
var c31;
var c32;
var c33;
var c34;
var c35;
var c36;
var c37;
var c38;
var c39;
var trAObj0;
var trCObj0;
$(function() {

	//移动端详细页返回到tr
	_mobileShowDataToTr();
	//填写提示
	$("#loadFile_div").find("i[onclick='uploadImg();']").after("图片上传");
	$("#loadFile_div").find("i[onclick='uploadFile();']").after("文件上传");
	// $("#loadFile_div").find("i[onclick='uploadFile();']").hide()
	trAObj0 = $("[name='payees']").find("tbody").find("tr").eq(0);
	trCObj0 = $("[name='reimburseDetail']").find("tbody").find("tr").eq(0);
	a3 = trAObj0.find("td[data-label='收款人账号']").index()
	a5 = trAObj0.find("td[data-label='收款人账户类型']").index()
	a6 = trAObj0.find("td[data-label='开户行行号']").index()
	a7 = trAObj0.find("td[data-label='开户行名称']").index()
	a10 = trAObj0.find("td[data-label='排序']").index()
	a2 = trAObj0.find("td[data-label='收款人名称']").index()
	a4 = trAObj0.find("td[data-label='汇路']").index();
	a0 = trAObj0.find("td[data-label='收款人类型'][class!='no_data']").index();
	a1 = trAObj0.find("td[data-label='收款人编号'][class!='no_data']").index();
	a8 = trAObj0.find("td[data-label='转账金额']").index();
	a9 = trAObj0.find("td[data-label='附言']").index();
	a11 = trAObj0.find("td[data-label='操作']").index();

	c0 = trCObj0.find("td[data-label='摘要'][class!='no_data']").index();
	c1 = trCObj0.find("td[data-label='币种']").index();
	c2 = trCObj0.find("td[data-label='汇率']").index();
	c3 = trCObj0.find("td[data-label='人民币金额']").index();
	c4 = trCObj0.find("td[data-label='发票号']").index();
	c6 = trCObj0.find("td[data-label='税金']").index();
	c7 = trCObj0.find("td[data-label='税率']").index();
	c8 = trCObj0.find("td[data-label='备注']").index();
	c9 = trCObj0.find("td[data-label='收款人类型']").index();
	c11 = trCObj0.find("td[data-label='门店费用归属编码']").index();
	c12 = trCObj0.find("td[data-label='报销月份']").index();
	c13 = trCObj0.find("td[data-label='科目编码']").index();
	c14 = trCObj0.find("td[data-label='科目名称']").index();
	c15 = trCObj0.find("td[data-label='分配']").index();
	c5 = trCObj0.find("td[data-label='发票有无']").index()
	c10 = trCObj0.find("td[data-label='名称']").index()
	c16 = trCObj0.find("td[data-label='借款单据号']").index()
	c17 = trCObj0.find("td[data-label='分 配前置']").index()
	c18 = trCObj0.find("td[data-label='排序']").index()
	c19 = trCObj0.find("td[data-label='明细编号']").index()
	c20 = trCObj0.find("td[data-label='OCR验真信息']").index()
	c21 = trCObj0.find("td[data-label='发票对应进项税']").index()
	c22 = trCObj0.find("td[data-label='成本中心预算']").index()
	c23 = trCObj0.find("td[data-label='预算控制模式']").index();
	c24 = trCObj0.find("td[data-label='车贴金额']").index();
	c25 = trCObj0.find("td[data-label='预提金额']").index();
	c26 = trCObj0.find("td[data-label='收款人信息']").index();
	c27 = trCObj0.find("td[data-label='采购订单号']").index();
	c28 = trCObj0.find("td[data-label='报销类型']").index();
	c29 = trCObj0.find("td[data-label='发生截止日期']").index();
	c30 = trCObj0.find("td[data-label='结束日期']").index();
	c31 = trCObj0.find("td[data-label='金 额']").index();
	c32 = trCObj0.find("td[data-label='发票类型']").index();
	c33 = trCObj0.find("td[data-label='本期度数(电谷)']").index();
	c34 = trCObj0.find("td[data-label='本期度数(水/煤/电峰)']").index();
	c35 = trCObj0.find("td[data-label='度数2']").index();
	c36 = trCObj0.find("td[data-label='(门店/供应商/个人)编码']").index();
	c37 = trCObj0.find("td[data-label='成本中心代码']").index();
	c38 = trCObj0.find("td[data-label='成本中心名称']").index();
	c39 = trCObj0.find("td[data-label='验证金']").index();
	c40 = trCObj0.find("td[data-label='门店名称']").index();
	c41 = trCObj0.find("td[data-label='操作']").index();

	if (common.isMobile()) {
		a3 = trAObj0.find("td[data-label='收款人账号']").index() - 2;
		a5 = trAObj0.find("td[data-label='收款人账户类型']").index() - 2;
		a6 = trAObj0.find("td[data-label='开户行行号']").index() - 2;
		a7 = trAObj0.find("td[data-label='开户行名称']").index() - 2;
		a1 = trAObj0.find("td[data-label='收款人编号'][class!='no_data']").index() - 2;
		a10 = trAObj0.find("td[data-label='排序']").index() - 2;
		a2 = trAObj0.find("td[data-label='收款人名称']").index() - 2;
		a4 = trAObj0.find("td[data-label='汇路']").index() - 2;
		a0 = trAObj0.find("td[data-label='收款人类型'][onclick!='showDataTr(this)']").index() - 2;
		a8 = trAObj0.find("td[data-label='转账金额']").index() - 2;
		a9 = trAObj0.find("td[data-label='附言']").index() - 2;
		a11 = trAObj0.find("td[data-label='操作']").index() - 2;

		c5 = trCObj0.find("td[data-label='发票有无']").index() - 3;
		c10 = trCObj0.find("td[data-label='名称']").index() - 3;
		c11 = trCObj0.find("td[data-label='门店费用归属编码']").index() - 3;
		c12 = trCObj0.find("td[data-label='报销月份']").index() - 3;
		c13 = trCObj0.find("td[data-label='科目编码']").index() - 3;
		c14 = trCObj0.find("td[data-label='科目名称']").index() - 3;
		c15 = trCObj0.find("td[data-label='分配']").index() - 3;
		c16 = trCObj0.find("td[data-label='借款单据号']").index() - 3;
		c17 = trCObj0.find("td[data-label='分 配前置']").index() - 3;
		c18 = trCObj0.find("td[data-label='排序']").index() - 3;
		c19 = trCObj0.find("td[data-label='明细编号']").index() - 3;
		c20 = trCObj0.find("td[data-label='OCR验真信息']").index() - 3;
		c21 = trCObj0.find("td[data-label='发票对应进项税']").index() - 3;
		c22 = trCObj0.find("td[data-label='成本中心预算']").index() - 3;
		c23 = trCObj0.find("td[data-label='预算控制模式']").index() - 3;
		c24 = trCObj0.find("td[data-label='车贴金额']").index() - 3;
		c25 = trCObj0.find("td[data-label='预提金额']").index() - 3;
		c26 = trCObj0.find("td[data-label='收款人信息']").index() - 3;
		c27 = trCObj0.find("td[data-label='采购订单号']").index() - 3;
		c28 = trCObj0.find("td[data-label='报销类型']").index() - 3;
		c29 = trCObj0.find("td[data-label='发生截止日期']").index() - 3;
		c30 = trCObj0.find("td[data-label='结束日期']").index() - 3;
		c31 = trCObj0.find("td[data-label='金 额']").index() - 3;
		c32 = trCObj0.find("td[data-label='发票类型']").index() - 3;
		c34 = trCObj0.find("td[data-label='本期度数(电谷)']").index() - 3;
		c33 = trCObj0.find("td[data-label='本期度数(水/煤/电峰)']").index() - 3;
		c35 = trCObj0.find("td[data-label='度数2']").index() - 3;
		c36 = trCObj0.find("td[data-label='(门店/供应商/个人)编码']").index() - 3;
		c37 = trCObj0.find("td[data-label='成本中心代码']").index() - 3;
		c38 = trCObj0.find("td[data-label='成本中心名称']").index() - 3;
		c39 = trCObj0.find("td[data-label='验证金']").index() - 3;
		c40 = trCObj0.find("td[data-label='门店名称']").index() - 3;
		c1 = trCObj0.find("td[data-label='币种']").index() - 3;
		c2 = trCObj0.find("td[data-label='汇率']").index() - 3;
		c3 = trCObj0.find("td[data-label='人民币金额']").index() - 3;
		c4 = trCObj0.find("td[data-label='发票号']").index() - 3;
		c5 = trCObj0.find("td[data-label='发票有无']").index() - 3;
		c6 = trCObj0.find("td[data-label='税金']").index() - 3;
		c7 = trCObj0.find("td[data-label='税率']").index() - 3;
		c8 = trCObj0.find("td[data-label='备注']").index() - 3;
		c9 = trCObj0.find("td[data-label='收款人类型']").index() - 3;
		c0 = trCObj0.find("td[data-label='摘要'][onclick!='showDataTr(this)']").index() - 3;

		c41 = trCObj0.find("td[data-label='操作']").index() - 3;

	}

	var num = Date.now();
	//设置是否预算解锁
	setIsBudgetUnlockByActivityName();
	$("[name='emailKey']").val("报销");
	$("[name='mongoKey']").val("ReimburseNoIncrementIdByDateKey");
	$("[name='processType']").val("FYBX");
	var activityName = $("#activityName").val();
	var originalConfig = undefined
	var globalConfig = {}
	getGlobalConfigInfo();
	//业务事项改变(费用报销/差旅报销)填写不同表单
	changeEditTable();

	changeColumnShowOrHide();
	//窗体加载隐藏验真按钮
	hideVerButton();
	//财务环节显示财务审核确认部分
	changeHiddenByActivity();
	//业务名称如果对应BM01、BM011则显示车贴年月必填项
	changeSubsidyDateShowOrHide();
	changeShowOrHideByBillType();
	changeTableProperties();
	//业务事项控制其他信息显示字段
	changeEditByBussiness("[name='bussiness_name']");
	setBussinessOption();
	var companyCode = "";
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司", "财务经理-子公司", "财务总监-子公司", "财务再次审核单据", "出纳进行付款"];
	if (activityName == '申请人填写' || activityName == '申请人填写(预算解锁)' || activityName == '申请人确认') {
		if (!common.isMobile()) {
			layer.open({
				content: "手机端报销不支持电脑填写",
				btn: 'OK'
			});
			$("#btn_span1").hide();
		}

		companyCode = $("#companyNum").val();
		$("[name='initCompanyCode']").val(companyCode);
		//是否冲销借款
		//是-隐藏导入导出按钮 否-显示导入导出按钮
		changeByIsChargeAgainst("[name='writeOffLoan']");

		//judgeUserIsHeadOrSub();
		//是否合同付款
		judgeIsContractPayment("[name='select_YNYP']");
		//是否项目报销
		isProjectReimb("[name='select_BJ5k']");
		// 设置表格第一行的排序号
		giveDiYiHangBiaoJi();
		//合计金额
		getAmount();
		var writeOffLoan = $("[name='writeOffLoan']").val();
		if (writeOffLoan.trim() == "") {
			//是否冲销借款默认为否
			$("[name='writeOffLoan']").val("1");
			$("[name='writeOffLoan']").change();
		}
		var subjectType = $("[name='subject_type']").val();
		//业务事项默认为门店运营费
		if (!subjectType.trim()) {
			$("[name='subject_type']").val("07");
			//触发change，否则业务名称没有值
			$("[name='subject_type']").change();
		}
		var bussinessName = $("[name='bussiness_name']").val();
		if (bussinessName.trim() == "") {
			//业务名称默认为水电费
			$("[name='bussiness_name']").val("MDRC08");
			$("[name='bussiness_name']").change();
		}
		layui.form.render("select");

		var pageType = $("#pageType").val();
		if (pageType == 'startProcess') {
			$("[name = 'reimburseDetail'] tbody td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "");
		} else {}
		setPagePathForMobile();
		getSwitchForOcr();

		setCheckAmount();

		letUnicodeShow();
		// formUtil.tableFun.chooseModelHiddenByTableParam({
		// name: 'reimburseDetail',
		// colNum: c15//分配
		// });

	} else {
		if (common.isMobile()) {
			$("[name='reimburseDetail']").find("td[data-label='操作']").hide();
		} else {
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c41//操作
			});
		}
	}
	//手动添加onchange事件
	addOnChangeEvent();
	if (activityArr.indexOf(activityName) != -1) {
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'reimburseDetail'
		});
		$("#form_content_div").find("table[title='财务审核确认']").prev().find(".show_table").click();

		letUnicodeShow();
	}
	setHaveInvoiceOrNot();
	//填写人环节隐藏费用明细相关财务填写部分
	chooseTableColumnHidden();
	setAllPropertiesByType();
	giveOnChangeForOnload();
	changeWerkColumnShowOrHide();

	_mobileShowDataToTr();
	console.log("报销加载时间:" + (Date.now() - num));
});

function getGlobalConfigInfo() {
	$.ajax({
		url: '/lyfbpm/globalConfig/getActiveConf',
		type: 'GET',
		dataType: 'json',
		data: {},
		success: function(result) {
			if (result.status == 0) {
				originalConfig = result.data
				// render(result.data)
			} else {
				layer.alert(result.msg)
			}
		}
	})
}
function dateBeginJudge(obj) {}
//设置是否费用归属门店以及采购订单号显示隐藏
function setColumnValAndStyle() {}

function giveDateToAimStr(date1) {}
//判断收款人是否属于黑名单中的人员(黑名单人员不予报销)
function judgeExistInBlacklist() {
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
					layer.open({
						content: "收款人" + errorCodeArr.toString() + "属于黑名单人员,不予报销,请重新确认",
						btn: 'OK'
					});
					flag = false;
				}

			},
			error: function(result) {}
		});
	} else {
		return true;
	}
	return flag;
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

// 金额数值格式调整
function NumberFormat() {
	var subjectType = $("[name='subject_type']").val();
	var writeOffLoan = $("[name='writeOffLoan']").val();
	var total = parseFloat($("[name='total']").val());
	total = isNaN(total) ? 0 : total;
	if (writeOffLoan == "0") {
		$("[name='writeOffLoanTable'] tbody").find("tr").each(function() {
			checkAndfomartNumber($(this).find("td[data-label='借款金额']").find("input"), 16, 2);
			checkAndfomartNumber($(this).find("td[data-label='本次冲销金额']").find("input"), 16, 2);
			var returnAmount = $(this).find("td[data-label='归还金额']").find("input").val();
			if (returnAmount) {
				checkAndfomartNumber($(this).find("td[data-label='归还金额']").find("input"), 16, 2);
			}
			checkAndfomartNumber($(this).find("td[data-label='剩余金额']").find("input"), 16, 2);
		});
	}
	if (subjectType == '09') {
		$("[name='travelInfo'] tbody").find("tr").each(function() {
			var taxes = $(this).find("td[data-label='税金']").find("input").val();
			if (taxes) {
				checkAndfomartNumber($(this).find("td[data-label='税金']").find("input"), 16, 2);
			}
			var morning = $(this).find("td[data-label='金额（补助-早）']").find("input").val();
			if (morning) {
				checkAndfomartNumber($(this).find("td[data-label='金额（补助-早）']").find("input"), 16, 2);
			}
			var noon = $(this).find("td[data-label='金额（补助-中）']").find("input").val();
			if (noon) {
				checkAndfomartNumber($(this).find("td[data-label='金额（补助-中）']").find("input"), 16, 2);
			}
			var night = $(this).find("td[data-label='金额（补助-晚）']").find("input").val();
			if (night) {
				checkAndfomartNumber($(this).find("td[data-label='金额（补助-晚）']").find("input"), 16, 2);
			}
			checkAndfomartNumber($(this).find("td[data-label='报销金额']").find("input"), 16, 2);
		});
	} else {
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			checkAndfomartNumber($(this).find("td[data-label='金 额']").find("input"), 16, 2);
			var taxes = $(this).find("td[data-label='税金']").find("input").val();
			if (taxes) {
				checkAndfomartNumber($(this).find("td[data-label='税金']").find("input"), 16, 2);
			}
		});
	}
	if (total > 0) {
		$("[name='payees'] tbody").find("tr").each(function() {
			checkAndfomartNumber($(this).find("td[data-label='转账金额']").find("input"), 16, 2);
		});
	}
	getAmount();
	checkAndfomartNumber($("[name='total']"), 16, 2);
	checkAndfomartNumber($("[name='number_EwCZ']"), 16, 2);
}

function check_before_submit() {
	var activityName = $("#activityName").val();
	var subjectType = $("[name='subject_type']").val();
	$("[name='isBudgetFreeze']").val("1");
	$("[name='isPayBeforeTrail']").val("0");
	getVoucherMakerAndAuditer();
	SetFinancialReviewer();
	if (activityName == '申请人填写') {
		// setCheckAmount();
		var flag = getBudget1();
		if (!flag) {
			return;
		}
		var flag1 = setReimbursementAccount();
		var flag2 = judgeSameCompanyOrNot();
		var flag3 = judgeIsOverBudget();
		var flag5 = queryDateConfigureInfo();
		var falg6 = judgeExistInBlacklist();

		var flag8 = judgeAmountIsOverCheckAmount();
		var flag9 = judgeFileIsUploaded();
		var flag10 = false;
		var flag11 = judgePayeeTypeIsTrue();
		if (flag && flag1 && flag2 && flag3 && flag5 && falg6 && flag8 && flag9 && flag11) {
			flag10 = getWerksIsFrozen();
		}
		if (subjectType == '09') {
			if (flag && flag1 && flag2 && flag3 && flag5 && falg6 && flag8 && flag9) {
				setLinkHandlerBySubclass("[name='bussiness_name']");
				setApprovalPower();
				createRBNoInForm();
				NumberFormat();
				return true;
			} else {
				return false;
			}

		} else {

			if (flag && flag1 && flag2 && flag3 && flag5 && falg6 && flag8 && flag9 && flag10 && flag11) {
				setLinkHandlerBySubclass("[name='bussiness_name']");
				setApprovalPower();
				setIdentifierByReimb();
				// queryUserReimburseScore();
				setCheckAmount();

				createRBNoInForm();
				setSummaryByIndex();
				NumberFormat();
				return true;
			} else {
				return false;
			}

		}
	}
	if (activityName == '部门经理审批' || activityName == '项目经理审批') {
		cleanSortValue();
	}
	return queryDateConfigureInfo();

}

//重写excel导入数据填充到数据表格补充函数
function fileUploadChangeEvent() {
}

//导入触发查询接口循环查询收款人信息
function getPayeesInfoByReimburseDetail() {}

//审批权限管控(总监->副总裁->总裁)
function setApprovalPower() {
	var headOrSub = $("[name='headOrSub']").val();
	var total = parseFloat($("[name='total']").val());
	var bussiness_name = $("[name='bussiness_name']").val();
	var writeOffLoan = $("[name='writeOffLoan']").val();
	total = isNaN(total) ? 0 : total;
	//总部 不在权限体系内业务
	var bussinessHeadArr = ["BG01", "BG04", "BG10", "BM01", "BM011", "BM15", "BM17", "CL03", "CL06", "RL03", "RL04", "RL05", "RL06", "RL09", "SWCL01"];
	//子公司 不在权限体系内业务
	var bussinessSubArr = ["BG01", "BG02", "BG04", "BG05", "BG06", "BG08", "BG09", "BG10", "BG12", "BM01", "BM011", "BM02", "BM03", "BM11", "BM12", "BM14", "BM15", "BM16", "BM17", "CL01", "CL03", "CL06", "CL07", "MDRC01", "MDRC02", "MDRC03", "MDRC05", "MDRC08", "MDRC09", "MDRC10", "MDRC11", "RL03", "RL04", "RL05", "RL06", "RL07", "RL09", "SWCL01", "YX01"];
	//总部情况下isCentralDirector
	if (headOrSub == '1') {
		if (bussinessHeadArr.indexOf(bussiness_name) != -1) {
			$("[name='isCentralDirector']").val("0");
		} else {
			$("[name='isCentralDirector']").val("1");
		}
		//诉讼费、律师费
		if (bussiness_name == 'BM08') {
			if (total <= 100000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 200000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//样品采购支出
		if (bussiness_name == 'BM09') {
			if (1000 < total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//车辆运输费支出
		if (bussiness_name == 'CL05') {
			if (total <= 2000000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 2000000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//仓储支出
		if (bussiness_name == 'CL08') {
			if (total <= 500000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 500000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-广告费
		if (bussiness_name == 'YX03') {
			if (500000 < total <= 1000000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 1000000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-展会宣传
		if (bussiness_name == 'YX04') {
			if (50000 < total <= 100000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 100000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-服务费、咨询费
		if (bussiness_name == 'YX05') {
			if (100000 < total <= 200000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 200000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//车辆罚款
		if (bussiness_name == 'YY01') {
			if (total <= 2000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//捐赠支出、赞助支出/其他罚款项、营业外支出项
		if (bussiness_name == 'YY02' || bussiness_name == 'YY03') {
			$("[name='isCentralDirector']").val("3");
		}
		//装修罚款
		if (bussiness_name == 'YY04') {
			if (total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//客诉、非客诉赔偿
		if (bussiness_name == 'YY05') {
			if (total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
	} else {
		if (bussinessSubArr.indexOf(bussiness_name) != -1) {
			$("[name='isCentralDirector']").val("0");
		} else {
			$("[name='isCentralDirector']").val("1");
		}
		//诉讼费、律师费
		if (bussiness_name == 'BM08') {
			if (total <= 100000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 200000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//样品采购支出
		if (bussiness_name == 'BM09') {
			if (1000 < total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			}
		}
		//车辆维护费
		if (bussiness_name == 'CL04') {
			if (total > 50000) {
				$("[name='isCentralDirector']").val("2");
			}
		}
		//车辆运输费支出
		if (bussiness_name == 'CL05') {
			if (500000 < total <= 2000000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 2000000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-广告费
		if (bussiness_name == 'YX03') {
			if (500000 < total <= 1000000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 1000000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-展会宣传
		if (bussiness_name == 'YX04') {
			if (50000 < total <= 100000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 100000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//营销支出-服务费、咨询费
		if (bussiness_name == 'YX05') {
			if (100000 < total <= 200000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 200000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//车辆罚款
		if (bussiness_name == 'YY01') {
			if (total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//捐赠支出、赞助支出
		if (bussiness_name == 'YY02') {
			$("[name='isCentralDirector']").val("3");
		}
		//其他罚款项、营业外支出项
		if (bussiness_name == 'YY03') {
			if (total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}
		//客诉、非客诉赔偿
		if (bussiness_name == 'YY05') {
			if (total <= 10000) {
				$("[name='isCentralDirector']").val("2");
			} else if (total > 10000) {
				$("[name='isCentralDirector']").val("3");
			}
		}

	}
	//新加的授权，中心总监10W，副总裁100W以上总裁 "ZXMJ06", "ZXMJ07",
	var newBussinessArr = ["ZXMJ01", "ZXMJ02", "ZXMJ03", "ZXMJ04", "ZXMJ05", "GSJS01", "GSJS02"];
	// 物资采购类权限调整
	var newBussinessArray = ["WZCG01", "WZCG02", "WZCG03", "WZCG04", "WZCG05", "WZCG06", "WZCG07"];
	if (newBussinessArr.indexOf(bussiness_name) == -1) {
		$("[name='isCentralDirector']").val("0");
	} else {
		if (total <= 100000) {
			$("[name='isCentralDirector']").val("1");
		} else if (100000 < total <= 1000000) {
			$("[name='isCentralDirector']").val("2");
		} else {
			$("[name='isCentralDirector']").val("3");
		}
	}
	if (newBussinessArray.indexOf(bussiness_name) != -1) {
		if (total <= 500000) {
			$("[name='isCentralDirector']").val("1");
		} else if (total > 500000 && total <= 3000000) {
			$("[name='isCentralDirector']").val("2");
		} else {
			$("[name='isCentralDirector']").val("3");
		}
	}
	setNewApproval();
	if (writeOffLoan == '0' && total == 0) {
		$("[name='isCentralDirector']").val("0");
	}
	if (bussiness_name == 'BM011' || bussiness_name == 'RL12' || bussiness_name == 'RL13') {
		$("[name='isCentralDirector']").val("4");
	}
}

//根据收款人进行在原有的授权基础上进行新的授权
function setNewApproval() {
	var approval = $("[name='isCentralDirector']").val();
	var userId = $("#userId").val();
	var userIds = [];
	var departmentArr = [];
	var subjectType = $("[name='subject_type']").val();
	$("[name='payees'] tbody").find("tr").each(function() {
		var receiveType = $(this).find("td[data-label='收款人类型']").find("select").val();
		var receiveCode = $(this).find("td[data-label='收款人编号']").find("input").val();
		if (receiveType == '3' || receiveType == '4') {
			if (userIds.indexOf(receiveCode) == -1) {
				userIds.push(receiveCode);
			}
		} else {
			if (userIds.indexOf(userId) == -1) {
				userIds.push(userId);
			}
		}
	});
	if (subjectType == "09") {
		$("[name='travelInfo'] tbody").find("tr").each(function() {
			var departNo = $(this).find("td[data-label='成本中心代码']").find("input[type='hidden']").val();
			if (departmentArr.indexOf(departNo) == -1) {
				departmentArr.push(departNo);
			}
		});
	} else {
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var costAttribute = $(this).find("td[data-label='收款人类型']").find("select").val();
			var departNo = $(this).find("td[data-label='成本中心代码']").find("input[type='hidden']").val();
			if (costAttribute == '6') {
				if (userIds.indexOf(userId) == -1) {
					userIds.push(userId);
				}
			}
			if (departmentArr.indexOf(departNo) == -1) {
				departmentArr.push(departNo);
			}
		});
	}

	if (userIds.length > 0 || departmentArr.length > 0) {
		$.ajax({
			url: common.getPath() + '/LYFData/setNewApprovalByPayees?userIds=' + userIds + '&departmentArr=' + departmentArr,
			type: 'post',
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.status == 0) {
					if (JSON.stringify(result.data) != "{}") {
						if (approval == '0') {
							if (result.data.centerDirector == '1') {
								$("[name='extraApproval']").val("1");
							} else if (result.data.centerDirector == '2') {
								$("[name='extraApproval']").val("2");
							} else if (result.data.centerDirector == '3') {
								$("[name='extraApproval']").val("3");
							} else {
								$("[name='extraApproval']").val("0");
							}
							if (result.data.centerDirector) {
								$("[name='isCentralDirector']").val(result.data.centerDirector);
							}
						} else if (approval == '1') {
							if (result.data.centerDirector == '2' || result.data.centerDirector == '3') {
								if (result.data.centerDirector == '2') {
									$("[name='extraApproval']").val("2");
								} else if (result.data.centerDirector == '3') {
									$("[name='extraApproval']").val("3");
								}
								if (result.data.centerDirector) {
									$("[name='isCentralDirector']").val(result.data.centerDirector);
								}
							} else {
								$("[name='extraApproval']").val("0");
							}

						} else if (approval == '2') {
							if (result.data.centerDirector == '3') {
								$("[name='extraApproval']").val("3");
								if (result.data.centerDirector) {
									$("[name='isCentralDirector']").val(result.data.centerDirector);
								}
							} else {
								$("[name='extraApproval']").val("0");
							}
						} else {
							$("[name='extraApproval']").val("0");
						}
						$("[name='costCenterDirector']").not(".no_data").val(result.data.costCenterDirector);
					} else {
						$("[name='extraApproval']").val("0");
						$("[name='costCenterDirector']").not(".no_data").val("1");
					}
				}
			},
			error: function(result) {}
		});
	} else {
		$("[name='extraApproval']").val("0");
	}

}

//加载业务事项选项
function setBussinessOption() {
	var num = Date.now();
	var tierParentCode = '2'
	$.ajax({
		url: common.getPath() + '/dictionaryTier/selectDictionaryTierList?tierParentCode=' + tierParentCode + '&pageSize=20',
		type: 'post',
		contentType: "application/json;charset=utf-8",
		async: false,
		success: function(result) {
			for (var i = 0; i < result.data.list.length; i++) {
				$("[name='subject_type']").append("<option value=" + result.data.list[i].tierCode + ">" + result.data.list[i].tierName + "</option>");
			}
			common.initSelect();
			setBussinessChildOption("[name='subject_type']");
		},
		error: function(result) {}
	});
	console.log("setBussinessOption:" + (Date.now() - num));
}

//级联业务事项
function setBussinessChildOption(obj) {

	$("[name='subject_type']").removeAttr("data-value");
	$("[name='bussiness_name']").empty();
	var subject_type = $(obj).val();
	$.ajax({
		url: common.getPath() + '/dictionaryTier/selectDictionaryTierList?tierParentCode=' + subject_type + '&pageSize=20',
		type: 'post',
		contentType: "application/json;charset=utf-8",
		async: false,
		success: function(result) {
			$("[name='bussiness_name']").append("<option value=" + "" + ">" + "---请选择---" + "</option>");
			for (var i = 0; i < result.data.list.length; i++) {
				$("[name='bussiness_name']").append("<option value=" + result.data.list[i].tierCode + ">" + result.data.list[i].tierName + "</option>");
			}
			common.initSelect();

		},
		error: function(result) {}
	});
	setReimburseTypeByBusinessName("[name='bussiness_name']");
}

function letUnicodeShow() {
	var str = $("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").attr("style")

	if (str == undefined) {
		str = "";
	}
	var index = str.indexOf("display: none;");
	if (index >= 0) {
		$("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("i[onclick='queryStoreDetailForMobile(this)']").hide();
	} else {
		$("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("i[onclick='queryStoreDetailForMobile(this)']").show();
	}
}

//设定表单属性
function changeTableProperties() {
	changePayeesHideOrShow();
	$("#insTitle_input").attr("disabled", "disabled");
	var payeeInfoLength = $("[name='payees'] tbody").find("tr").length;
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	formUtil.changeNotEditByName("subject_type");
	formUtil.changeNotEditByName("bussiness_name");
	formUtil.changeNotEditByName("isBelongToStore");
	formUtil.changeHiddenByName('writeOffLoanTable');
	formUtil.tableFun.changeHiddenMustByTableParam({
		name: 'writeOffLoanTable'
	});
	formUtil.changeHiddenByName('travelInfo');
	formUtil.tableFun.changeHiddenMustByTableParam({
		name: 'travelInfo',
	});
	$("[name='select_YNYP']").val("1");
	$("[name='select_BJ5k']").val("1");
	$("#formSet").find("table[title='合同信息']").parent().hide()
	$("#formSet").find("table[title='项目信息']").parent().hide();
	$("#formSet").find("table[title='报销信息']").parent().hide();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile()) {
		$("[name='travelInfo']").parent().hide();
		$("[name='total']").parent().parent().parent().parent().parent().show();
		$("[name='total']").parent().parent().parent().parent().show();
		$("[name='payees']").find("td[data-label='操作']").hide();
	} else {
		$("[name='travelInfo']").parent().parent().hide();

	}
	if (common.isMobile()) {
		// formUtil.changeMobileTableShowOrHideByPName("cADE");
		// $("#form_content_div").find("table[title='其他信息']").prev().find(".show_table").click();
		$("#form_content_div").find("table[title='流程基本信息']").prev().find(".hide_table").click();
		$("#form_content_div").find("table[title='业务类型']").prev().find(".hide_table").click();
		$("#form_content_div").find("table[title='流程主题']").prev().find(".hide_table").click();
		$("[name = 'payees']").prev().find(".hide_table").click();
		// $("[name = 'reimburseDetail']").prev().find(".show_table").click();

		$("[name = 'reimburseDetail'] tbody td[data-label='科目编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseSubject(this)");
		$("[name = 'reimburseDetail'] tbody td[data-label='成本中心代码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseCostCenter(this)");
		//按钮样式修改
		$("[name = 'reimburseDetail'] tbody td[data-label='操作']").find("i[title!='数据校验']").css({
			"padding-right": "100px",
			"font-size": "30px"
		});
		$("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("i").attr("onclick", "queryStoreDetailForMobile(this)");
	} else {
		$("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("i").attr("onclick", "queryStoreLastMonthDetial(this)");
	}
	var num = Date.now();
	var activityName = $("#activityName").val();
	var taskStatus = $("#taskStatus").val();
	//申请人确认环节开放银行信息编辑权限
	formUtil.tableFun.changeNotEditByTableParam({
		name: 'payees'
	});

	formUtil.tableFun.addPromptBtnByTableParamUnicode({
		name: 'payees',
		colNum: a1,
		unicode: "&#xe68e;"
	});
	formUtil.tableFun.addPromptBtnByTableParamUnicode({
		name: 'reimburseDetail',
		colNum: c11,
		unicode: "&#xe68e;"
	});

	if (activityName == '申请人确认' && taskStatus == '12') {
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: a3
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: a5
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: a6
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: a7
		});

	} else {
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a3
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a5
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a6
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a7
		});

	}
	if (activityName == '申请人确认' && payeeInfoLength == 1) {
		formUtil.tableFun.changeEditByTableParam({
			name: 'payees',
			colNum: 3
		});
		$("[name='payees'] tbody tr td[data-label='收款人编号']").find("i").show();
	} else {
		$("[name='payees'] tbody tr td[data-label='收款人编号']").find("i").hide();
	}

	if (activityName == '申请人填写' && checkBudgetAndAmount == '0') {
		$("[name='payees'] tbody td[data-label='收款人编号']").find("i").show();
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c41
		});
		//隐藏操作列
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c41
		});

		$("[name='payees'] tbody td[data-label='收款人编号']").find("i").hide();
	}

	$("[name='reimburseDetail'] tbody tr").find("td[data-label='发票号']").find("input").attr("placeholder", "多张发票号请以;进行分隔");

	//报销单号
	formUtil.changeNotEditByName("reimburseNumber");
	//实际付款金额
	formUtil.changeNotEditByName("number_EwCZ");
	//总计
	formUtil.changeNotEditByName("total");
	//合计金额(大写)
	formUtil.changeNotEditByName("text_5hZ7");

	//加滑动
	formUtil.tableFun.givePCTableSetWidth({
		"tableWidthJson": {
			"reimburseDetail": "2500px"
		}
	});

	formUtil.tableFun.changeNotEditByTableParam({
		name: 'reimburseDetail',
		colNum: c5//发票有无
	});
	formUtil.tableFun.changeNotEditByTableParam({
		name: 'reimburseDetail',
		colNum: c10//名称
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c13//科目编码
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c14//科目名称
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c3//人民币金额
	});

	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c5//发票有无
	});

	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c16//借款单据号
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c17//分配前置
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c18//排序
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c19//明细编号
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c20 //OCR验真信息
	});
	formUtil.tableFun.changeHiddenMustByTableParam({
		name: 'reimburseDetail',
		colNum: c20 //OCR验真信息
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c16//借款单据号
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c21// 发票对应进项税
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c22//成本中心预算
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c23//"预算控制模式"
	});
	formUtil.tableFun.changeHiddenMustByTableParam({
		name: 'reimburseDetail',
		colNum: c23//"预算控制模式"
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c24//"车贴金额"
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c26//"收款人信息"
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c27//"采购订单号"
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c30//"结束日期"
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c35 //" 度数2 "
	});
	// formUtil.tableFun.changeNotEditByTableParam({
	// name: 'payees',
	// colNum: a2//收款人名称
	// });
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: a10//排序
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: a4//汇路
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'payees',
		colNum: a5//收款人账户类型
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c25//预提金额
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c39//验证金
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c40//验证金
	});
	console.log("changeTableProperties:" + (Date.now() - num));
}

function giveValToSubject(obj) {
	var type = $(obj).val();
	var subjectCode = "";
	var subjectName = "";
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	switch (type) {
		case '0':
			subjectCode = "66011701";
			subjectName = "水费";

			break
		case '1':
			subjectCode = "66011702";
			subjectName = "电暖费";
			if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
				$("#tr_table").find("td[data-label='本期度数(电谷)']").show();
			}
			formUtil.tableFun.chooseModelShowByTableParam({
				name: 'reimburseDetail',
				colNum: c34
			});
			break
		case '2':
			subjectCode = "66011703";
			subjectName = "煤气费";
			if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
				$("#tr_table").find("td[data-label='本期度数(电谷)']").hide();
			}
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c34
			});
			break
		case '3':
			subjectCode = "66012501";
			subjectName = "电话费";
			if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
				$("#tr_table").find("td[data-label='本期度数(电谷)']").hide();
			}
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c34
			});
			break
	}

	$(obj).parent().parent().find("td[data-label='科目编码']").find("input[type=text]").val(subjectCode);
	$(obj).parent().parent().find("td[data-label='科目编码']").find(".value_id").val(subjectCode);
	$(obj).parent().parent().find("td[data-label='科目编码']").find(".value_code").val(subjectName);
	$(obj).parent().parent().find("td[data-label='科目编码']").next().find("input").val(subjectName);

}

//业务名称加载table表单下拉框选项
function setReimburseTypeByBusinessName(obj) {

	var num = Date.now();
	var bussinessName = $(obj).val();
	if (bussinessName != "SWCL01" && bussinessName) {
		$.ajax({
			url: common.getPath() + '/dictionaryTier/selectDictionaryTierList?tierParentCode=' + bussinessName,
			type: 'post',
			contentType: "application/json;charset=utf-8",
			async: false,
			success: function(result) {
				if (result.data.list.length > 0) {
					$("[name='reimburseDetail'] tbody").find("tr").each(function() {
						var index = $(this).index();
						$(this).find("td[data-label='报销类型']").find("select").empty();
						$(this).find("td[data-label='报销类型']").find("select").append("<option value=" + "" + ">" + "---请选择---" + "</option>");
						for (var i = 0; i < result.data.list.length; i++) {
							$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='报销类型']").find("select").append("<option value=" + result.data.list[i].tierDescription + ">" + result.data.list[i].tierName + "</option>");
						}
					});
					common.initSelect();
					//layui.form.render("select");
				} else {
					return;
				}
			},
			error: function(result) {}
		});
	} else {
		return;
	}
	console.log("setReimburseTypeByBusinessName:" + (Date.now() - num));
}
function giveValToDuShu(obj) {
	var val = $(obj).val();
	$("tr_table").find("td[data-label='备注']").find("input").val(val);
}

//批量移除只读属性
function setAllPropertiesByType() {
	var num = Date.now();
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		$(this).find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").removeAttr("readonly");
		$(this).find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
	});
	console.log("setAllPropertiesByType:" + (Date.now() - num));
}
//手动添加onchange事件
function addOnChangeEvent() {
	var num = Date.now();
	$("[name = 'reimburseDetail'] tbody td[data-label='金 额']").find("input").attr("onchange", "checkAndfomartNumber(this,8,2);getAmount(this);judgermbAmountIsExceed(this);giveMoney(this);getTaxesByAmountAndTaxRate(this);");
	$("[name = 'payees'] tbody td[data-label='收款人类型']").find("select").attr("onchange", "changeEditColumn(this);");
	$("[name = 'payees'] tbody td[data-label='转账金额']").find("input").attr("onchange", "checkAndfomartNumber(this,8,2);setSinkRoadByTotal(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='收款人类型']").find("select").attr("onchange", "changeCostAttribute(this);setCostCenterByCondition1(this);changeSubsidyDateShowOrHide();setPropertiesByType(this);changeByCostAttribute(this);changePayeesHideOrShow(this);setPagePathForMobile(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='发票类型']").find("select").attr("onchange", "setHaveInvoiceOrNot(this);setDistributeByInvoiceType(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='币种']").find("select").attr("onchange", "changeColumnShowOrHide();");
	$("[name = 'reimburseDetail'] tbody td[data-label='税率']").find("select").attr("onchange", "setDistributeByTaxes(this);getTaxesByAmountAndTaxRate(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='税金']").find("input").attr("onchange", "judgeTaxesIsOverAmount(this);checkAndfomartNumber(this,8,2);");
	$("[name = 'reimburseDetail'] tbody td[data-label='报销类型']").find("select").attr("onchange", "setSubjectByReimburseType(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='本期度数(电谷)']").find("input").attr("onchange", "giveValToDuShu(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='发票号']").find("input").attr("onchange", "judgeInvoiceNumberExist(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='报销月份']").find("input").attr("onchange", "getTrafficSubsidy(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='备注']").find("input").attr("onchange", "setRemarkByTableDetail(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("input").attr("onchange", "judgeWerkExistByCode(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='科目编码']").find("select").attr("onchange", "querySubjectNameByCode(this);");
	$("[name = 'reimburseDetail'] tbody td[data-label='成本中心代码']").find("input[type='text']").attr("onchange", "judgeCostCenterExist(this);");
	$("[name='payees'] tbody td[data-label='收款人编号']").find("i").attr("onclick", "setNewLifnrInfoInPayees(this)");

	console.log("addOnChangeEvent:" + (Date.now() - num));
}
//给第一行给标记

//是否冲销借款
//是-隐藏导入导出按钮 否-显示导入导出按钮
function changeByIsChargeAgainst(obj) {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var isChargeAgainst = $(obj).val();
	switch (isChargeAgainst) {
		case '1':
			formUtil.changeHiddenByName('select_NnZP');
			$("[name='writeOffLoanTable']").hide();
			$("[name='writeOffLoanTable']").parent().prev().hide();
			$("[name='reimburseDetail'] tfoot tr td").find("button").show();
			$("[name='payees'] tfoot tr td").find("button").show();
			$("[name='subject_type']").find("option[value='09']").removeAttr("disabled");
			$("[name='subject_type']").next().find("dl").find("dd[lay-value='09']").removeAttr("class");
			if (activityName == '申请人填写' || activityName == '申请人填写()') {// formUtil.changeEditByName("subject_type");
			} else {
				formUtil.changeNotEditByName("subject_type");
			}
			break;
		default:
			formUtil.changeShowByName('select_NnZP');
			$("[name='writeOffLoanTable']").parent().prev().hide();
			$("[name='writeOffLoanTable']").hide();
			$("[name='reimburseDetail'] tfoot tr td").find("button").hide();
			if (activityName == '申请人填写' || activityName == '申请人填写()') {// formUtil.changeEditByName("subject_type");
			} else {
				formUtil.changeNotEditByName("subject_type");
			}
			break;
	}
	getAmount();
	console.log("changeByIsChargeAgainst:" + (Date.now() - num));
}
//如果不是冲销,清空table表单数据
function cleanTableDataByIsCharge(obj) {}

//是否线下归还多余借款
function changeByIsRevertBorrow() {}

//判断线下归还金额时 归还金额+当前冲销金额是否超过该借款单下选中明细金额
function judgeRevertIsTrue(obj) {
	var revert = parseFloat($(obj).val());
	var index = $(obj).parent().parent().index();
	var writeofAmount = parseFloat($("[name='writeOffLoanTable'] tbody").find("tr:eq(" + index + ")").find("td[data-label='本次冲销金额']").find("input").val());
	var loanArr = JSON.parse($("[name='writeOffLoanTable'] tbody").find("tr:eq(" + index + ")").find(".value_code").val());
	var total = 0;
	var amount = revert + writeofAmount;
	for (var i = 0; i < loanArr.length; i++) {
		total += parseFloat(loanArr[i].residualAmount);
	}
	if (amount > total) {
		layer.open({
			content: "归还金额与本次冲销金额总和不能超过当前借款单下明细总金额，请重新确认",
			btn: 'OK'
		});

		$("[name='writeOffLoanTable'] tbody").find("tr:eq(" + index + ")").find("td[data-label='归还金额']").find("input").val(0);
		return false;
	}
}

//获取剩余金额
function getRestMoney() {}

//财务审批环节校验同一收款人类型下多条明细科目编码是否一致
function checkSubjectCode() {
	var rowList = $("[name='reimburseDetail'] tbody").find("tr");
	// var dataList = $("[name='travelInfo'] tbody").find("tr");
	if (rowList.length > 1) {
		for (var i = 0; i < rowList.length; i++) {
			var reimburseAttributeFirst = $(rowList[i]).find("td[data-label='收款人类型']").find("select").val();
			var subjectCodeFirst = $(rowList[i]).find("td[data-label='科目编码']").find("input").val();
			var costCodeFirst = $(rowList[i]).find("td[data-label='(门店/供应商/个人)编码']").find("input").val();
			for (var j = i + 1; j < rowList.length; j++) {
				var reimburseAttributeNext = $(rowList[j]).find("td[data-label='收款人类型']").find("select").val();
				var subjectCodeNext = $(rowList[j]).find("td[data-label='科目编码']").find("input").val();
				var costCodeNext = $(rowList[j]).find("td[data-label='(门店/供应商/个人)编码']").find("input").val();
				if (reimburseAttributeFirst == reimburseAttributeNext && costCodeFirst == costCodeNext) {
					if (subjectCodeFirst == subjectCodeNext) {

						layer.open({
							content: "多条费用明细对应同一归属类型下同一归属人，科目编码不能重复",
							btn: 'OK'
						});
						return false;
					}
				}
			}
		}
	}
	return true;
}

//冲销情况下判断明细金额修改是否超过该明细金额
function judgermbAmountIsExceed(obj) {}

//合计金额
function getAmount(obj) {
	var activityName = $("#activityName").val();
	if (activityName != '申请人填写' && activityName != '申请人确认') {
		return;
	}
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		var jieKuanMoney = $(obj).val();
		$(tdObj).parent().find("td[data-label='金 额']").not(".no_data").find("input").val(jieKuanMoney);
	}
	var num = Date.now();
	var total = 0;
	//合计金额
	var amount = 0;
	//实际付款金额
	var amountList = $("[name='reimburseDetail'] tbody").find("tr");
	//普通报销
	for (var i = 0; i <= amountList.length - 1; i++) {
		var price = $("[name = 'reimburseDetail'] tbody").find("tr").eq(i).find("td[data-label='金 额']").find("input").val();
		price = parseFloat(price);
		price = isNaN(price) ? 0 : price;
		if (price == 0) {
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='金 额']").not(".no_data").find("input").val(price);
			checkAndfomartNumber($("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='金 额']").find("input"), 8, 2);
		}
		total += price;
	}
	$("[name='total']").val(total);
	$("[name='total']").change();
	$("[name='number_EwCZ']").val(total);
	$("[name='number_EwCZ']").change();

	// }
	console.log("getAmount:" + (Date.now() - num));

}

//计算差旅小计金额总和
function getSubTotal(obj) {}

//合计金额阿拉伯数字转繁体
function convertCurrency() {
	var money = $("[name='number_EwCZ']").val();
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
		//return chineseStr;
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

//差旅-行程信息与收款人信息数据对比
function compareReceiveWithTravelInfo() {
	var payment = parseFloat($("[name='total']").val());
	var amount = 0;
	$("[name='payees'] tbody").find("tr").each(function() {
		var price = parseFloat($(this).find("td[data-label='转账金额']").find("input").val());
		price = isNaN(price) ? 0 : price;
		amount += price;
	});
	if (payment != amount) {

		layer.open({
			content: "收款人金额与实际付款金额不对应,请重新确认",
			btn: 'OK'
		});
		return false;
	} else {
		return true;
	}
}

//根据业务事项下对应业务名称(小类)选择环节处理人
function setLinkHandlerBySubclass(obj) {
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

					//财务经理-子公司
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
}

//判断流程发起人是隶属于总部还是子公司

//收款人类型改变
function changeEditColumn(obj) {
	var costAttribute = $(obj).val();
	var index = $(obj).parent().parent().index();
	if (costAttribute == '5') {
		formUtil.tableFun.changeEditByTableParamWithoutOper({
			name: 'payees',
			rowNum: index
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a0,
			rowNum: index
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a8,
			rowNum: index
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'payees',
			colNum: a9,
			rowNum: index
		});
	}
}
//业务事项改变(费用报销/差旅报销)填写不同表单
function changeEditTable() {
	var num = Date.now();
	$("[name='isBelongToStore']").val("0");
	$("[name='isBelongToStore']").change();
	formUtil.changeShowByName("reimburseDetail");
	// $("[name='reimburseDetail']").show();
	// $("[name='reimburseDetail']").parent().prev().show();
	//切换时清空一下行程信息表
	// $("[name='travelInfo']").hide();
	// $("[name='travelInfo']").parent().prev().hide();
	formUtil.changeHiddenByName("travelInfo");
	layui.form.render();
	console.log("changeEditTable:" + (Date.now() - num));
}

//业务事项改变(费用报销/差旅报销)填写不同表单
function clearTableBySubjectType() {}

//费用归属类型
function changeCostAttribute(obj) {
	var dataList = $("[name='reimburseDetail'] tbody").find("tr")
	var costAttribute = $(obj).val();
	var index = $(obj).parent().parent().index();
	var userId = $("#userId").val();
	var userName = $("#userName").val();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		if (costAttribute) {
			$("[name='reimburseDetail']").find("tbody").find("tr").eq(index).find("td[data-label='收款人类型']").not(".no_data").find('select').val(costAttribute);
		}
		if (costAttribute == "3" || costAttribute == "6") {
			//本人
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val(userId);
			$(obj).parent().parent().find("td[data-label='名称']").find("input").val(userName);
			formUtil.tableFun.changeNotEditByTdObj($(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']")[0]);

		} else if (costAttribute == '5') {
			//一次性供应商
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val("500260");
			formUtil.tableFun.changeNotEditByTdObj($(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']")[0]);
		} else {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
			$(obj).parent().parent().find("td[data-label='名称']").find("input").val("");
			formUtil.tableFun.changeEditByTdObj($(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']")[0]);
		}
	} else {
		if (costAttribute == "3" || costAttribute == "6") {
			//本人
			$(dataList[index]).find("td[data-label='(门店/供应商/个人)编码']").find("input").val(userId);
			$(dataList[index]).find("td[data-label='名称']").find("input").val(userName);
		} else if (costAttribute == '5') {
			//一次性供应商
			$(dataList[index]).find("td[data-label='(门店/供应商/个人)编码']").find("input").val("500260");
		} else {
			$(dataList[index]).find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
			$(dataList[index]).find("td[data-label='名称']").find("input").val("");
			formUtil.tableFun.changeEditByTableParam({
				name: 'reimburseDetail',
				colNum: c11,
				index
			});
		}
	}
	addOnChange(obj);

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		var attribute = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val();
		if (attribute) {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").change();
		}
	} else {
		var attribute = $("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input").val();
		if (attribute) {
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input").change();
		}
	}

}

//业务事项控制其他信息显示字段
function changeEditByBussiness(obj) {
	var num = Date.now();
	var bussinessName = $(obj).val();
	var subjectType = $("[name='subject_type']").val();
	var activityName = $("#activityName").val();
	var isInSAP = $("[name='select_yZGh']").val();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司1", "财务会计-子公司2", "财务经理-子公司1", "财务经理-子公司2", "财务总监-子公司", "财务再次审核单据", "出纳进行付款"];

	switch (bussinessName) {
		case 'YY05':

			break;
		default:
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
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c1
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				colNum: c1
			});
			formUtil.changeHiddenByName("bussinessGuestNum");
			formUtil.changeHiddenMustByName("bussinessGuestNum");
			formUtil.changeHiddenByName("perCapitaAmount");
			break;
	}

	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: "reimburseDetail",
		colNum: c25
	});

	console.log("changeEditByBussiness:" + (Date.now() - num));
}

//填写人环节隐藏费用明细相关财务填写部分
function chooseTableColumnHidden() {
	var num = Date.now();
	changeReimbTableColumnHidden();
	$("[name='EAxj']").hide();
	console.log("chooseTableColumnHidden:" + (Date.now() - num));
}

//填费用报销明细的情况下隐藏部分列
function changeReimbTableColumnHidden() {
	var activityName = $("#activityName").val();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司1", "财务会计-子公司2", "财务经理-子公司1", "财务经理-子公司2", "财务总监-子公司", "财务再次审核单据", "出纳进行付款"];
	if (activityName == '申请人填写' || activityName == '申请人填写(预算解锁)') {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c0//摘要
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c13//科目编码
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c14//科目名称
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c13//科目编码
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c14//科目名称
		});

		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c15
		});
	} else if (activityArr.indexOf(activityName) != -1) {

		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c0//摘要
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			colNum: c0//摘要
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			colNum: c32
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c6//税金
		});
		// formUtil.tableFun.changeEditByTableParam({
		// name: 'reimburseDetail',
		// colNum: c6
		// });
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c7//税率
		});
		// formUtil.tableFun.changeEditByTableParam({
		// name: 'reimburseDetail',
		// colNum: c7
		// });
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			colNum: c8
		});
		// formUtil.tableFun.changeNotEditByTableParam({name:'reimburseDetail'});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c13//科目编码
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c14//科目名称
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'reimburseDetail',
			colNum: c14
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			colNum: c14
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c15
		});
		removeReadOnly1();

	} else {
		hideUniCode2();
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c15
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c0
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'reimburseDetail',
			colNum: c14
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c14
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c14
		});
	}
}
function removeReadOnly1() {
	$("[name='reimburseDetail'] tbody").find("tr").find("td[data-label='科目编码']").find("input[type='text']").removeAttr("readonly");
}
function hideUniCode2() {
	$("[name='reimburseDetail'] tbody td[data-label='门店费用归属编码']").find("i[onclick='queryStoreDetailForMobile(this)']").hide();
	$("[name='payees'] tbody td[data-label='收款人编号']").find("i").hide();
}

function changeTravelInfoTableColumnHidden() {}

//是否项目报销
function isProjectReimb(obj) {
	var num = Date.now();
	var isProjectReimb = $(obj).val();
	switch (isProjectReimb) {
		case "0":
			formUtil.changeShowMustByName("itemCode");
			formUtil.changeShowByName("itemCode");
			formUtil.changeShowByName("text_NT5r");
			formUtil.changeShowByName("text_drR4");
			break;
		case "1":
			formUtil.changeHiddenMustByName("itemCode");
			formUtil.changeHiddenByName("itemCode");
			formUtil.changeHiddenByName("text_NT5r");
			formUtil.changeHiddenByName("text_drR4");
			$("[name='itemCode']").val("");
			$("[name='text_NT5r']").val("");
			$("[name='text_drR4']").val("");
			break;
		default:
			break;
	}
	console.log("isProjectReimb:" + (Date.now() - num));
}

//选择具体数据字典分类的数据内容
function chooseDicDataByType(elementId, dicUid, dicCode) {
	var pageType = $("#pageType").val();
	var id = $(elementId).attr("id");
	var dicCode = $(elementId).parent().attr("col_data_code");
	var dicUid = "";
	if (pageType == 'startProcess') {
		dicUid = $("#userId").val();
	} else {
		dicUid = $("#insInitUser").val();
	}
	common.chooseDicDataByType(elementId, dicUid, dicCode);
}

common.chooseDicDataByTypePath = function(id, dicUid, dicCode) {
	return common.getPath() + "/LYFData/selectDataByRB?elementId=" + id + "&dicUid=" + dicUid + "&dicCode=" + dicCode;

}

//删除行触发事件
function rowRemoveChangeEvent(obj) {
	var name = $(obj).parent().parent().parent().parent().attr("name");
	var index = $(obj).parent().parent().index();
	if (name == "reimburseDetail") {
		$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input").val(0);
		$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input").change();
	}
	if ($(obj).parent().parent().parent().find("tr").length > 1) {
		myRowRemove(obj);
	}
}

//冲销部分费用明细不可删除
function changeNotRemoveRow() {
	var amountList = $("[name='reimburseDetail'] tbody").find("tr");
	for (var i = 0; i < amountList.length; i++) {
		var loanNumber = $(amountList[i]).find("td[data-label='借款单据号']").find("input").val();
		if (loanNumber) {
			$(amountList[i]).find("td[data-label='操作']").find("i").eq(2).hide();
		} else {
			$(amountList[i]).find("td[data-label='操作']").find("i").eq(2).show();
		}
	}
}

function rowChangeEvent(obj) {
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var rowList = $("[name='reimburseDetail'] tbody").find("tr");
	var dataList = $("[name='travelInfo'] tbody").find("tr");
	var payList = $("[name='payees'] tbody").find("tr");
	var subjectType = $("[name='subject_type']").val();
	var flag = false;
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		tableName = $(tdObj).parent().parent().parent().attr("name");
	}
	changeNotRemoveRow();
	if (tableName == 'reimburseDetail') {
		//费用明细表添加行时，才会有门店信息
		_mobileShowDataToTr();
		$(obj).parent().parent().parent().find("tr:last").find("td[data-label='币种']").find("select").val("CNY");
		var sortVal3 = $("[name='reimburseDetail'] tbody").find("tr:last").find("td[data-label='排序']").find("input").val();

		if (sortVal3)
			flag = true;
		else
			flag = false;
		var sortVal1 = $("[name='reimburseDetail'] tbody").find("tr:first").find("td[data-label='排序']").find("input").val();
		var loanNo = $("[name='reimburseDetail'] tbody").find("tr:first").find("td[data-label='借款单据号']").find("input").val();
		var sortVal2 = $("[name='payees'] tbody").find("tr:first").find("td[data-label='排序']").find("input").val();
		if (!sortVal1 && !flag && !loanNo) {
			$("[name='reimburseDetail'] tbody").find("tr:last").find("td[data-label='排序']").not(".no_data").find("input").val(sortVal2);
		}
		if (subjectType == '09') {} else {
			if (rowList.length > payList.length) {
				myrowChangeEvent(obj);
			}
		}
		ShowOrHideVerButton($("[name='reimburseDetail'] tbody").find("tr:last").find("td[data-label='OCR验真信息']").find("input"));
	} else if (tableName == 'travelInfo') {} else if (tableName == 'payees') {}
}

//是否合同付款
function judgeIsContractPayment(obj) {
	var num = Date.now();
	var isContractPayment = $(obj).val();
	switch (isContractPayment) {
		case '0':
			formUtil.changeShowMustByName("text_473H");
			formUtil.changeShowByName("text_473H");
			formUtil.changeShowByName("text_daXD");
			formUtil.changeShowByName("number_Jb5c");
			formUtil.changeShowByName("number_ZAya");
			formUtil.changeShowByName("number_eWza");
			formUtil.changeShowByName("number_dntP");
			formUtil.changeShowByName("text_2iFZ");
			formUtil.changeShowByName("text_bG8E");
			formUtil.changeShowByName("text_MjEF");
			formUtil.changeShowByName("button_x8sA");
			break;
		case '1':
			formUtil.changeHiddenMustByName("text_473H");
			formUtil.changeHiddenByName("text_473H");
			formUtil.changeHiddenByName("text_daXD");
			formUtil.changeHiddenByName("number_Jb5c");
			formUtil.changeHiddenByName("number_ZAya");
			formUtil.changeHiddenByName("number_eWza");
			formUtil.changeHiddenByName("number_dntP");
			formUtil.changeHiddenByName("text_2iFZ");
			formUtil.changeHiddenByName("text_bG8E");
			formUtil.changeHiddenByName("text_MjEF");
			formUtil.changeHiddenByName("button_x8sA");
			break;
		default:
			break;
	}
	console.log("judgeIsContractPayment:" + (Date.now() - num));
}

//冲销情况下 实际付款金额为0时隐藏收款人信息表
function changePayeesHideOrShow(obj) {
	var payment = 0;
	var subjectType = $("[name='subject_type']").val();
	if (subjectType == '09') {} else {
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var loanNo = $(this).find("td[data-label='借款单据号']").find("input").val();
			var costAttribute = $(this).find("td[data-label='收款人类型']").find("select").val();
			var amount = parseFloat($(this).find("td[data-label='金 额']").find("input").val());
			amount = isNaN(amount) ? 0 : amount;
			if (!loanNo && costAttribute != '6') {
				payment += amount
			}
		});
	}
	if (payment > 0) {

		if (common.isMobile()) {
			$("[name='payees']").show();
			$("[name='payees']").prev().show();
		} else {
			$("[name='payees']").show();
			$("[name='payees']").parent().prev().show();
		}

	} else {

		if (common.isMobile()) {
			$("[name='payees']").hide();
			$("[name='payees']").prev().hide();
		} else {
			$("[name='payees']").hide();
			$("[name='payees']").parent().prev().hide();
		}

	}

}

//冲销情况下 普通额外报销时收款人不是本人的情况下只允许有一条报销,本人可多条报销
function setReimbursementAccount() {
	var writeOffLoan = $("[name='writeOffLoan']").val();
	var subjectType = $("[name='subject_type']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var rowList = $("[name='reimburseDetail'] tbody").find("tr");
	//实际付款金额
	var payment = parseFloat($("[name='total']").val());
	payment = isNaN(payment) ? 0 : payment;
	var amount = 0;
	//非本人次数
	var total = 0;
	//其他类型次数
	var number = 0;
	//门店、供应商、一次性供应商次数
	var quantity = 0;
	//本人-现金次数
	var times = 0;
	if (subjectType != "09") {
		//他人次数
		for (var i = 0; i < rowList.length; i++) {
			var costAttribute = $(rowList[i]).find("td[data-label='收款人类型']").find("select").val();
			var loanNumber = $(rowList[i]).find("td[data-label='借款单据号']").find("input").val();
			if (costAttribute == '6') {
				times++;
			}
			if (costAttribute != '3' && costAttribute != '6') {
				total++;
			}
			if (!loanNumber) {
				if (writeOffLoan == '0') {
					amount++;
				}
				if (costAttribute == '4') {
					quantity++
				} else if (costAttribute != '3') {
					number++
				}
			}

		}
		if ((bussinessName == 'RL12' || bussinessName == 'RL13') && total > 0) {
			layer.msg("月度报销或年度报销收款人类型只能选择本人", {
				icon: 2
			});
			return false;
		}
		if (times > 0 && times < rowList.length) {
			layer.msg("收款人类型为本人-现金时不能与其他收款人类型同时报销", {
				icon: 2
			});
			return false;
		}
		if ((quantity > 0 && number > 0)) {
			layer.msg("报销时,他人不能与(门店、供应商、一次性供应商次数)同时存在", {
				icon: 2
			});
			return false;
		}
		if (amount > 1) {
			layer.msg("冲销情况下，只能额外报销一笔", {
				icon: 2
			});
			return false;
		}
	}
	if (writeOffLoan == '1' && payment <= 0) {
		layer.msg("报销时,请保证实际报销金额不低于0,请重新确认", {
			icon: 2
		});
		return false;
	}
	return true;

}

//发票类型控制发票有无
function setHaveInvoiceOrNot(obj) {
	var num = Date.now();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司", "财务经理-子公司", "财务总监-子公司", "财务再次审核单据"];

	var activityName = $("#activityName").val();
	var amount = 0;
	var total = 0;
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		var invoiceTypeValPhone = $(obj).val();
		$(tdObj).parent().find("td[data-label='发票类型']").find("select").val(invoiceTypeValPhone);
		if (invoiceTypeValPhone == '1') {
			$(obj).parent().parent().find("td[data-label='发票有无']").find("select").val("无");
		} else {
			$(obj).parent().parent().find("td[data-label='发票有无']").find("select").val("有");
		}
		if (invoiceTypeValPhone == '2' || invoiceTypeValPhone == '4' || invoiceTypeValPhone == '6') {
			$(obj).parent().parent().find("td[data-label='发票号']").show();
			$(obj).parent().parent().find("td[data-label='发票号']").find("input").removeAttr("disabled");

			$(obj).parent().parent().find("td[data-label='发票号']").attr("data-must", "true");
			$(obj).parent().parent().find("td[data-label='发票号']").prepend('<span style="color:red;position: absolute;left: 3px;">*</span>');
		} else {
			$(obj).parent().parent().find("td[data-label='发票号']").hide();
			$(obj).parent().parent().find("td[data-label='发票号']").find("input").attr("disabled", "disabled");
			$(obj).parent().parent().find("td[data-label='发票号']").find("input").val("");
		}

		if (invoiceTypeValPhone == '4' || invoiceTypeValPhone == '6') {
			$(obj).parent().parent().find("td[data-label='税金']").show();
			$(obj).parent().parent().find("td[data-label='税率']").show();
			$(obj).parent().parent().find("td[data-label='税金']").find("input").removeAttr("disabled");
			$(obj).parent().parent().find("td[data-label='税金']").attr("data-must", "true");
			$(obj).parent().parent().find("td[data-label='税金']").prepend('<span style="color:red;position: absolute;left: 3px;">*</span>');
			$(obj).parent().parent().find("td[data-label='税率']").attr("data-must", "true");
			$(obj).parent().parent().find("td[data-label='税率']").prepend('<span style="color:red;position: absolute;left: 3px;">*</span>');
			formUtil.tableFun.changeEditByTdObj($("#tr_table").find("td[data-label='税率']").eq(0));
		} else {
			$(obj).parent().parent().find("td[data-label='税金']").hide();
			$(obj).parent().parent().find("td[data-label='税率']").hide();
			$(obj).parent().parent().find("td[data-label='税金']").find("input").attr("disabled", "disabled");
			$(obj).parent().parent().find("td[data-label='税率']").find("select").val("");
			$(obj).parent().parent().find("td[data-label='税金']").find("input").val("");
			formUtil.tableFun.changeNotEditByTdObj($("#tr_table").find("td[data-label='税率']").eq(0));
		}

	}
	var rowList = $("[name='reimburseDetail'] tbody").find("tr");
	for (var i = 0; i < rowList.length; i++) {
		var invoiceType = $(rowList[i]).find("td[data-label='发票类型']").find("select").val();
		if (invoiceType == '1') {
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='发票有无']").find("select").val("无");
		} else {
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='发票有无']").find("select").val("有");
		}
		if (invoiceType == '4' || invoiceType == '6') {
			if (activityName == '申请人填写' || activityName == '申请人确认' || activityArr.indexOf(activityName) != -1) {
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c6//税金
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c7//税率
				});
				formUtil.tableFun.changeShowMustByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c6
				});
				formUtil.tableFun.changeShowMustByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c7
				});
			}
			amount++;
		} else {
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c6
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c7
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c6
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c7
			});
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='税金']").not(".no_data").find("input").val("");
			$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='税率']").not(".no_data").find("select").val("");
		}
		if (invoiceType == '2' || invoiceType == '4' || invoiceType == '6') {
			if (activityName == '申请人填写' || activityName == '申请人确认' || activityArr.indexOf(activityName) != -1) {
				formUtil.tableFun.changeShowMustByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c4
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					rowNum: i,
					colNum: c4//发票号
				});
			}
			formUtil.tableFun.changeShowMustByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c4
			});
			total++;
		} else {
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c4
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				rowNum: i,
				colNum: c4
			});
		}
	}
	if (total >= 1) {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c4
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c4
		});
	}
	if (amount >= 1) {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c6
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c7
		});
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c6
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c7
		});
	}
	layui.form.render();
	console.log("setHaveInvoiceOrNot:" + (Date.now() - num));
}

//发票类型控制分配类型  除增值税专用发票，其他发票，分配固定J0
function setDistributeByInvoiceType(obj) {
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司", "财务经理-子公司", "财务总监-子公司", "财务再次审核单据"];
	var invoiceType = $(obj).val();
	var index = $(obj).parent().parent().index();
	var activityName = $("#activityName").val();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		if (invoiceType != "4" && (activityName == '申请人填写' || activityName == '申请人填写(预算解锁)' || activityName == '申请人确认' || activityArr.indexOf(activityName) != -1)) {
			$(obj).parent().parent().find("td[data-label='分配']").find("select").val("J0");
			formUtil.tableFun.changeNotEditByTdObj($(obj).parent().parent().find("td[data-label='分配']"));
			//分配
			$(obj).parent().parent().find("td[data-label='分配']").hide();
			//分配
		} else {
			formUtil.tableFun.changeEditByTdObj($(obj).parent().parent().find("td[data-label='分配']"));

			$(obj).parent().parent().find("td[data-label='分配']").show();
		}
	}
	if (invoiceType != "4" && (activityName == '申请人填写' || activityName == '申请人填写(预算解锁)' || activityName == '申请人确认' || activityArr.indexOf(activityName) != -1)) {
		$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='分配']").find("select").val("J0");
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'reimburseDetail',
			rowNum: index,
			colNum: c15
		});
	} else {
		formUtil.tableFun.changeEditByTableParam({
			name: 'reimburseDetail',
			rowNum: index,
			colNum: c15
		});
	}
	layui.form.render();
}

//币种控制汇率、人民币金额字段显示隐藏编辑权限
function changeColumnShowOrHide() {
	var num = Date.now();
	var dataList = $("[name='reimburseDetail'] tbody").find("tr");
	var amount = 0;
	for (var i = 0; i < dataList.length; i++) {
		var currency = $(dataList[i]).find("td[data-label='币种']").find("select").val();
		if (!currency) {
			$(dataList[i]).find("td[data-label='币种']").find("select").val("CNY");
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				//汇率
				rowNum: i
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				//人民币金额
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				rowNum: i
			});

		} else if (currency == 'CNY') {
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c2
			});
			formUtil.tableFun.chooseModelHiddenByTableParam({
				name: 'reimburseDetail',
				colNum: c3
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				rowNum: i
			});
			formUtil.tableFun.changeHiddenMustByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				rowNum: i
			});
			formUtil.tableFun.changeNotEditByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				rowNum: i
			});

		} else {
			formUtil.tableFun.changeShowMustByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				rowNum: i
			});
			formUtil.tableFun.changeShowMustByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				rowNum: i
			});
			formUtil.tableFun.changeEditByTableParam({
				name: 'reimburseDetail',
				colNum: c2,
				rowNum: i
			});
			formUtil.tableFun.changeEditByTableParam({
				name: 'reimburseDetail',
				colNum: c3,
				rowNum: i
			});
			amount++;
		}
	}
	if (amount >= 1) {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c2
		});
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c3
		});
	} else {
		//2汇率    3人民币金额
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c2
		});
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c3
		});
	}
	console.log("changeColumnShowOrHide:" + (Date.now() - num));
}

// 根据同步的供应商编号查询供应商信息
function getLinInfoByCode(obj) {
	var errorMsg = "";
	var shoukuanrentype = $(obj).parent().parent().find("td[data-label='收款人类型']").not(".no_data").find('select').val();
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var zhuanzhangMoney = $(obj).parent().parent().find("td[data-label='金 额']").not(".no_data").find('input').val();
	var code = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").val().trim();
	var index = $(obj).parent().parent().index();
	var remark = $(obj).parent().parent().find("td[data-label='备注']").find("input").val();
	remark = remark.substring(0, 20);
	var storeCode = $(obj).parent().parent().find("td[data-label='门店费用归属编码']").find("input").val();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
	}
	if (code) {
		$.ajax({
			url: common.getPath() + '/rbQuerySAPInfo/getLinInfoByCode',
			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				"lifnr": code
			}),
			async: false,
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {

				var data = result.data;
				if (data.length <= 0) {
					layer.msg('该供应商不存在,请重新确认', {
						icon: 2
					});
					var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
					if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
						$("#tr_table").find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").val("");
						$("#tr_table").find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");
						$("#tr_table").find("td[data-label='名称']").find("input").val("");
					}
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").val("");
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					clearTdShouKuanRenByIndex(obj);
					return;
				}

				$(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find('input').val(result.data[0].name1);
				if (!storeCode) {
					$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find('.value_id').val(result.data[0].name1);
				}
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find('.value_code').val(code);

				var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
				for (var i = 0; i < shoukuanrentrs.length; i++) {
					var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
					if (shoukaunrenId == detailId) {

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").find('select').change();
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(result.data[0].lifnr);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val(result.data[0].name1);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val(result.data[0].zzhangh);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("1");

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val(result.data[0].zhangh);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val(result.data[0].text);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val(zhuanzhangMoney);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val(remark);
						if (result.data[0].zkuah == "跨行" || !result.data[0].zkuah) {
							setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input'));
						} else {
							$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("0");
						}
						break;
					}
				}
				if (!result.data[0].lifnr) {
					errorMsg += "收款人类型,"
				}
				if (!result.data[0].name1) {
					errorMsg += "收款人名称,"
				}
				if (!result.data[0].zzhangh) {
					errorMsg += "收款人账号,"
				}
				if (!result.data[0].zhangh) {
					errorMsg += "开户行行号,"
				}
				if (!result.data[0].text) {
					errorMsg += "开户行名称,"
				}
				if (errorMsg) {
					layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请先在SAP进行维护后再进行操作', {
						icon: 2
					});
					return;
				}
				layui.form.render("select");
			}
		});
	}
}

//手机端展示当前行信息
function _mobileShowDataToTr(obj) {
	if (common.isMobile()) {
		if (obj) {
			var weekCode = $(obj).parent().find("[data-label='门店费用归属编码']").find("input").val();
			var code = $(obj).parent().find("[data-label='门店名称']").find("input").val();
			var name = $(obj).parent().find("td[data-label='报销类型']").find("select option:selected").text();
			var money = $(obj).parent().find("td[data-label='金 额']").find("input").val();
			if (name == '---请选择---') {
				name = "";
			}
			if (weekCode && code && name && money) {
				$(obj).parent().find(".no_add").remove();
				var tdHtml = '<td data-label="门店信息" class="no_data no_add">' + weekCode + "-" + code + '-' + name + '-' + money + '</td>';
				$(obj).after(tdHtml);
			}
		} else {
			$("[name='reimburseDetail']").find("tbody").find("tr").each(function() {
				var weekCode = $(this).find("[data-label='门店费用归属编码']").find("input").val();
				var code = $(this).find("[data-label='门店名称']").find("input").val();
				var name = $(this).find("td[data-label='报销类型']").find("select option:selected").text();
				var money = $(this).find("td[data-label='金 额']").find("input").val();
				if (name == '---请选择---') {
					name = "";
				}
				if (weekCode && code && name && money) {
					$(this).find(".no_add").remove();
					var tdHtml = '<td data-label="门店信息" class="no_data no_add">' + weekCode + "-" + code + '-' + name + '-' + money + '</td>';
					$(this).find("td").eq(0).after(tdHtml);
				} else {
					$(this).find(".no_add").remove();
					var tdHtml = '<td data-label="门店信息" class="no_data no_add">' + '' + '-' + '' + '</td>';
					$(this).find("td").eq(0).after(tdHtml);
				}
			});
		}
	}
}

// 根据门店查询供应商信息和门店信息
function getWerkAndLinInfo(obj) {
	var errorMsg = "";
	var shoukuanrentype = $(obj).parent().parent().find("td[data-label='收款人类型']").not(".no_data").find('select').val();
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var zhuanzhangMoney = $(obj).parent().parent().find("td[data-label='金 额']").not(".no_data").find('input').val();
	var code = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").val().trim();
	var index = $(obj).parent().parent().index();
	var remark = $(obj).parent().parent().find("td[data-label='备注']").find("input").val();
	remark = remark.substring(0, 20);
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {

		index = $(tdObj).parent().index();
	}
	if (code != "") {

		$.ajax({
			url: common.getPath() + '/rbQuerySAPInfo/getWerkAndLinInfo',
			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				"werk": code
			}),
			async: false,
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {

				var data = result.data;
				if (data.length <= 0) {
					layer.msg('该门店不存在,请重新确认', {
						icon: 2
					});
					var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
					if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {

						$("#tr_table").find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
						$("#tr_table").find("td[data-label='名称']").find("input").val("");
					}
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					clearTdShouKuanRenByIndex(obj);
					return;

				}
				var storeName = data[0].name1;
				var trIndex = storeName.indexOf("市");
				if (trIndex != -1) {
					storeName = storeName.substring(trIndex + 1, storeName.length);
				}
				$(obj).parent().parent().find("td[data-label='名称']").not(".no_data").find('input').val(result.data[0].name1);
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find('.value_id').val(storeName);
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find('.value_code').val(code);
				$(obj).parent().parent().find("td[data-label='门店费用归属编码']").not(".no_data").find('input').val(code);
				$(obj).parent().parent().find("td[data-label='门店费用归属编码']").not(".no_data").find('input').change();

				var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
				for (var i = 0; i < shoukuanrentrs.length; i++) {
					var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
					if (shoukaunrenId == detailId) {
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").find('select').change();
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(result.data[0].lifnr);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val(result.data[0].koinh);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val(result.data[0].zzhangh);

						//$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val(result.data[0].zhuilu);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("1");

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val(result.data[0].zhangh);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val(result.data[0].text);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val(zhuanzhangMoney);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val(remark);
						if (result.data[0].zkuah == "跨行" || !result.data[0].zkuah) {
							setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input'));
						} else {
							$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("0");
						}
						break;
					}
				}
				if (!result.data[0].lifnr) {
					errorMsg += "收款人类型,"
				}
				if (!result.data[0].koinh) {
					errorMsg += "收款人名称,"
				}
				if (!result.data[0].zzhangh) {
					errorMsg += "收款人账号,"
				}
				if (!result.data[0].zhangh) {
					errorMsg += "开户行行号,"
				}
				if (!result.data[0].text) {
					errorMsg += "开户行名称,"
				}
				if (errorMsg) {
					layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请先在SAP进行维护后再进行操作', {
						icon: 2
					});
					return;
				}

				$(obj).parent().parent().find("td[data-label='门店费用归属编码']").not(".no_data").find('input').change();
				layui.form.render("select");

			}
		});

	}
}

// 根据工号获取员工信息
// 根据工号获取员工信息
function obtainBankInformationAccordingToWorkNumber(obj) {
	var pageType = $("#pageType").val();
	var userId = "";
	if (pageType == 'startProcess') {
		userId = $("#userId").val();
	} else {
		userId = $("#insInitUser").val();
	}
	var errorMsg = "";
	var userId = $("#userId").val();
	var shoukuanrentype = "";
	var zhuanzhangMoney = "";
	var code = null;
	var name = null;
	var remark = "";
	var storeCode = "";
	var writeOffLoan = $("[name='writeOffLoan']").val();
	var index = $(obj).parent().parent().index();
	var subjectType = $("[name='subject_type']").val();
	var title = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		title = $(tdObj).parent().parent().parent().attr("name");
	}
	if (title == "reimburseDetail") {
		shoukuanrentype = $(obj).parent().parent().find("td[data-label='收款人类型']").not(".no_data").find('select').val();
		zhuanzhangMoney = $(obj).parent().parent().find("td[data-label='金 额']").not(".no_data").find('input').val();
		code = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("[type='text']").val().trim();
		name = $(obj).parent().parent().find("td[data-label='名称']").find("input").val();
		remark = $(obj).parent().parent().find("td[data-label='备注']").find("input").val();
		storeCode = $(obj).parent().parent().find("td[data-label='门店费用归属编码']").find("input").val();
	} else {}
	remark = remark.substring(0, 20);
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();

	if (code != "") {
		$.ajax({
			url: common.getPath() + '/rbQuerySAPInfo/obtainBankInformationAccordingToWorkNumber',

			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				"PERNR": code
			}),
			async: false,
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.msg == '接口返回异常') {
					layer.msg('该员工不存在,请重新确认', {
						icon: 2
					});
					if (title == "reimburseDetail") {
						if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");

							$(obj).parent().parent().find("td[data-label='名称']").find("input").val("");
						}
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					} else {//清空差旅表
					}

					clearTdShouKuanRenByIndex(obj);
					return;
				}
				var data = $.parseJSON(result.obj.responseBody);

				var $data = JSON.stringify(data);
				if ($data == '{}') {
					layer.msg('该员工不存在,请重新确认', {
						icon: 2
					});
					if (title == "reimburseDetail") {
						if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
							$(obj).parent().parent().find("td[data-label='名称']").find("input").val("");
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");
						}
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input").val("");
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val("");
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val("");
					} else {//清空差旅表
					}
					clearTdShouKuanRenByIndex(obj);
					return;

				}

				var shoukuanrentrs = $("[name = 'payees'] tbody ").find("tr");
				for (var i = 0; i < shoukuanrentrs.length; i++) {
					var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
					if (shoukaunrenId == detailId) {
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").find('select').change();
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(data.PERNR);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val(name);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val(data.BKREF);

						//$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val(data.ZHUILU);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("1");

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val(data.ZHANGH);

						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val(data.TEXT);
						if (($("[name='writeOffLoan']").val() == "0") && ($("[name='subject_type']").val() == "09")) {
							$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val($("[name='total']").val());

						} else {
							$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input').val(zhuanzhangMoney);

						}
						$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val(remark);
						if (data.ZKUAH == "1" || !data.ZKUAH) {
							setSinkRoadByTotal($("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='转账金额']").not(".no_data").find('input'));
						} else {
							$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("0");
						}
						break;
					}
				}
				if (!data.PERNR) {
					errorMsg += "收款人编号,"
				}
				if (!data.BKREF) {
					errorMsg += "收款人账号,"
				}
				if (!data.ZHANGH) {
					errorMsg += "开户行行号,"
				}
				if (!data.BANKA) {
					errorMsg += "开户行名称,"
				}
				if (errorMsg) {
					layer.msg('收款人' + code + ':' + errorMsg + '信息缺失,请先在SAP进行维护后再进行操作', {
						icon: 2
					});
					return;
				}
				layui.form.render("select");

			}
		});
	}

}

// 清空普通表中排序号对应的收款人表的td
function clearTdShouKuanRenByIndex(obj) {
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var paixuIndex = $('[name="payees"]').find("tbody").find('tr').eq(0).find("td[data-label='排序']").not(".no_data").index();
	var typeIndex = $('[name="payees"]').find("tbody").find('tr').eq(0).find("td[data-label='收款人类型']").not("no_data").index();
	var payeesTrs = $('[name="payees"]').find("tbody").find("tr");

	for (var i = 0; i < payeesTrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {

			if (common.isMobile()) {
				$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(2):lt('" + (paixuIndex - 3) + "') input").val("")
				$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(2) select").val("");
			} else {
				$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0):lt('" + (paixuIndex - 3) + "') input").val("")
				$('[name="payees"]').find("tbody").find("tr").eq(i).find("td:gt(0) select").val("");
			}

		}
	}
}

// 清空普通表中排序号对应的收款人表的td
function cleanPayeesDateByIndex(index) {}

function giveOnChangeForOnload() {
	var mainTrs = $("[name = 'reimburseDetail'] tbody ").find("tr");
	for (var i = 0; i < mainTrs.length; i++) {
		var shoukuanrenType = mainTrs.eq(i).find("td[data-label='收款人类型']").not(".no_data").find("select").val();
		if (shoukuanrenType) {
			switch (shoukuanrenType) {
				case '1':
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getWerkAndLinInfo(this);");

					// formUtil.tableFun.changeEditByTableParam({name:'reimburseDetail',colNum:c11,rowNum:i});//门店费用归属编码
					break;
				case '2':

					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");
					// formUtil.tableFun.changeEditByTableParam({name:'reimburseDetail',colNum:c11,rowNum:i});
					break;
				case '3':
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");
					break;
				case '4':
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");
					// formUtil.tableFun.changeEditByTableParam({name:'reimburseDetail',colNum:c11,rowNum:i});
					break;
				case '5':
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");
					break;
				default:
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "");
					break;
			}
		}
	}
}
function addOnChange(obj) {
	var shoukuanrentype = $(obj).parent().parent().find("td[data-label='收款人类型']").not(".no_data").find('select').val();
	var lifnrCode = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").val();
	var detailId = $(obj).parent().parent().find("td[data-label='排序']").not(".no_data").find('input').val();
	var mainTrs = $("[name = 'reimburseDetail'] tbody ").find("tr");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		switch (shoukuanrentype) {
			case '1':
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getWerkAndLinInfo(this);");
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				//门店费用归属编码
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				//成本中心代码
				break;
			case '2':

				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");

				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				break;
			case '3':
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");

				break;
			case '4':
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");

				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				break;
			case '5':
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");

				break;
			default:
				$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "");

				//formUtil.tableFun.changeEditByTableParam({name:'reimburseDetail',colNum:12,rowNum:i});
				break;
		}
	} else {
		switch (shoukuanrentype) {
			case '1':
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getWerkAndLinInfo(this);");
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				break;
			case '2':
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				break;
			case '3':
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");
				formUtil.tableFun.changeNotEditByTableParam({
					name: 'reimburseDetail',
					colNum: 13,
					rowNum: index
				});
				break;
			case '4':
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "setCostCenterByCondition2(this);obtainBankInformationAccordingToWorkNumber(this);");
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c11,
					rowNum: index
				});
				formUtil.tableFun.changeEditByTableParam({
					name: 'reimburseDetail',
					colNum: c37,
					rowNum: index
				});
				break;
			case '5':
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "getLinInfoByCode(this)");
				formUtil.tableFun.changeNotEditByTableParam({
					name: 'reimburseDetail',
					colNum: 13,
					rowNum: index
				});
				break;
			default:
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input[type='text']").attr("onchange", "");
				//formUtil.tableFun.changeEditByTableParam({name:'reimburseDetail',colNum:13,rowNum:index});
				break;
		}

	}
	var fuTrs = $("[name = 'payees'] tbody ").find("tr");

	for (var i = 0; i < fuTrs.length; i++) {
		var shoukaunrenId = $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (shoukaunrenId == detailId) {
			if (shoukuanrentype == '5') {
				$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val(lifnrCode);

			} else {
				$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人编号']").not(".no_data").find('input').val("");
			}
			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").not(".no_data").find('select').val(shoukuanrentype);
			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人类型']").find("select").change();
			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人名称']").not(".no_data").find('input').val("");

			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账号']").not(".no_data").find('input').val("");

			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='汇路']").not(".no_data").find('select').val("");

			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='收款人账户类型']").not(".no_data").find('select').val("");

			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行行号']").not(".no_data").find('input').val("");

			$("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='开户行名称']").not(".no_data").find('input').val("");
			// $("[name = 'payees'] tbody ").find("tr").eq(i).find("td[data-label='附言']").not(".no_data").find('input').val("");

		}
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
// 设置表格第一行的排序号

function giveDiYiHangBiaoJi() {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var isHaveIdr = $("[name = 'reimburseDetail'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val();
	var isHaveIdt = $("[name = 'travelInfo'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val();

	var isHaveIdp = $("[name = 'payees'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val();

	if (activityName == '申请人填写' || activityName == '申请人填写(预算解锁)' || activityName == '申请人确认') {
		if (!isHaveIdr || !isHaveIdt || !isHaveIdp) {
			var detailId = uuid();
			$("[name = 'reimburseDetail'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
			$("[name = 'payees'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
			$("[name = 'travelInfo'] tbody ").find("tr").eq(0).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);

		}
	}
	console.log("giveDiYiHangBiaoJi:" + (Date.now() - num));
}

//动态添加行数重构事件
function myrowChangeEvent(obj) {
	var title = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		title = $(tdObj).parent().parent().parent().attr("name");
	}
	if (title == "reimburseDetail") {
		var size = 0;
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var loanNo = $(this).find("td[data-label='借款单据号']").find("input").val();
			var costAttribute = $(this).find("td[data-label='收款人类型']").find("select").val();
			if (!loanNo && costAttribute != "6") {
				size++;
			}
		});
		var payeeList = $("[name='payees'] tbody").find("tr");
		if (size > payeeList.length) {
			addDataRow($('[name="payees"]').find('i[title = "添加新的一行" ]').eq(0));
		}
		var detailId = uuid();
		var maintrsLength = $("[name = 'reimburseDetail'] tbody ").find("tr").length;
		var shoukuanrentrsLength = $("[name = 'payees'] tbody ").find("tr").length;
		var lastTrSort = $("[name = 'reimburseDetail'] tbody ").find("tr").eq(maintrsLength - 1).find("td[data-label='排序']").not(".no_data").find("input").val();
		if (!lastTrSort) {
			$("[name = 'reimburseDetail'] tbody ").find("tr").eq(maintrsLength - 1).find("td[data-label='排序']").not(".no_data").find("input").val(detailId);
		}
		var detailIdArr1 = [];
		var detailIdArr2 = [];
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var loanNo = $(this).find("td[data-label='借款单据号']").find("input").val();
			var sortNo1 = $(this).find("td[data-label='排序']").find("input").val();
			var costAttribute = $(this).find("td[data-label='收款人类型']").find("select").val();
			if (!loanNo && sortNo1 && costAttribute != '6') {
				detailIdArr1.push(sortNo1);
			}
		});
		$("[name = 'payees'] tbody ").find("tr").each(function() {
			var sortNo2 = $(this).find("td[data-label='排序']").find("input").val();
			if (sortNo2) {
				detailIdArr2.push(sortNo2);
			}
		});
		for (var i = 0; i < detailIdArr1.length; i++) {
			if (detailIdArr2.indexOf(detailIdArr1[i]) == -1) {
				$("[name = 'payees'] tbody ").find("tr").eq(shoukuanrentrsLength - 1).find("td[data-label='排序']").not(".no_data").find("input").val(detailIdArr1[i]);
				formUtil.tableFun.changeNotEditByTableParam({
					name: 'payees',
					rowNum: shoukuanrentrsLength - 1
				});

				$("[name='payees'] tbody td[data-label='收款人编号']").find("i").show();

				var receiveType = $("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='收款人类型']").find("select").val();
				if (receiveType == '3') {
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + i + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").change();
				}
			}
		}

	}
}

function myRowRemove(obj) {
	var title = $(obj).parent().parent().parent().parent().attr("name");
	var rowIndex = $(obj).parent().parent().index();
	var shoukuanrentrIndex;
	var detailId = $("[name = 'reimburseDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='排序']").not(".no_data").find("input").val();
	if (title == "reimburseDetail") {
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

//报销费用明细金额赋值到收款人转账金额
function giveMoney(obj) {
	var rowIndex = $(obj).parent().parent().index();
	var subjectType = $("[name='subject_type']").val();
	var jieKuanMoney = "";
	var detailId = "";
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {

		rowIndex = $(tdObj).parent().index();

	}

	jieKuanMoney = $("[name = 'reimburseDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='金 额']").not(".no_data").find("input").val();
	detailId = $("[name = 'reimburseDetail'] tbody ").find("tr").eq(rowIndex).find("td[data-label='排序']").not(".no_data").find("input").val();

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

//明细备注字段自动填充到收款人信息表中
function setRemarkByTableDetail(obj) {
	var remark = "";
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var sortNo1 = $(obj).parent().parent().find("td[data-label='排序']").find("input").val();
	var tableLength = $("[name='payees'] tbody").find("tr").length;
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile()) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");
	}
	if (tableName == 'reimburseDetail') {
		remark = $(obj).val();
	}
	remark = remark.substring(0, 20);
	for (var i = 0; i < tableLength; i++) {
		var sortNo2 = $("[name='payees'] tbody").find("tr:eq(" + i + ")").find("td[data-label='排序']").find("input").val();
		if (sortNo1 == sortNo2) {
			$("[name='payees'] tbody").find("tr:eq(" + i + ")").find("td[data-label='附言']").not(".no_data").find("input").val(remark);
		}
	}

}

//收款人类型为供应商、门店、一次性供应商时默认成本中心为发起人的成本中心，名称是发起人的部门名称
function setCostCenterByCondition1(obj) {
	var costAttribute = $(obj).val();
	var index = $(obj).parent().parent().index();

	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
	}
	var departmentId = $("#departNo").val();
	if (departmentId) {
		if (costAttribute == "1" || costAttribute == "2" || costAttribute == "5" || costAttribute == "6") {
			//门店，供应商，一次性供应商，本人现金
			$.ajax({
				url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmentId,
				type: 'post',
				async: false,
				contentType: "application/json;charset=utf-8",
				success: function(result) {
					if (result.status == 0) {

						if (result.data.kostl && result.data.cstctrShortText) {
							var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
							if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
								$(obj).parent().parent().find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
								$(obj).parent().parent().find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
								$(obj).parent().parent().find("td[data-label='成本中心名称']").find("input").val(result.data.cstctrShortText);
							} else {
								$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
								$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
								$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val(result.data.cstctrShortText);
							}

						} else {
							layer.alert("该部门没有对应的成本中心");
							var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
							if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
								$(obj).parent().parent().find("td[data-label='成本中心代码']").find("input']").val("");
								$(obj).parent().parent().find("td[data-label='成本中心名称']").find("input").val("");
							} else {
								$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input']").val("");
								$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
							}

							return;
						}

					} else {
						layer.msg(result.msg);
						return;
					}
				},
				error: function(result) {}
			});
		}
	}

}

//收款人类型为本人或他人时查询员工对应成本中心
function setCostCenterByCondition2(obj) {
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var userUid = $(obj).val();
	var index = $(obj).parent().parent().index();
	var departmentId = "";
	var costAttribute = $(obj).parent().parent().find("td[data-label='收款人类型']").find("select").val();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	var storeCode = "";

	if (common.isMobile()) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");
		storeCode = $("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='门店费用归属编码']").find("input").val().trim();
	}

	if (costAttribute == "3" || costAttribute == "4" || tableName == 'travelInfo') {
		$.ajax({
			url: common.getPath() + '/sysUser/getSysUser?userUid=' + userUid,
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result != "") {
					departmentId = result.departUid;
					if (tableName == 'reimburseDetail') {
						if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
							$(obj).parent().parent().find("td[data-label='名称']").find("input").val(result.userName);

							if (!storeCode) {
								$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find(".value_id").val(result.userName);
							}
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val(userUid);
						} else {
							$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val(result.userName);
							$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find(".value_id").val(result.userName);
							$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find(".value_code").val(userUid);
						}
					}
				} else {
					layer.alert("该员工不存在,请重新确认");
					if (tableName == 'travelInfo') {
						$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='工号']").not(".no_data").find("input").val("");
					} else {
						if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
							$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input").val("");
						}
						$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input").val("");
					}
					return;
				}
			},
			error: function(result) {}
		});
	}
	if (departmentId) {
		$.ajax({
			url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmentId,
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result != null && result.status == 0) {
					if (result.data.kostl) {
						if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
							$(obj).parent().parent().find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
							$(obj).parent().parent().find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
							$(obj).parent().parent().find("td[data-label='成本中心名称']").find("input").val(result.data.cstctrShortText);
						}
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val(result.data.cstctrShortText);
					} else {
						layer.alert("该部门没有对应的成本中心,请找人力部门协调");
						return;
					}

				} else {
					layer.msg("部门：" + departmentId + "不存在," + result.msg);
				}
			},
			error: function(result) {}
		});
	}
}

//室外差旅根据员工号带出成本中心及对应成本中心名称
function setCostCenterByUserId(obj) {
	var userUid = $(obj).val();
	var index = $(obj).parent().parent().index();
	var departmentId = "";
	$.ajax({
		url: common.getPath() + '/sysUser/getSysUser?userUid=' + userUid,
		type: 'post',
		async: false,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (result != null) {
				departmentId = result.departUid;
				$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='名称']").find("input").val(result.userName);
			} else {
				layer.alert("该员工不存在,请重新确认");
			}
		},
		error: function(result) {}
	});

	if (departmentId) {
		$.ajax({
			url: common.getPath() + '/rbQuerySAPInfo/getCostNameByDeptCode',
			type: 'post',
			data: JSON.stringify({
				"departmentId": departmentId
			}),
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result != null) {
					var costCenter = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").val();
					var departmentId = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']").val();
					var costCenterName = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val();
					if (!costCenter) {
						if (result.data.kostl) {
							$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").val(result.data.kostl);
						} else {
							layer.alert("该部门没有对应的成本中心,请找人力部门协调");
						}
						$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']");
					}
					if (!departmentId) {
						$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='hidden']").val(result.data.departmentId);
					}

				} else {
					layer.alert(result.msg);
				}
			},
			error: function(result) {}
		});
	}
}

//重构手选部门方法赋值成本中心
function getCostCenter(departmentId, elementId) {
	//表格中成本中心选择页面
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
					layer.alert("该部门没有对应的成本中心,请联系人力解决");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
					return;
				}
				if (result.data.kostl == null) {
					layer.alert("该部门没有对应的成本中心,请联系人力解决");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
				} else {
					$("[name='" + tableName + "'] tbody").find("tr").each(function() {
						var costCenterCode = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
						if (!costCenterCode) {
							$(this).find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(result.data.kostl);
							$(this).find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(result.data.departmentId);
							$(this).find("td[data-label='成本中心名称']").not(".no_data").find("input").val(result.data.cstctrShortText);
						}
					});
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(result.data.kostl);
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(result.data.departmentId);
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").not(".no_data").find("input").val(result.data.cstctrShortText);
					//getBudget("#"+elementId+"_view");
				}
			} else {
				layer.alert("该部门没有对应的成本中心,请联系人力解决");
				$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
				$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
			}
		},
		error: function(result) {}
	});
}

function showLoad() {
	return layer.msg('正在获取发票信息中，请稍候...', {
		icon: 16,
		shade: [0.5, '#f5f5f5'],
		scrollbar: false,
		offset: 'auto',
		time: 100000
	});

}
function showVerInfo() {
	return layer.msg('发票验真中，请稍候...', {
		icon: 15,
		shade: [0.5, '#f5f5f5'],
		scrollbar: false,
		offset: 'auto',
		time: 100000
	});
}
// 关闭转菊花
function closeLoad(index) {
	layer.closeAll();
}

function showSuccess() {
	layer.msg('执行成功！', {
		time: 1000,
		offset: 'auto'
	});

}
// 所有图片上传完成后复写方法
function executeWay() {
	var imgHrefs = [];
	var toGethref = $("#img_upload_tNfF_loc").find(".fileList").find("a");
	for (var i = 0; i < toGethref.length; i++) {
		var href = toGethref.eq(i).attr("href");
		var imagesIndex = href.indexOf("/images/");
		var imgName = href.substring(imagesIndex + 8);
		var encodeImgName = encodeURIComponent(encodeURIComponent(imgName));
		var finalImgAddr = "http://180.153.17.44:9500/getHref/" + encodeImgName;
		imgHrefs.push(finalImgAddr);
	}
	if (imgHrefs.length > 0)
		myFunction(imgHrefs);

}

function getSwitchForOcr() {
	var activityName = $("#activityName").val();
	if (activityName == '申请人填写') {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/qrySwitchForRb?switchId=switch_uid:00a24a7e-7c5e-4e27-b2c1-f377023a3419',
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == '0' && result.data.switchStatus == "开") {
					$("[name='switchOcrStatus']").val("开");
				} else {
					$("[name='switchOcrStatus']").val("关");
				}
			}
		});
	}
}

// 所有图片上传完成后复写方法
// function executeWayForMobile(obj) {
// getSwitchForOcr();
// var switchOcrStatus=$("[name='switchOcrStatus']").val();
// var activityName = $("#activityName").val();
// var subject_type = $("[name='subject_type']").val();
// if (subject_type == null || subject_type.trim() == "" || subject_type == undefined) {
// $("[name='PnZp']").parent().hide();
// } else {

// if(switchOcrStatus=="开"){
// var imgHrefs = [];
// var imgName= obj.substring(15);
// var encodeImgName=encodeURIComponent(encodeURIComponent(imgName));
// var finalImgAddr="http://180.153.17.44:9500/getHref/"+encodeImgName;
// imgHrefs.push(finalImgAddr);
// if (imgHrefs.length > 0){
// myFunction(imgHrefs);
// }else{
// layer.msg("路径有误");
// }
// }else{
// layer.msg("发票识别功能已关闭!");
// }

// }

// }

// 查发票识别ID
var i;
var ver;
var invoiceTimer;
function myFunction(hrefs) {
	var urls = hrefs;
	var ids = '';
	var length = urls.length;
	for (var i = 0; i < length; i++) {
		ids += urls[i] + ','
	}
	var xhr = $.ajax({
		url: 'getInvoiceInfoByRB/queryInvoiceInfo',
		type: 'post',
		dataType: 'json',
		data: JSON.stringify({
			"Urls": ids
		}),
		timeout: 5000,
		contentType: "application/json;charset=utf-8",
		beforeSend: function() {
			i = showLoad();
		},
		success: function(result) {
			var data = result.data;
			console.log(data);
			if (data && data.code == '200') {
				invoiceTimer = setInterval(function() {
					queryResult(data.msg);
					console.log("获取发票id执行一次");
				}, 3000);
			} else {
				layer.msg("识别异常，请重新上传图片！", {
					time: 1000,
					offset: 'auto'
				});

				deleteImgFileByDataId();
			}
		},
		complete: function(XMLHttpRequest, status) {
			if (status == 'timeout') {
				xhr.abort();
				// 超时后中断请求
				closeLoad(i);
				layer.msg("请求超时，请重试！", {
					time: 1000,
					offset: 'auto'
				});
				deleteImgFileByDataId();
			}
		}
	})

}
// 查发票信息
function queryResult(qryObj2) {
	var qryObj = JSON.parse(qryObj2);
	var successList = qryObj.data.successList;
	var errorList = qryObj.data.errorList;
	var successListStr = '';
	var length = successList.length;
	for (var i = 0; i < length; i++) {
		successListStr += successList[i] + ','
	}
	var errorMsgForCustomer = '';
	var errorListStr = '';
	var length2 = errorList.length;
	for (var i = 0; i < length2; i++) {
		errorListStr += JSON.stringify(errorList[i]) + ','
		var $msg = ",图片路径：" + errorList[i].url + ",异常原因：" + errorList[i].reason + "!\r\n";
		errorMsgForCustomer += $msg;
	}
	$.ajax({
		url: 'getInvoiceInfoByRB/queryInvoiceInfoByTaskId',
		type: 'post',
		dataType: 'json',
		data: JSON.stringify({
			successListStr: successListStr,
		}),
		timeout: 5000,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			var data = result.data;
			console.log(data);
			if (data) {
				if (data.code == '200') {
					var msg = data.msg;
					var msgObj = JSON.parse(msg);
					if (msgObj.code == '0') {
						clearInterval(invoiceTimer);
						//然后从data.msg中取值放入到明细表中
						console.log(msgObj);
						var $msgForAll = giveValue(msgObj, errorMsgForCustomer);
						closeLoad(i);
						if ($msgForAll != "") {

							layer.open({
								content: $msgForAll,
								btn: 'OK'
							});
						}
					} else if (msgObj.code == '1') {
						clearInterval(invoiceTimer);
						closeLoad(i);
						layer.msg("识别失败，请重新上传！", {
							time: 1000,
							offset: 'auto'
						});
					}
				} else {
					//                     在访问时可能报500错误，再访问能访问到，所以不关闭调用
					clearInterval(invoiceTimer);
					closeLoad(i);
					layer.msg("请求失败，请联系管理员！", {
						time: 1000,
						offset: 'auto'
					});
					deleteImgFileByDataId();

				}
			} else {
				clearInterval(invoiceTimer);
				closeLoad(i);
				layer.msg("网络错误,请重新上传图片！", {
					time: 1000,
					offset: 'auto'
				});
				deleteImgFileByDataId();
			}
		},
		complete: function(XMLHttpRequest, status) {
			if (status == 'timeout') {
				xhr.abort();
				// 超时后中断请求
				closeLoad(i);
				layer.msg("请求超时，请重试！", {
					time: 1000,
					offset: 'auto'
				});
				deleteImgFileByDataId();
			}
		}
	})

}
// 行验真复写方法
function _validateRowData(obj, trJson) {
	console.log(trJson);
	var $data = JSON.stringify(trJson);
	if ($data == '{}') {
		layer.msg("当前行没有数据，无需验真", {
			time: 1000,
			offset: 'auto'
		});
		return;
	}
	queryInvoiceVerTaskId(trJson);
}
// 查验真ID
var verTimer;
function queryInvoiceVerTaskId(trJson) {
	var verParam
	if ($("[name='subject_type']").val().trim() != "09") {
		verParam = trJson.verParam;
	} else {
		verParam = trJson.verParamA;
	}
	if (verParam == "" || verParam == undefined) {
		layer.msg("当前发票不支持验真", {
			time: 1000,
			offset: 'auto'
		});
		return;
	}
	$.ajax({
		url: 'getInvoiceInfoByRB/queryInvoiceVerTaskId',
		type: 'post',
		dataType: 'json',
		data: verParam,
		contentType: "application/json;charset=utf-8",
		beforeSend: function() {
			ver = showVerInfo();
		},
		success: function(result) {
			var data = result.data;
			console.log(data);
			if (data) {
				if (data.code == '200') {
					var msg = data.msg;
					var msgObj = JSON.parse(msg);
					if (msgObj.code == '0') {
						//然后从data.msg中取值放入到明细表中
						console.log(msgObj);
						verTimer = setInterval(function() {
							queryVerInfo(msgObj);
							console.log("获取验真信息执行一次");
						}, 3000)
					} else if (msgObj.code == '1') {
						layer.msg(msgObj.msg, {
							time: 1000,
							offset: 'auto'
						});

					}
				} else {

					layer.msg("识别异常，请重新上传！", {
						time: 1000,
						offset: 'auto'
					});
					deleteImgFileByDataId();
				}
			} else {
				layer.msg("网络错误,请重新上传！", {
					time: 1000,
					offset: 'auto'
				});
				deleteImgFileByDataId();
			}
		}
	})

}
// 查验真信息
function queryVerInfo(qryObj2) {

	$.ajax({
		url: 'getInvoiceInfoByRB/queryInvoiceVerInfoByTaskId',
		type: 'post',
		dataType: 'json',
		data: JSON.stringify({
			verTaskIdsStr: qryObj2.data,
		}),
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			var data = result.data;
			console.log(data);
			if (data) {
				if (data.code == '200') {
					var msg = data.msg;
					var msgObj = JSON.parse(msg);
					if (msgObj.code == '0') {
						clearInterval(verTimer);
						closeLoad(ver);
						//然后从data.msg中取值放入到明细表中
						layer.msg("发票验真通过！", {
							time: 1000,
							offset: 'auto'
						});
						console.log(msgObj);
					} else if (msgObj.code == '1') {
						//                         不为真，为什么不为真
						clearInterval(verTimer);
						closeLoad(ver);
						layer.msg(msgObj.msg, {
							time: 1000,
							offset: 'auto'
						});
					}
				} else {
					clearInterval(verTimer);
					closeLoad(ver);
					layer.msg("识别异常，请重新上传！", {
						time: 1000,
						offset: 'auto'
					});
					deleteImgFileByDataId();
				}
			} else {
				clearInterval(verTimer);
				closeLoad(ver);
				layer.msg("网络错误,请重新上传！", {
					time: 1000,
					offset: 'auto'
				});
				deleteImgFileByDataId();
			}

		}
	})

}
// 发票识别成功后，给表赋值，errorMsgForCustomer错误提示信息
function giveValue(msgObj, errorMsgForCustomer) {
	var successList = msgObj.data.successList;
	var errorList = msgObj.data.errorList;

	for (var i = 0; i < errorList.length; i++) {
		var $msg = "图片路径：" + errorList[i].url + ",异常原因：" + errorList[i].reason + "!\r\n"
		errorMsgForCustomer += $msg;
	}
	if (successList.length > 0) {

		// clearReimburseDetailAndPayees();
		// 		如果当前业务事项是差旅
		if ($("[name='subject_type']").val().trim() == "09") {
			for (var i = 0; i < successList.length - 1; i++) {
				addDataRow($('[name="travelInfo"]').find('i[title = "添加新的一行" ]').eq(0));
			}
			var TrLengthAfterAddRows = $("[name = 'travelInfo'] tbody ").find("tr").length;

			var ri = 0;
			for (var ri = 0; ri < TrLengthAfterAddRows; ri++) {
				if (successList[ri].markType != null && successList[ri].markType != undefined) {
					$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).attr("invoiceType", successList[ri].markType);
				} else {
					$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).attr("invoiceType", "");
				}
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='小计']").not(".no_data").find('input').val(successList[ri].totalMoney);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='地址起点']").not(".no_data").find('input').val(successList[ri].addrBegin);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='地址终点']").not(".no_data").find('input').val(successList[ri].addrEnd);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='票据类型']").not(".no_data").find('select').val(successList[ri].invoiceTypeCode);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='OCR验真信息']").not(".no_data").find('input').val(successList[ri].verObj);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='出发时间']").not(".no_data").find('input').val(successList[ri].timeBegin);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='到达时间']").not(".no_data").find('input').val(successList[ri].timeEnd);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='税金']").not(".no_data").find('input').val(successList[ri].totalTax);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='发票号']").not(".no_data").find('input').val(successList[ri].invoiceCode);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='发票对应进项税']").not(".no_data").find('input').val(successList[ri].markType);
				$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='税率']").not(".no_data").find('select').val(successList[ri].taxPercent);

			}
			//         赋值后再判断隐藏
			$("[name = 'travelInfo'] tbody ").find("tr").find("i[title='数据校验']").show();
			hideVerButton();
			for (var ri = 0; ri < TrLengthAfterAddRows; ri++) {
				$("[name='travelInfo'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='票据类型']").find("select").change();
				$("[name='travelInfo'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='小计']").find("input").change();
				var typeV = $("[name='travelInfo'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='票据类型']").find("select").val();
				if (typeV != 2) {
					$("[name = 'travelInfo'] tbody ").find("tr").eq(ri).find("td[data-label='发票号']").not(".no_data").find('input').val("");

				}
			}
		} else {
			var yuanTrLength = $("[name = 'reimburseDetail'] tbody ").find("tr").length;

			for (var i = 0; i < successList.length; i++) {
				addDataRow($('[name="reimburseDetail"]').find('i[title = "添加新的一行" ]').eq(0));
			}

			var TrLengthAfterAddRows = $("[name = 'reimburseDetail'] tbody ").find("tr").length;
			var ri = 0;

			for (var ri = 0; ri < successList.length; ri++) {
				if (successList[ri].markType != null && successList[ri].markType != undefined) {
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).attr("invoiceType", successList[ri].markType);
				} else {
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).attr("invoiceType", "");
				}
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='金 额']").not(".no_data").find('input').val(successList[ri].totalMoney);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='人民币金额']").not(".no_data").find('input').val(successList[ri].totalMoney);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='币种']").not(".no_data").find('select').val("CNY");
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='发票类型']").not(".no_data").find('select').val(successList[ri].invoiceTypeCode);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='OCR验真信息']").not(".no_data").find('input').val(successList[ri].verObj);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='发票有无']").not(".no_data").find('select').val('有');
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='发票号']").not(".no_data").find('input').val(successList[ri].invoiceCode);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='发票对应进项税']").not(".no_data").find('input').val(successList[ri].markType);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='税率']").not(".no_data").find('select').val(successList[ri].taxPercent);
				$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri + yuanTrLength).find("td[data-label='税金']").not(".no_data").find('input').val(successList[ri].totalTax);

			}
			//         赋值后再判断隐藏
			$("[name = 'reimburseDetail'] tbody ").find("tr").find("i[title='数据校验']").show();
			hideVerButton();

			for (var ri = 0; ri < TrLengthAfterAddRows; ri++) {

				var typeV = $("[name='reimburseDetail'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='发票类型']").find("select").val();
				if (typeV != 2) {
					$("[name = 'reimburseDetail'] tbody ").find("tr").eq(ri).find("td[data-label='发票号']").not(".no_data").find('input').val("");
				}
				if (TrLengthAfterAddRows - 1 == ri) {
					$("[name='reimburseDetail'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='发票类型']").find("select").change();
					$("[name='reimburseDetail'] tbody").find("tr:eq('" + ri + "')").find("td[data-label='金 额']").find("input").change();
				}

			}

		}
		layui.form.render("select");

	}
	return errorMsgForCustomer;

}

//发票识别批量给发票有无字段赋值
function setAllInvoice(tableName) {
	var dataLabel = "";
	if (tableName == 'travelInfo') {
		dataLabel = '票据类型';
	} else {
		dataLabel = '发票类型';
	}
	$("[name='" + tableName + "'] tbody").find("tr").each(function() {
		var invoiceType = $(this).find("td[data-label='" + dataLabel + "']").find("select").val();
		if (invoiceType == '1') {
			$(this).find("td[data-label='发票有无']").not(".no_data").find("select").val("无");
		} else {
			$(this).find("td[data-label='发票有无']").not(".no_data").find("select").val("有");
		}
	});
	layui.form.render("select");
}
// 隐藏数据校验的按钮,在行添加事件完成后调用
function hideVerButton() {
	var num = Date.now();
	var subjectType = $("[name='subject_type']").val();
	var tableName = "";
	tableName = "reimburseDetail";
	$("[name='" + tableName + "'] tbody").find("tr").each(function() {
		var verInfo = $(this).find("td[data-label='OCR验真信息']").not(".no_data").find('input').val();
		if (!verInfo) {
			$(this).find("td[data-label='操作']").find("i[title='数据校验']").hide();
		}
	});
	console.log("hideVerButton:" + (Date.now() - num));
}

// 隐藏数据校验的按钮,在行添加事件完成后调用
function ShowOrHideVerButton(obj) {
	var num = Date.now();
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile()) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");

	}
	var verInfo = $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='OCR验真信息']").find("input").val();
	if (!verInfo) {
		$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='操作']").find("i[title='数据校验']").hide();
	}

	console.log("ShowOrHideVerButton:" + (Date.now() - num));
}
// 每次上传发票后，赋值时，都会先清空三个表的数据
function clearReimburseDetailAndPayees() {
	// 冲销借款+差旅
	if (($("[name='writeOffLoan']").val() == 0) && ($("[name='subject_type']").val() == "09")) {
		$('[name="travelInfo"]').find("tbody").find("tr:gt(0)").remove();
		$('[name="travelInfo"]').find("tbody").find("td:gt(0):lt(20) input").val("");
		$('[name="travelInfo"]').find("tbody").find("td:gt(0) select").val("");
		$("[name='travelInfo'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
		$('[name="reimburseDetail"]').find("tbody").find("tr:gt(0)").remove();
		$('[name="reimburseDetail"]').find("tbody").find("td:gt(0):lt(19) input").val("");
		$('[name="reimburseDetail"]').find("tbody").find("td:gt(0) select").val("");
		$("[name='reimburseDetail'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
		// 冲销借款+普通
	} else if (($("[name='writeOffLoan']").val() == 0) && ($("[name='subject_type']").val() != "09")) {

		var code = $("[name='writeOffLoanTable'] tbody").find("tr:eq(" + 0 + ")").find(".value_code").val()

		if (code == "" || code == undefined) {
			$('[name="travelInfo"]').find("tbody").find("tr:gt(0)").remove();
			$('[name="travelInfo"]').find("tbody").find("td:gt(0):lt(20) input").val("");
			$('[name="travelInfo"]').find("tbody").find("td:gt(0) select").val("");
			$("[name='travelInfo'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
			$('[name="reimburseDetail"]').find("tbody").find("tr:gt(0)").remove();
			$('[name="reimburseDetail"]').find("tbody").find("td:gt(0):lt(19) input").val("");
			$('[name="reimburseDetail"]').find("tbody").find("td:gt(0) select").val("");
			$("[name='reimburseDetail'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
		} else {
			var notRemoveWriteLTrs = $('[name="reimburseDetail"]').find("tbody").find("tr");
			for (var i = 0; i < notRemoveWriteLTrs.length; i++) {
				if (notRemoveWriteLTrs.eq(i).find("td[data-label='借款单据号']").find("input").val() == "") {
					if ($('[name="reimburseDetail"]').find("tbody").find("tr").length > 1)
						notRemoveWriteLTrs.eq(i).remove();
				}
			}
			$('[name="travelInfo"]').find("tbody").find("tr:gt(0)").remove();
			$('[name="travelInfo"]').find("tbody").find("td:gt(0):lt(19) input").val("");
			$('[name="travelInfo"]').find("tbody").find("td:gt(0) select").val("");
			$("[name='travelInfo'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
		}
		//普通
	} else {
		$('[name="reimburseDetail"]').find("tbody").find("tr:gt(0)").remove();
		$('[name="reimburseDetail"]').find("tbody").find("td:gt(0):lt(19) input").val("");
		$('[name="reimburseDetail"]').find("tbody").find("td:gt(0) select").val("");
		$("[name='reimburseDetail'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
		$('[name="travelInfo"]').find("tbody").find("tr:gt(0)").remove();
		$('[name="travelInfo"]').find("tbody").find("td:gt(0):lt(20) input").val("");
		$('[name="travelInfo"]').find("tbody").find("td:gt(0) select").val("");
		$("[name='travelInfo'] tbody").find("tr").eq(0).find("td[data-label='摘要']").find("input").val("");
	}
	//切换table时清空一下收款人信息表
	$('[name="payees"]').find("tbody").find("tr:gt(0)").remove();
	// 删除下标大于0的tr
	$('[name="payees"]').find("tbody").find("td:gt(0):lt(9) input").val("");
	$('[name="payees"]').find("tbody").find("td:gt(0) select").val("");
	$("[name='payees'] tbody").find("tr").eq(0).find("td[data-label='收款人类型']").find("select").val("");

}

//如果本次识别出错，就删除已经上传的发票
function deleteImgFileByDataId() {
	var toGethref = $("#img_upload_tNfF_loc").find(".fileList").find("span");
	if (toGethref.length > 0) {

		for (var i = 0; i < toGethref.length; i++) {

			var id = toGethref[i].attributes[0];
			if (id.name == 'data-id') {
				$("#" + id.value).parent().remove();
				toGethref[i].parentElement.remove();
				toGethref[i].remove();
			}
		}
	}

}

//根据科目编码查科目名称
function querySubjectNameByCode(obj) {
	var subjectCode = $(obj).val();
	var subjectName = $(obj).find("option:selected").text();
	var num = subjectName.indexOf("-");
	subjectName = subjectName.substring(num + 1, subjectName.length);
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile()) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");

	}
	$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='科目名称']").find("input").val(subjectName);

}

//选择报销类型一键空赋值科目编码科目名称
function setSubjectByReimburseType(obj) {
	var index = $(obj).parent().parent().index();
	var reimburseType = $(obj).val();
	var subjectName = $(obj).find("option:selected").text();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		var tableName = $(tdObj).parent().parent().parent().attr("name");
	}
	if (reimburseType != "-1") {
		$.ajax({
			url: common.getPath() + '/LYFData/querySubjectDetail?subjectCode=' + reimburseType,
			type: 'get',
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				var dataArr = result.data.list;
				if (dataArr.length > 0) {
					if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
						$(obj).parent().parent().find("td[data-label='科目编码']").find("input[type='text']").val(reimburseType);
						$(obj).parent().parent().find("td[data-label='科目编码']").find(".value_id").val(reimburseType);
						$(obj).parent().parent().find("td[data-label='科目编码']").find(".value_code").val(subjectName);
						$(obj).parent().parent().find("td[data-label='科目名称']").find("input[type='text']").val(subjectName);
					} else {
						$("[name='reimburseDetail'] tbody").find("tr").each(function() {
							var subjectCode = $(this).find("td[data-label='科目编码']").find("input[type='text']").val();

							if (index == $(this).index()) {
								$(this).find("td[data-label='科目编码']").find("input[type='text']").val(dataArr[0].subjectCode);
								$(this).find("td[data-label='科目编码']").find(".value_id").val(dataArr[0].subjectCode);
								$(this).find("td[data-label='科目编码']").find(".value_code").val(dataArr[0].subjectName);
								$(this).find("td[data-label='科目名称']").find("input[type='text']").val(dataArr[0].subjectName);
							}
						});
					}
				}

			},
			error: function(result) {}
		});
	}
}
//加载凭证制单人以及凭证审核人
function getVoucherMakerAndAuditer() {
	var activityName = $("#activityName").val();
	var companyCode = $("#companyNum").val();
	if (activityName == '申请人填写') {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryVoucherMakerAndAuditer?companyCode=' + companyCode,
			type: 'get',
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
			error: function(result) {}
		});
	}
}
//财务环节显示财务审核确认部分
function changeHiddenByActivity() {
	var num = Date.now();
	var activityName = $("#activityName").val();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司1", "财务会计-子公司2", "财务经理-子公司1", "财务经理-子公司2", "财务总监-子公司", "出纳进行付款"];
	if (activityArr.indexOf(activityName) == -1) {
		formUtil.changeHiddenByName("text_Pnyz");
		formUtil.changeHiddenByName("voucherNumber");
		formUtil.changeHiddenByName("text_dTNb");
		formUtil.changeHiddenByName("text_SQf7");
		formUtil.changeHiddenByName("postingDate");
		formUtil.changeHiddenMustByName("postingDate");
		formUtil.changeHiddenByName("select_4CyS");
		$("table[title='财务审核确认']").prev().hide();
	} else {
		formUtil.changeShowByName("text_Pnyz");
		formUtil.changeShowByName("voucherNumber");
		formUtil.changeShowByName("text_dTNb");
		formUtil.changeShowByName("text_SQf7");
		formUtil.changeShowByName("postingDate");
		formUtil.changeShowMustByName("postingDate");
		formUtil.changeShowByName("select_4CyS");
		$("table[title='财务审核确认']").prev().show();

		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'reimburseDetail',
			colNum: c13
		});
	}
	console.log("changeHiddenByActivity:" + (Date.now() - num));
}

//单行税金=（金额/（1+税率））*税率
function getTaxesByAmountAndTaxRate(obj) {
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");

		var taxeRate = parseFloat($("#tr_table").find("td[data-label='税率']").find("input").val().replace(/[^\d.]/g, ''))
		taxeRate = isNaN(taxeRate) ? 0 : taxeRate;
		var amount = 0;
		if (tableName == 'reimburseDetail') {
			amount = parseFloat($("#tr_table").find("td[data-label='金 额']").find("input").val());
		} else if (tableName == 'travelInfo') {}
		amount = isNaN(amount) ? 0 : amount;
		var taxes = (amount / (1 + taxeRate / 100)) * (taxeRate / 100)
		$("#tr_table").find("td[data-label='税金']").find("input").val(taxes);
		checkAndfomartNumber($("#tr_table").find("td[data-label='税金']").find("input"), 16, 2);
	} else {

		var taxesVal = $("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='税金']").find("input").val();
		var taxeRate = parseFloat($("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='税率']").find("select").find("option:selected").text().replace(/[^\d.]/g, ''));
		taxeRate = isNaN(taxeRate) ? 0 : taxeRate;
		var amount = 0;
		if (tableName == 'reimburseDetail') {
			amount = parseFloat($("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input").val());
		}
		amount = isNaN(amount) ? 0 : amount;
		var taxes = (amount / (1 + taxeRate / 100)) * (taxeRate / 100)
		$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='税金']").find("input").val(taxes);
		checkAndfomartNumber($("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='税金']").find("input"), 16, 2);
	}
}

//业务名称如果对应BM01、BM011则显示车贴年月必填项
function changeSubsidyDateShowOrHide() {
	var num = Date.now();
	// var bussinessName = $("[name='bussiness_name']").val();
	var amount = 0;
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var costAttribution = $(this).find("td[data-label='收款人类型']").find("select").val();
		var index = $(this).index();
		// 12报销月份
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c12,
			rowNum: index
		});
		formUtil.tableFun.changeNotEditByTableParam({
			name: 'reimburseDetail',
			colNum: c12,
			rowNum: index
		});
	});
	formUtil.tableFun.chooseModelHiddenByTableParam({
		name: 'reimburseDetail',
		colNum: c12
	});
	console.log("changeSubsidyDateShowOrHide:" + (Date.now() - num));
}

//检验明细成本中心是否对应同一公司
function judgeSameCompanyOrNot() {
	var insInitUser = $("#userId").val();
	var total = parseFloat($("[name='total']").val());
	var companyNum = $("#companyNum").val();
	var costcenterArr = [];
	var companyArr = [];
	var flag = false;
	var tableName = "";
	tableName = "reimburseDetail";
	$("[name='" + tableName + "'] tbody").find("tr").each(function() {
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		costcenterArr.push(costCenter);
	});

	$.ajax({
		url: common.getPath() + '/LYFSynRB/selectSysCostCenterParByIds',
		type: 'post',
		data: JSON.stringify(costcenterArr),
		async: false,
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (result.length > 0) {
				for (var i = 0; i < result.length; i++) {
					if (companyArr.indexOf(result[i].bukrs) == -1) {
						companyArr.push(result[i].bukrs);
					}
				}
				if (companyArr.length > 1) {

					layer.open({
						content: "报销时成本中心必须归属于同一公司,不能跨公司报销",
						btn: 'OK'
					});
					flag = false;
				} else {
					if (companyArr[0] == "1000") {
						$("[name='headOrSub']").val("1");
					} else
						$("[name='headOrSub']").val("0");
					$("[name='companyCode']").val(companyArr[0]);
					flag = true;
				}
			}
		},
		error: function(result) {}
	});
	return flag;
}

//如果实际付款金额为0则提交时清空掉排序编号,室外差旅时清空掉费用明细数据
function cleanSortValue() {
	var activityName = $("#activityName").val();
	var total = parseFloat($("[name='total']").val());
	var amount = 0;
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var costAttribute = $(this).find("td[data-label='收款人类型']").find("select").val();
		var loanNo = $(this).find("td[data-label='借款单据号']").find("input").val();
		if (costAttribute == '6' && !loanNo) {
			amount++;
		}
	});
	if (total == 0 || amount > 0) {
		$('[name="payees"]').find("tbody").find("td:lt(9) input").val("");
		$('[name="payees"]').find("tbody").find("td:lt(9) select").val("");

		// formUtil.tableFun.clearTargetObjValueByParam({
		// name: 'payees'
		// });
	}
	formUtil.tableFun.clearTargetObjValueByParam({
		name: 'travelInfo'
	});
	layui.form.render("select");
}

//根据项目编号获取项目信息
function getProjectInfoByProjectNo(obj) {
	var projectNumber = $(obj).val();
	$.ajax({
		url: common.getPath() + '/LYFSynRB/queryProjectInfo?projectNumber=' + projectNumber,
		type: 'get',
		contentType: "application/json;charset=utf-8",
		success: function(result) {
			if (result.code == "0") {
				$("[name='text_NT5r']").val(result.data.projectName);
				if ((result.data.projectLeader != null && result.data.projectLeader != undefined) && (result.data.projectLeaderNo != null && result.data.projectLeaderNo != undefined)) {
					$("[name='text_drR4']").val(result.data.projectLeader + "-" + result.data.projectLeaderNo);
				} else {
					$("[name='text_drR4']").val("");
				}

				$("[name='projectManager']").val(result.data.projectLeaderNo);
				$("[name='projectDirector']").val(result.data.projectLeaderNo);
			}
		},
		error: function(result) {}
	});
}

//切换业务名称清空成本中心及名称
function cleanCostCenterAndNameByBussinessName() {}

//根据成本中心、系统时间、业务名称查询是否有预算
function getBudget(obj) {}

//批量获取成本中心预算
function getBudget1() {
	var bussinessName = $("[name='bussiness_name']").val();
	//如果是BM011类型判断去获取定额交通补贴金额
	if (bussinessName == 'BM011') {
		getAllTrafficSubsidy();
		return true;
	}
	if (bussinessName == 'RL06') {

		return true;
	}
	var month = (new Date()).getMonth() + 1;
	var subjectType = $("[name='subject_type']").val();
	var costCenter = [];
	var itemCode = $("[name='itemCode']").val();
	if (itemCode == null || itemCode == undefined) {
		itemCode = "";
	}
	var tableName = "";
	var flag = false;

	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var costCenterCode = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		if (costCenterCode) {
			costCenter.push(costCenterCode);
		}
	});
	tableName = "reimburseDetail";
	if (costCenter.length > 0) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/qryBudgetByCostCenter?costCenter=' + costCenter.toString() + "&month=" + month + "&tbpmCode=" + bussinessName + "&itemCode=" + itemCode,
			type: 'get',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (JSON.stringify(result.data) == '[]') {
					layer.alert("成本中心" + costCenter.toString() + "本月没有对应业务预算,请重新确认");
					$("[name='" + tableName + "'] tbody").find("tr").each(function() {
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
						return e.itemCode == null;
					});
				}
				if (dataArr.length > 0) {
					$("[name='" + tableName + "'] tbody").find("tr").each(function() {
						var costCenterNo = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
						var index = $(this).index();
						for (var i = 0; i < dataArr.length; i++) {
							if (costCenterNo == dataArr[i].costCenter) {
								$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心预算']").not(".no_data").find("input").val(dataArr[i].availableAmount);
								$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='预算控制模式']").not(".no_data").find("input").val(dataArr[i].controlType);
								for (var j = 0; j < costCenter.length; j++) {
									costCenter.remove(costCenterNo);
								}
							}
						}

					});
				}
				if (costCenter.length > 0) {
					layer.alert("成本中心" + costCenter.toString() + "该业务当月没有预算");
					$("[name='" + tableName + "'] tbody").find("tr").each(function() {
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
	} else
		return true;
}

//判断填写的金额是否超过预算
function judgeIsOverBudget() {
	var subjectType = $("[name='subject_type']").val();
	var writeOffLoan = $("[name='writeOffLoan']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var sysDate = new Date();
	var flag = false;
	//差旅报销时
	if (subjectType == '09' && writeOffLoan == '1') {} else if (subjectType == '09' && writeOffLoan == '0') {//差旅冲销情况下额外报销成本中心预算校验取第一行差旅信息中成本中心预算
	} else {
		//普通报销或冲销时找没有借款单号的明细进行校验(无借款单号=报销明细)
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var transSubsidyAmount = 0;
			var amount = 0;
			var costAttribution = $(this).find("td[data-label='收款人类型']").find("select").val();
			var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
			var controlType = $(this).find("td[data-label='预算控制模式']").find("input").val();
			var budget = parseFloat($(this).find("td[data-label='成本中心预算']").find("input").val());
			var transSubsidy = parseFloat($(this).find("td[data-label='车贴金额']").find("input").val());
			var transDate1 = $(this).find("td[data-label='报销月份']").find("input").val();
			budget = isNaN(budget) ? 0 : budget;
			transSubsidy = isNaN(transSubsidy) ? 0 : transSubsidy;
			$("[name='reimburseDetail'] tbody").find("tr").each(function() {
				var loanNumber = $(this).find("td[data-label='借款单据号']").find("input").val();
				var costCenter1 = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
				var costAttribution1 = $(this).find("td[data-label='收款人类型']").find("select").val();
				var total = parseFloat($(this).find("td[data-label='金 额']").find("input").val());
				var transDate2 = $(this).find("td[data-label='报销月份']").find("input").val();
				if (!loanNumber) {
					total = isNaN(total) ? 0 : total;
					if (costCenter == costCenter1) {
						amount += total;
					}
					if (costAttribution == '3' && costAttribution == costAttribution1 && bussinessName == 'BM011' && transDate1 == transDate2) {
						transSubsidyAmount += total;
					}
				}

			});
			if (bussinessName == 'BM011' && costAttribution == '3') {} else {
				if (controlType == '不控制') {
					flag = true;
				} else {
					if (amount <= budget) {
						flag = true;
					} else {
						flag = false;
						layer.alert(costCenter + "成本中心预算金额不足,报销明细金额超过该成本中心预算");
						return flag;
					}
				}
			}

		});
	}

	return flag;
}

//根据转账金额设置汇路值
function setSinkRoadByTotal(obj) {
	var amount = parseFloat($(obj).val());
	var index = $(obj).parent().parent().index();
	if (amount < 50000) {
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").find("select").val("6");
	} else {
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='汇路']").find("select").val("7");
	}
	layui.form.render();
}

//根据工号职级查询对应的餐补
function getMealAllowanceByUserId(obj) {
	var userId = $(obj).parent().parent().find("td[data-label='工号']").find("input[type='text']").val();
	//根据员工职级查询对应餐补
	if (userId) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/qryTravelInfoByPositionLevel?userUid=' + userId,
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == '0') {
					layer.alert("工号:" + userId + "对应职级餐补,早餐补贴每日:" + result.data.breakfastMoney + ",中餐补贴每日:" + result.data.lunchMoney + ",晚餐补贴每日:" + result.data.dinnerMoney);
				} else {
					layer.alert(result.msg);
					formUtil.tableFun.clearTargetObjValueByParam({
						name: 'travelInfo',
						colNum: index
					});
				}
			},
			error: function(result) {}
		});
	}
}

//票据类型控制发票号显示隐藏
function changeShowOrHideByBillType() {
	var num = Date.now();
	console.log("changeShowOrHideByBillType:" + (Date.now() - num));
}

//根据发起人查询用户信用积分判定先付后审
function queryUserReimburseScore() {
	var userId = $("#userId").val();
	var activityName = $("#activityName").val();
	var pageType = $("#pageType").val();
	if (activityName == '申请人填写' && pageType == 'startProcess') {

		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryReburseAmountInMonth?initUser=' + userId,
			type: 'post',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.code == '0') {
					var total = $("[name='total']").val();
					var insInitUserCredit = $("#insInitUserCredit").val();
					if (result.data) {
						var totalReb = 0;
						var amount = 0;
						for (var i = 0; i < result.data.length; i++) {
							amount = result.data[i].reimburseAmount;
							if (isNaN(amount)) {
								amount = 0;
							}
							totalReb += amount;
						}
						if (total <= 2000 && insInitUserCredit >= 200 && totalReb <= 20000) {

							$("[name='isPayBeforeTrail']").val("2");
						} else {
							$("[name='isPayBeforeTrail']").val("0");
						}
					}

				} else {
					$("[name='isPayBeforeTrail']").val("0");
				}
			},
			error: function(result) {}
		});

	}

}

//税率控制分配
function setDistributeByTaxes(obj) {
	var taxes = $(obj).val();
	var index = $(obj).parent().parent().index();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		taxes = $("#tr_table").find("td[data-label='税率']").find("select").val()
		$("#tr_table").find("td[data-label='分配']").find("select").val(taxes);

	}
	$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='分配']").find("select").val(taxes);
	layui.form.render();
}

//显示或隐藏图片上传组件，必须先选业务事项
function hideOrShowImgUpload() {}

//根据收款人类型选择数据重写选值组件打开新的自定义页面
common.chooseDicDataPath = function(id, dicUid, dicCode) {
	var costAttribute = $("#" + id).parent().prev().find("select").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var tdName = $("#" + id).parent().attr("data-label");

	if (tdName == '科目编码') {
		return common.getPath() + "/LYFData/querySubjectCodeByBussinessName?elementId=" + id + "&tbpmCode=" + bussinessName;
	} else {
		if (costAttribute == "4" || costAttribute == undefined) {
			//return common.getPath() + "/sysUser/select_personnel?id=" + id.id +"&isSingle=true" ;
			return common.getPath() + "/LYFData/queryUserInfo?elementId=" + id + "&isSingle=true";
		} else
			return common.getPath() + "/LYFData/queryAllLifnrOrWerks?elementId=" + id;
	}

}
function setPagePathForMobile(obj) {
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		var type = $("#tr_table").find("td[data-label='收款人类型']").find("select").val();
		var index = $(tdObj).parent().index();
		if (type == "1") {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseWerks(this)");
			$("[name = 'reimburseDetail'] tbody").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseWerks(this)");
		} else if (type == "2") {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseLifnr(this)");
			$("[name = 'reimburseDetail'] tbody").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseLifnr(this)");

		} else if (type == "4") {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseUser(this);");
			$("[name = 'reimburseDetail'] tbody").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseUser(this);");
		} else {
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "");
			$("[name = 'reimburseDetail'] tbody").find("tr").eq(index).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "");
		}

	} else {
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var type = $(this).find("td[data-label='收款人类型']").find("select").val();
			if (type == "1") {
				$(this).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseWerks(this)");
			} else if (type == "2") {
				$(this).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseLifnr(this)");

			} else if (type == "4") {
				$(this).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "mobileRBUtil.chooseUser(this);");
			} else {
				$(this).find("td[data-label='(门店/供应商/个人)编码']").find("i[title!='delete_input_value']").attr("onclick", "");
			}
		});
	}
}

common.chooseDicData = function(id, dicUid, dicCode) {
	var tdName = $("#" + id).parent().attr("data-label");
	var title = "";
	if (tdName == '(门店/供应商/个人)编码') {
		title = $("#" + id).parent().prev().find("select").find("option:selected").text() + "信息";
		if (title == '他人信息') {
			title = "员工信息";
		}
	} else if (tdName == '科目编码') {
		title = "科目信息";
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
//选择部门的路径重构公用方法打开自定义页面
common.chooseDepartPath = function(id) {
	return common.getPath() + "/LYFData/queryAllCostCenter?elementId=" + id;
}

common.chooseDepart = function(elementId) {
	var index = layer.open({
		type: 2,
		title: '选择部门或成本中心',
		shadeClose: true,
		shade: 0.3,
		area: ['600px', '500px'],
		content: common.chooseDepartPath(elementId),
		success: function(layero, lockIndex) {
			var body = layer.getChildFrame('body', lockIndex);
			body.find('button#addDepart').on('click', function() {
				layer.close(lockIndex);
			});
			body.find('button#close').on('click', function() {
				layer.close(lockIndex);
			});
			body.find('button#costCenterSure').on('click', function() {
				layer.close(lockIndex);
			});
			body.find('button#costCenterClose').on('click', function() {
				layer.close(lockIndex);
			});
		}
	});
}

//提交生成对应的报销单号
function createRBNoInForm() {
	var pageType = $("#pageType").val();
	var fourParent = parent.parent.parent.parent;
	var companyCode = $("[name='companyCode']").val();
	var subclassCode = $("[name='bussiness_name']").val();
	var mongoKey = $("[name='mongoKey']").val();
	var processType = $("[name='processType']").val();
	var headOrSub = $("[name='headOrSub']").val();
	var isCostAccountA = $("[name='isCostAccountA']").val();
	var isCostAccountB = $("[name='isCostAccountB']").val();
	var isCostAccountC = $("[name='isCostAccountC']").val();
	var isFinancialAccount_Head = $("[name='isFinancialAccount_Head']").val();
	var isFinancialAccount_HeadB = $("[name='isFinancialAccount_HeadB']").val();
	var isFinancialAccount_HeadC = $("[name='isFinancialAccount_HeadC']").val();
	var isSettleManager_head = $("[name='isSettleManager_head']").val();
	var isFinancialManager_Head = $("[name='isFinancialManager_Head']").val();
	var isCFO_Head = $("[name='isCFO_Head']").val();
	var isFinancialAccount_Sub = $("[name='isFinancialAccount_Sub']").val();
	var financialAccountSubB = $("[name='financialAccountSubB']").val();
	var isFinancialManager_Sub = $("[name='isFinancialManager_Sub']").val();
	var financialManagerSubB = $("[name='financialManagerSubB']").val();
	var isCFO_Sub = $("[name='isCFO_Sub']").val();
	var reimburseNumber = $("[name='reimburseNumber']").val();
	var formData = {
		"companyCode": companyCode,
		"subclassCode": subclassCode,
		"mongoKey": mongoKey,
		"processType": processType,
		"headOrSub": headOrSub,
		"isCostAccountA": isCostAccountA,
		"isCostAccountB": isCostAccountB,
		"isCostAccountC": isCostAccountC,
		"isFinancialAccount_Head": isFinancialAccount_Head,
		"isFinancialAccount_HeadB": isFinancialAccount_HeadB,
		"isFinancialAccount_HeadC": isFinancialAccount_HeadC,
		"isSettleManager_head": isSettleManager_head,
		"isFinancialManager_Head": isFinancialManager_Head,
		"isCFO_Head": isCFO_Head,
		"isFinancialAccount_Sub": isFinancialAccount_Sub,
		"financialAccountSubB": financialAccountSubB,
		"isFinancialManager_Sub": isFinancialManager_Sub,
		"financialAccountSubB": financialAccountSubB,
		"isCFO_Sub": isCFO_Sub
	};
	if (pageType == 'startProcess' || !reimburseNumber) {
		$.ajax({
			url: common.getPath() + '/LYFData/createRBNoInForm',
			type: 'post',
			data: JSON.stringify(formData),
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
			error: function(result) {}
		});
	}
}

//合同信息按钮打开合同信息页面
function openContractInfo() {
	var contractNo = $("[name='text_473H']").val();
	if (contractNo) {
		window.open("http://172.19.55.16:9080/FinancialArchive/Servlet/ExternalApiServlet?page=external_read_contractfile&contractNo=" + contractNo + "");
	} else
		layer.alert("请先填写合同编码");
}

//归还金额填写时 归还单号改必填项
function showOrHideMustByRepayment(obj) {
	var index = $(obj).parent().parent().index();
	var repayment = parseFloat($(obj).val());
	repayment = isNaN(repayment) ? 0 : repayment;
	if (repayment == 0) {
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'writeOffLoanTable',
			colNum: 3
		});
	} else
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'writeOffLoanTable',
			colNum: 3
		});
}

//校验发票号是否存在
function judgeInvoiceNumberExist(obj) {
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var invoiceNumber = $(obj).val();
	var invoiceArr = invoiceNumber.split(";");
	invoiceArr = invoiceArr.filter(function(s) {
		return s && s.trim();
	});
	// invoiceArr.splice(-1, 1);
	if (invoiceArr.length > 1) {
		invoiceNumber = ";" + invoiceNumber;
		if (invoiceNumber.lastIndexOf(";") != (invoiceNumber.length - 1)) {
			invoiceNumber = invoiceNumber + ";";
		}
	} else {
		invoiceNumber = invoiceNumber.replace(/;/g, "");
	}
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");

	}
	var index = invoiceNumber.lastIndexOf(";");
	var dataArr = [];
	if ((index == (invoiceNumber.length - 1) && invoiceArr.length > 1) || invoiceArr.length == 1) {
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryInvoiceNumberExist?invoiceNumber=' + invoiceNumber,
			type: 'post',
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.data.length > 0) {
					for (var i = 0; i < result.data.length; i++) {
						if (dataArr.indexOf(result.data[i]) == -1) {
							dataArr.push(result.data[i]);
						}
					}
					layer.alert("发票号" + dataArr.toString() + "已存在,请重新确认");
					var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
					if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {

						$(obj).val("");

					}
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='发票号']").find("input").val("");
				}
			},
			error: function(result) {}
		});
	} else {
		layer.alert("多张发票号请以;结尾,否则不能识别,请重新确认");
		$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='发票号']").not(".no_data").find("input").val("");
		var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
		if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
			$(obj).parent().parent().find("td[data-label='发票号']").val("");
			$(obj).val("");
		}
	}
}

//业务事项对应门店时显示费用归属门店编码列
function changeWerkColumnShowOrHide() {
	var num = Date.now();
	var isBelongToStore = $("[name='isBelongToStore']").val();
	var bussinessName = $("[name='bussinessName']").val();
	if (isBelongToStore == '0') {
		formUtil.tableFun.chooseModelShowByTableParam({
			name: 'reimburseDetail',
			colNum: c11
		});
		formUtil.tableFun.changeShowMustByTableParam({
			name: 'reimburseDetail',
			colNum: c11
		});
		if (bussinessName == 'MDRC08') {
			$("[name='reimburseDetail'] tbody").find("tr td[data-label='门店费用归属编码']").find("i").show();
		}
	} else {
		formUtil.tableFun.chooseModelHiddenByTableParam({
			name: 'reimburseDetail',
			colNum: c11
		});
		formUtil.tableFun.changeHiddenMustByTableParam({
			name: 'reimburseDetail',
			colNum: c11
		});
	}
	console.log("changeWerkColumnShowOrHide:" + (Date.now() - num));
}

//校验门店是否存在
function judgeWerkExistByCode(obj) {
	var werk = $(obj).val();
	var index = $(obj).parent().parent().index();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
	}
	$.ajax({
		url: common.getPath() + '/rbQuerySAPInfo/getWerkAndLinInfo',
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
				$(obj).parent().parent().find("td[data-label='门店费用归属编码']").find("input").val("");
				return;
			}
			var storeName = data[0].name1;
			var trIndex = storeName.indexOf("市");
			if (trIndex != -1) {
				storeName = storeName.substring(trIndex + 1, storeName.length);
			}
			$(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find('.value_id').val(storeName);
			$(obj).parent().parent().find("td[data-label='门店名称']").find("input").val(result.data[0].name1);
			queryStoreDetailForMobile(obj);
			layui.form.render();

		}
	});

}

//批量获取本人对应月份的交通补贴额度
//因为选中月份时已经查询对应月份在定额交通补贴信息中是否已经存在,这里提交时再查一遍必定存在
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
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
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
			contentType: 'application/json;charset=UTF-8',
			success: function(result) {
				if (result.data.length == 0) {
					layer.msg("该员工对应月份" + transSubsidyDateArr.toString() + "没有对应交通补贴,请重新确认", {
						icon: 2
					});
					$("[name = 'reimburseDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='报销月份']").not(".no_data").find("input").val("");
					$("[name = 'reimburseDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val("");
					return;

				}
				$("[name='reimburseDetail'] tbody").find("tr").each(function() {
					var reimbMonth = $(this).find("td[data-label='报销月份']").find("input").val();
					var index = $(this).index();
					reimbMonth = reimbMonth.replace("-", "");
					for (var i = 0; i < result.data.length; i++) {
						if (reimbMonth == result.data[i].month) {
							$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val(result.data[i].availableQuota);
						}
					}
				});
			}
		});
	}
}

//获取某月对应本人的交通补贴额度
//获取某月对应本人的交通补贴额度
function getTrafficSubsidy(obj) {
	var index = $(obj).parent().parent().index();
	var code = $(obj).parent().parent().find("td[data-label='(门店/供应商/个人)编码']").find("input").val();
	var bussinessName = $("[name='bussiness_name']").val();
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
					$("[name = 'reimburseDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='报销月份']").not(".no_data").find("input").val("");
					$("[name = 'reimburseDetail'] tbody ").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val("");
					return;

				}
				var useQuota = isNaN(parseFloat(result.data[0].useQuota)) ? 0 : parseFloat(result.data[0].useQuota);
				var availableQuota = isNaN(parseFloat(result.data[0].availableQuota)) ? 0 : parseFloat(result.data[0].availableQuota);
				$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='车贴金额']").not(".no_data").find("input").val(availableQuota);
				layer.alert("该类型报销请于每月11日以后提交。</br>当前月份已用额度：" + useQuota + "</br>" + "当前月份可使用额度：" + availableQuota);

				layui.form.render("select");

			}
		});
	}

}

//移除费用明细表中编码 成本中心只读属性,使其可手动输入搜索
function setPropertiesByType(obj) {
	var index = $(obj).parent().parent().index();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		$("#tr_table").find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").removeAttr("readonly");
		$("#tr_table").find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
	} else {
		$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").removeAttr("readonly");
		$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input[type='text']").removeAttr("readonly");
	}

}

//批量查询成本中心是否存在
function judgeAllCostCenterExist() {
	var costCenterArr = [];
	var errorCostCenterArr = [];
	var subjectType = $("[name='subject_type']").val();
	var tableName = "";
	if (subjectType == '09')
		tableName = "travelInfo";
	else
		tableName = "reimburseDetail";
	$("[name='" + tableName + "'] tbody").find("tr").each(function() {
		var costCenter = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
		if (costCenterArr.indexOf(costCenter) == -1) {
			costCenterArr.push(costCenter);
		}
	});
	if (costCenterArr) {
		$.ajax({
			url: common.getPath() + '/LYFData/selectCostCenterAndDepartmentByCostCenterList?costCenterArr=' + costCenterArr,
			type: 'post',
			dataType: 'json',
			contentType: 'application/json;charset=UTF-8',
			async: false,
			success: function(result) {
				if (result.status == 0) {
					var dataArr = result.data;
					var repeatArr = [];
					var errorIndex = [];
					if (dataArr.length > 1) {
						for (var i = 0; i < dataArr.length; i++) {
							var costCenter1 = dataArr[i].kostl;
							var departmentId = dataArr[i].departmentId;
							repeatArr.push(costCenter1);
							if (!departmentId) {
								dataArr.remove(dataArr[i]);
								if (errorCostCenterArr.indexOf(costCenter1) == -1) {
									errorCostCenterArr.push(costCenter1);
								}
							}
						}
						repeatArr = GetRepeatFwxmmc(repeatArr);
						for (var i = 0; i < repeatArr.length; i++) {
							if (errorCostCenterArr.indexOf(repeatArr[i]) == -1) {
								errorCostCenterArr.push(repeatArr[i]);
							}
						}
						if (errorCostCenterArr.length > 0) {
							layer.alert("成本中心:" + errorCostCenterArr.toString() + "对应多个部门或未对应到部门,请找人事协调");
							$("[name='" + tableName + "'] tbody").find("tr").each(function() {
								var costCenterCode = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
								if (errorCostCenterArr.indexOf(costCenterCode) != -1) {
									$(this).find("td[data-label='成本中心代码']").find("input").val("");
									$(this).find("td[data-label='成本中心名称']").find("input").val("");
								}
							});
						}
					} else if (!dataArr[0].departmentId) {
						layer.alert("成本中心:" + costCenterArr.toString() + "没有对应到部门,请找人事协调");
						$("[name='" + tableName + "'] tbody").find("tr:eq(0)").find("td[data-label='成本中心代码']").find("input").val("");
						$("[name='" + tableName + "'] tbody").find("tr:eq(0)").find("td[data-label='成本中心名称']").find("input").val("");
					}
					if (dataArr.length > 0) {
						$("[name='" + tableName + "'] tbody").find("tr").each(function() {
							var costCenterNo = $(this).find("td[data-label='成本中心代码']").find("input[type='text']").val();
							if (costCenterNo) {
								for (var i = 0; i < dataArr.length; i++) {
									if (costCenterNo == dataArr[i].kostl) {
										$(this).find("td[data-label='成本中心代码']").find("input[type='text']").val(dataArr[i].kostl);
										$(this).find("td[data-label='成本中心代码']").find("input[type='hidden']").val(dataArr[i].departmentId);
										$(this).find("td[data-label='成本中心名称']").find("input").val(dataArr[i].cstctrShortText);

									}
								}
							}
						});
					}

				} else {
					layer.alert(result.msg);
					$("[name='" + tableName + "'] tbody").find("tr").each(function() {
						$(this).find("td[data-label='成本中心代码']").find("input").val("");
						$(this).find("td[data-label='成本中心名称']").find("input").val("");
					});
				}
			},
			error: function(result) {}
		});
	}
}

//提供手输方法查询成本中心是否存在
function judgeCostCenterExist(obj) {
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var index = $(obj).parent().parent().index();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile()) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");

	}
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
					var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
					if (common.isMobile()) {
						$("#tr_table").find("td[data-label='成本中心代码']").find("input").val("");
						$("#tr_table").find("td[data-label='成本中心名称']").find("input").val("");
					} else {
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
					}

				} else {
					var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

					if (common.isMobile()) {
						$("#tr_table").find("td[data-label='成本中心名称']").find("input").val(result.data[0].cstctrShortText);
						$("#tr_table").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(result.data[0].kostl);
						$("#tr_table").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(result.data[0].departmentId);
					} else {
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='text']").val(result.data[0].kostl);
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").not(".no_data").find("input[type='hidden']").val(result.data[0].departmentId);
						$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").not(".no_data").find("input").val(result.data[0].cstctrShortText);
					}

				}
			} else {
				layer.alert(result.msg);
				var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

				if (common.isMobile()) {
					$("#tr_table").find("td[data-label='成本中心代码']").find("input").val("");
					$("#tr_table").find("td[data-label='成本中心名称']").find("input").val("");
				} else {
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心代码']").find("input").val("");
					$("[name='" + tableName + "'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心名称']").find("input").val("");
				}

			}
		},
		error: function(result) {}
	});
}

//收款人类型改变(本人-现金)情况下影响
function changeByCostAttribute(obj) {
	var costAttribution = $(obj).val();
	var index = $(obj).parent().parent().index();
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
	}
	var sortNo = $(obj).parent().parent().find("td[data-label='排序']").find("input").val();
	var payeeLength = $("[name='payees'] tbody").find("tr").length;
	if (costAttribution == '6') {
		$("[name='payees'] tbody").find("tr").each(function() {
			var sortNo1 = $(this).find("td[data-label='排序']").find("input").val();
			if (payeeLength > 1) {
				if (sortNo1 == sortNo) {
					$(this).remove();
				}
			} else {
				formUtil.tableFun.clearTargetObjValueByParam({
					name: 'payees',
					rowNum: $(this).index()
				});
				$(this).find("td[data-label='排序']").not(".no_data").find("input").val(sortNo);
			}
		});
	} else {
		rowChangeEvent(obj);
	}
}
//根据成本中心编码查询成本中心下的所有项目并放到下拉框中
function queryCenterProject(obj) {
	//成本中心编码，这个成本中心编码怎么来，还需要问
	//判断是否项目报销
	var val = $(obj).val();

	if (val == "0") {
		var costCenter = $("[name='costCenterCode']").val();
		if (costCenter) {
			$.ajax({
				url: common.getPath() + '/LYFSynRB/queryCenterProject?costCenter=' + costCenter,
				type: 'get',
				contentType: "application/json;charset=utf-8",
				success: function(result) {
					if (result.data) {
						if (result.data.length > 0) {
							var data = result.data;
							//赋值之前先移除
							$("[name='itemCode']").parent().find("option :gt(0)").remove();
							for (var i = 0; i < data.length; i++) {
								$("[name='itemCode']").append("<option value=" + data[i] + ">" + data[i] + "</option>");
							}
							common.initSelect();
						} else {
							layer.msg(costCenter + " 当前成本中心下无项目信息");
							$("[name='select_BJ5k']").val("1");
							$("[name='select_BJ5k']").change();
						}

					}

					form.render();
				}
			})
		} else {
			layer.msg("发起人成本中心代码找不到", {
				icon: 2
			});
			$("[name='select_BJ5k']").val("1");
			$("[name='select_BJ5k']").change();
		}
	}

}
//根据合同编号查询合同信息
function queryConstractInfo(obj) {
	var val = $("[name='select_YNYP']").val();
	if (val == "0") {
		//合同编码
		var contractNo = $("[name='text_473H']").val();
		$.ajax({
			url: common.getPath() + '/LYFSynRB/queryConstractInfo?contractNo=' + contractNo,
			type: 'get',
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.view == undefined || result.view == "") {
					layer.msg("合同信息不存在", {
						icon: 2
					});
					return;
				}
				//合同名称
				$("[name='text_daXD']").val(result.view.contractName);
				//首尾款
				$("[name='number_Jb5c']").val(result.view.contractName);
				//总标的金额
				$("[name='number_ZAya']").val(result.view.amount);
				//已支付金额
				$("[name='number_eWza']").val(result.view.paidAmount);
				//待支付金额
				$("[name='number_dntP']").val(result.view.unPaidAmount);
				//本次拟定支付金额
				$("[name='text_2iFZ']").val(result.view.paidAmount);
				//供应商编号
				$("[name='text_bG8E']").val(result.view.submitPerson.applicantNo);
				//供应商名称
				$("[name='text_MjEF']").val(result.view.submitPerson.applicantName);
				form.render();
			}
		})
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

//窗体加载时，设置发起人成本中心代码
function setCostCenterCodeToHideInput() {

	var departmendId = $("#departNo").val();
	if (departmendId) {

		$.ajax({
			url: common.getPath() + '/LYFData/queryDepartAndCostCenterByDepartmentId?departmentId=' + departmendId,
			type: 'get',
			async: false,
			contentType: "application/json;charset=utf-8",
			success: function(result) {
				if (result.data != null && result.status == "0") {
					if (result.data.kostl) {
						$("[name='costCenterCode']").val(result.data.kostl);
					}
				} else {
					layer.alert("该部门没有对应的成本中心," + result.msg);
					return;
				}
			},
			error: function(result) {}
		});
	}
}

//设置本人现金隐藏标识
function setIdentifierByReimb() {
	var amount = 0;
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var costAttribution = $(this).find("td[data-label='收款人类型']").find("select").val();
		if (costAttribution == '6') {
			amount++;
		}
	});
	if (amount > 0)
		$("[name='cashPayment']").val("1");
	else
		$("[name='cashPayment']").val("");
}

//差旅早中晚餐补跟实际金额进行比对
//金 额(天数) 在天数*(早+中+晚补贴)范围内即可  超过给提示
function judgeMoneyIsOverByAllowance(obj) {}

//提示各等级城市
function pointOutCityLevels() {

	var firstTierCityArr = ["北京", "天津", "沈阳", "大连", "哈尔滨", "济南", "青岛", "南京", "上海", "杭州", "武汉", "广州", "深圳", "香港", "澳门", "重庆", "成都", "西安"];
	var secondTierCityArr = ["石家庄", "长春", "呼和浩特", "太原", "郑州", "合肥", "无锡", "苏州", "宁波", "福州", "厦门", "南昌", "长沙", "汕头", "珠海", "海口", "三亚", "南宁", "贵阳", "昆明", "拉萨", "兰州", "西宁", "银川", "乌鲁木齐"];
	var thirdTierCityArr = ["唐山", "秦皇岛", "淄博", "烟台", "威海", "徐州", "连云港", "南通", "镇江", "常州", "嘉兴", "金华", "绍兴", "台州", "温州", "泉州", "东莞", "惠州", "佛山", "中山", "江门", "湛江", "北海", "桂林"];
	var fourthTierCityArr = ["邯郸", "鞍山", "抚顺", "吉林市", "齐齐哈尔", "大庆", "包头", "大同", "洛阳", "潍坊", "芜湖", "扬州", "湖州", "舟山", "漳州", "株洲", "潮州", "柳州"];
	var fifthTierCityArr = ["承德", "保定", "丹东", "开封", "安阳", "泰安", "日照", "蚌埠", "黄山", "泰州", "莆田", "南平", "九江", "宜昌", "襄樊", "岳阳", "肇庆", "乐山", "绵阳", "丽江", "延安", "咸阳", "宝鸡"];
	layer.alert("一级城市:北京、天津、沈阳、大连、哈尔滨、济南、青岛、南京、上海、杭州、武汉、广州、深圳、香港、澳门、重庆、成都、西安</br>二级城市:石家庄、长春、呼和浩特、太原、郑州、合肥、无锡、苏州、宁波、福州、厦门、南昌、长沙、汕头、珠海、海口、三亚、南宁、贵阳、昆明、拉萨、兰州、西宁、银川、乌鲁木齐</br>三级城市:唐山、秦皇岛、淄博、烟台、威海、徐州、连云港、南通、镇江、常州、嘉兴、金华、绍兴、台州、温州、泉州、东莞、惠州、佛山、中山、江门、湛江、北海、桂林</br>四级城市:邯郸、鞍山、抚顺、吉林市、齐齐哈尔、大庆、包头、大同、洛阳、潍坊、芜湖、扬州、湖州、舟山、漳州、株洲、潮州、柳州</br>五级城市:承德、保定、丹东、开封、安阳、泰安、日照、蚌埠、黄山、泰州、莆田、南平、九江、宜昌、襄樊、岳阳、肇庆、乐山、绵阳、丽江、延安、咸阳、宝鸡及其他城市");
	//$("[name='travelInfo'] tbody").find("tr:eq("+index+")").find("td[data-label='住宿费']").find("input").focus();
}

//校验填写的城市是否存在
function judgeCityIsExist(obj) {
	var cityName = $(obj).val();
	var index = $(obj).parent().parent().index();
	var firstTierCityArr = ["北京", "天津", "沈阳", "大连", "哈尔滨", "济南", "青岛", "南京", "上海", "杭州", "武汉", "广州", "深圳", "香港", "澳门", "重庆", "成都", "西安"];
	var secondTierCityArr = ["石家庄", "长春", "呼和浩特", "太原", "郑州", "合肥", "无锡", "苏州", "宁波", "福州", "厦门", "南昌", "长沙", "汕头", "珠海", "海口", "三亚", "南宁", "贵阳", "昆明", "拉萨", "兰州", "西宁", "银川", "乌鲁木齐"];
	var thirdTierCityArr = ["唐山", "秦皇岛", "淄博", "烟台", "威海", "徐州", "连云港", "南通", "镇江", "常州", "嘉兴", "金华", "绍兴", "台州", "温州", "泉州", "东莞", "惠州", "佛山", "中山", "江门", "湛江", "北海", "桂林"];
	var fourthTierCityArr = ["邯郸", "鞍山", "抚顺", "吉林市", "齐齐哈尔", "大庆", "包头", "大同", "洛阳", "潍坊", "芜湖", "扬州", "湖州", "舟山", "漳州", "株洲", "潮州", "柳州"];
	var fifthTierCityArr = ["承德", "保定", "丹东", "开封", "安阳", "泰安", "日照", "蚌埠", "黄山", "泰州", "莆田", "南平", "九江", "宜昌", "襄樊", "岳阳", "肇庆", "乐山", "绵阳", "丽江", "延安", "咸阳", "宝鸡"];
	if (firstTierCityArr.indexOf(cityName) == -1 && secondTierCityArr.indexOf(cityName) == -1 && thirdTierCityArr.indexOf(cityName) == -1 && fourthTierCityArr.indexOf(cityName) == -1 && fifthTierCityArr.indexOf(cityName) == -1) {
		layer.msg("请确保填写正确的城市名称");
		$(obj).val("");
	}
}

//控制定额可发起时间不能在每月10号及10号以前
function setSubmitTimeByBussinessName() {}

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
			if (result.code == '0' && result.data.companyCode) {
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

//获取团建补贴根据团建日期及对应成本中心人数计算额度
function setLeagueBuildFeeByTimeAndNumberOfPeople() {
	var BEGDA = $("[name='date_isB6']").val();
	var ENDDA = $("[name='date_QmCe']").val();
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
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
					$("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='成本中心预算']").find("input").val(amount);
				}
			});
		}
	});
}

//发票类型一键赋值
function setNullInvoiceTypeVal(obj) {
	var invoiceType = $(obj).val();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile()) {
		tableName = $(tdObj).parent().parent().parent().attr("name");
	}
	var dataLabel = "";
	if (tableName == 'reimburseDetail')
		dataLabel = "发票类型";
	else
		dataLabel = "票据类型";
	$("[name='" + tableName + "'] tbody").find("tr").each(function() {
		var invoiceType1 = $(this).find("td[data-label='" + dataLabel + "']").find("select").val();
		if (!invoiceType1) {
			$(this).find("td[data-label='" + dataLabel + "']").find("select").val(invoiceType);
			$(this).find("td[data-label='" + dataLabel + "']").find("select").change();
		}
	});
	layui.form.render();
}

//Excel导入重新赋值排序号给到表格中
function setUuidtoSortVal() {
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var sortNo = uuid();
		var index = $(this).index();
		$(this).find("td[data-label='排序']").find("input").val(sortNo);
		$("[name='payees'] tbody").find("tr:eq(" + index + ")").find("td[data-label='排序']").find("input").val(sortNo);
	});
}

//百问百答
function _formContentLayuiOpen(param) {}

//添加百问百答按钮
function _formContentRender() {
	var buttom = "<div style='width:100%;text-align:end'><button type='button' class='layui-btn layui-btn-primary' onclick='_formContentLayuiOpen(1)'>帮助</button></div>"
	if (!common.isMobile()) {
		$("#insTitle_input").parent().parent().parent().parent().parent().before(buttom);
	}

}

//设定财务再次审核人
function SetFinancialReviewer() {
	var userId = $("#userId").val();
	var activityName = $("#activityName").val();
	var financialReviewer = $("[name='financialReviewer']").val();
	var activityArr = ["财务审核-日常类-总", "财务审核-维护类-总", "财务审核-采购-成品-总", "财务审核-采购-辅材-总", "财务审核-预留A", "财务审核-预留B", "实业财经部经理-总", "财务管理部经理-总", "财务总监-总部", "财务会计-子公司1", "财务会计-子公司2", "财务经理-子公司1", "财务经理-子公司2", "财务总监-子公司", "财务再次审核单据", "出纳进行付款"];
	if (activityArr.indexOf(activityName) != -1) {
		if (!financialReviewer) {
			$("[name='financialReviewer']").val(userId);
		}
	}
}

//税金修改后的值不能大于他的报销金额
function judgeTaxesIsOverAmount(obj) {
	var taxes = parseFloat($(obj).val());
	taxes = isNaN(taxes) ? 0 : taxes;
	var index = $(obj).parent().parent().index();
	var tableName = $(obj).parent().parent().parent().parent().attr("name");
	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");

	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		tableName = $(tdObj).parent().parent().parent().attr("name");
	}
	var amount = 0;
	if (tableName == 'reimburseDetail') {
		amount = parseFloat($("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input").val());
	} else {}
	amount = isNaN(amount) ? 0 : amount;
	if (taxes >= amount) {
		layer.open({
			content: "税金支持修改,但税金不能大于或等于明细金额",
			btn: 'OK'
		});
		getTaxesByAmountAndTaxRate(obj);
	}

}

//团建开始日期不能大于团建结束日期
function compareDate() {
	var startDate = $("[name='date_isB6']").val();
	var endDate = $("[name='date_QmCe']").val();
	if ((new Date(startDate.replace(/-/g, "\/"))) > (new Date(endDate.replace(/-/g, "\/")))) {

		layer.open({
			content: "日期填写错误,起始日期不能大于结束日期",
			btn: 'OK'
		});
		$("[name='date_QmCe']").val("");
	}
}

//团建开始日期不能大于团建结束日期
function compareTravelDate(obj) {
	var index = $(obj).parent().parent().index();
	var startDate = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='出发时间']").find("input").val();
	var endDate = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='到达时间']").find("input").val();
	if ((new Date(startDate.replace(/-/g, "\/"))) > (new Date(endDate.replace(/-/g, "\/")))) {

		layer.open({
			content: "日期填写错误,起始日期不能大于结束日期",
			btn: 'OK'
		});
		$("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='到达时间']").find("input").val("");
	}
}

//生成流程主题规则
function setInsTitleByBussinessName(obj) {
	var bussinessName = $(obj).find("option:selected").text();
	var index = bussinessName.lastIndexOf("\-");
	bussinessName = bussinessName.substring(index + 1, bussinessName.length);
	var userName = $("#userName").val();
	var processType = $("[name='processType']").val();
	var proName = "";
	if (processType) {
		proName = "报销";
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

//差旅明细城市等级对应职级住宿补贴提示信息展示
function setNewPayeesInfoByLifnr(obj) {
	var index = $(obj).parent().parent().index();
	var userId = $("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='工号']").find("input[type='text']").val();
	if (userId) {
		common.showCitySubsidyRB(userId);
	} else {
		layer.msg("请先确认差旅明细工号是否填写");
	}
}

//收款人信息提供按钮手动打开供应商页面选择对应供应商
function setNewLifnrInfoInPayees(obj) {
	var elementId = $(obj).attr("id");
	if (common.isMobile()) {
		mobileRBUtil.chooseLifnr(obj);
	} else {
		common.chooseLifnr(elementId);
	}
}

//888门店-关于水费的费用报销
function abstractContentOnChange() {
	var reimburseDetailTrs = $("[name='reimburseDetail']").find("tbody").find("tr");
	for (var i = 0; i < reimburseDetailTrs.length; i++) {
		var code = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='(门店/供应商/个人)编码']").not(".no_data").find("input").val();
		var name = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='名称']").not(".no_data").find("input").val();
		var typeText = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='报销类型']").not(".no_data").find("option:selected").text();
		var typeVal = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='报销类型']").not(".no_data").find("select").val();
		var dateBegin = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='发生截止日期']").not(".no_data").find("input").val();
		// var dateEnd=$("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='结束日期']").not(".no_data").find("input").val();

		var dushu = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='本期度数(电谷)']").not(".no_data").find("input").val();
		var dushuFeng = $("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='本期度数(水/煤/电峰)']").not(".no_data").find("input").val();
		var date1To = date1.replace(/-/g, "");
		var dateStr = date1To = date1To.substring(2);

		if (dushu == "" || dushu == undefined) {
			dushu = 0;
		}
		if (typeVal == "" || typeVal == undefined)
			typeText = "";
		var abstractContent = code + name + dateStr + typeText;
		$("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='摘要']").not(".no_data").find("input").val(abstractContent);
		$("[name='reimburseDetail']").find("tbody").find("tr").eq(i).find("td[data-label='备注']").not(".no_data").find("input").val(dushu + "-" + dushuFeng);
	}
}
//费用明细表拼接摘要
function setSummaryByIndex() {
	var pageType = $("#pageType").val();
	var InsInitUser = "";
	if (pageType == 'startProcess')
		InsInitUser = $("#userName").val();
	else
		InsInitUser = $("#initUserFullname").val();
	var itemCode = $("[name='itemCode']").val();
	if (!itemCode) {
		itemCode = "";
	}
	var subjectType = $("[name='subject_type']").val();
	var bussinessName = $("[name='bussiness_name']").val();
	var isBelongToStore = $("[name='isBelongToStore']").val();
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var summary = "";
		var reimburseType = $(this).find("td[data-label='报销类型']").find("select").find("option:selected").text();
		var storeCode = $(this).find("td[data-label='门店费用归属编码']").find("input").val();
		var storeName = "";
		if (storeCode) {
			storeName = $(this).find("td[data-label='(门店/供应商/个人)编码']").find(".value_id").val();
		}
		var dip = $(this).find("td[data-label='本期度数(电谷)']").find("input").val();
		var apex = $(this).find("td[data-label='本期度数(水/煤/电峰)']").find("input").val();
		var expirationDate = $(this).find("td[data-label='发生截止日期']").find("input").val().replace(/-/g, "");
		var remark = $(this).find("td[data-label='备注']").find("input").val();
		var summaryInTable = $(this).find("td[data-label='摘要']").find("input").val();
		var transSubsidyDate = $(this).find("td[data-label='报销月份']").find("input").val();
		var preliftInfo = $(this).find("td[data-label='预提信息']").find("input").val();

		if (subjectType == "07" || subjectType == '11' || bussinessName == 'YY05' || bussinessName == 'YJ01') {
			summary = storeCode + storeName + remark;
		} else if (bussinessName == 'BM011') {
			summary = transSubsidyDate + "月" + reimburseType;
		} else {
			summary = remark + itemCode;
		}
		if (!preliftInfo || summaryInTable) {
			$(this).find("td[data-label='摘要']").not(".no_data").find("input").val(summary);
		}
	});
}

function queryStoreDetailForMobile(obj) {

	var styleMobile = $("#tr_table").parent().parent().parent().attr("style");
	if (common.isMobile() && styleMobile != undefined && styleMobile.indexOf("display: block") > -1) {
		index = $(tdObj).parent().index();
		var tableName = $(tdObj).parent().parent().parent().attr("name");
		var code = $(obj).parent().find("input[type=text]").val();
		if (code == "" || code == undefined) {
			layer.msg("门店费用归属编码不能为空");
			return;
		}
		// $("#tr_table").find("td[data-label='门店费用归属编码']").val(code);
		var type = $("#tr_table").find("td[data-label='报销类型']").find("select").val();
		if (type == "" || type == undefined) {
			layer.msg("请先选择报销类型！");
			$(obj).val("");
			return;
		}
		mobileRBUtil.showLightAndWater($("#tr_table").find("td[data-label='门店费用归属编码']").find("i[onclick='queryStoreDetailForMobile(this)']"), code, type);
	} else {
		queryStoreLastMonthDetial(obj);
	}

}
function queryStoreLastMonthDetial(obj) {
	//门店编码
	var code = $(obj).parent().find("input[type=text]").val();
	if (code == "" || code == undefined) {
		layer.msg("门店费用归属编码不能为空");
		return;
	}
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

//批量获取门店类型数据判断门店是否冻结：0”代表利润中心不存在；“1”代表利润中心存在，未被冻结；“2”代表利润中心存在，已被冻结。
//验证门店所属公司与扣预算成本中心对应公司是否归属同一家公司
function getWerksIsFrozen() {
	var werks = [];
	var frozenWerk = [];
	var errorWerk = [];
	var flag = false;
	var companyArr = [];
	var companyCode = $("[name='companyCode']").val();
	$("[name='reimburseDetail'] tbody").find("tr").each(function() {
		var receiveType = $(this).find("td[data-label='收款人类型']").find("select").val();
		var receiveCode = $(this).find("td[data-label='(门店/供应商/个人)编码']").find("input[type='text']").val();
		var storeCode = $(this).find("td[data-label='门店费用归属编码']").find("input").val();
		if (receiveType == '1') {
			if (werks.indexOf(receiveCode) == -1) {
				werks.push(receiveCode);
			}
		}
		if (storeCode && werks.indexOf(storeCode) == -1) {
			werks.push(storeCode);
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
					layer.msg(result.msg, {
						icon: 2
					});
					flag = false;
				}

			},
			error: function(result) {}
		});
		return flag;
	}
	return true;
}
//根据环节设定驳回发起人时是否触发预算解锁隐藏值
function setIsBudgetUnlockByActivityName() {
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	if (!checkBudgetAndAmount) {
		$("[name='checkBudgetAndAmount']").not(".no_data").val("0");
	}
}

/**
 此方法只在财务环节驳回到发起人进行校验，业务审核环节驳回预算进行释放
 但财务环节驳回发起人预算不释放，此处可以支持修改金额 但因为预算不释放故不进行预算校验
 修改金额的前提是只支持改小 不能超过原本他申请所报销的金额 此处校验修改前后金额
 */
function judgeAmountIsOverCheckAmount() {
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	//业务驳回默认
	if (checkBudgetAndAmount == '0') {
		return true;
	}
	var actualPaymentAmount = parseFloat($("[name='actualPaymentAmount']").val());
	//用于验证的实际付款金额
	actualPaymentAmount = isNaN(actualPaymentAmount) ? 0 : actualPaymentAmount;
	var subjectType = $("[name='subject_type']").val();
	var total = parseFloat($("[name='total']").val());
	//实际付款金额
	total = isNaN(total) ? 0 : total;
	if (total <= actualPaymentAmount || total == 0) {
		return true;
	}
	if (subjectType == '09') {
		$("[name='travelInfo'] tbody").find("tr").each(function() {
			var amount = parseFloat($(this).find("td[data-label='报销金额']").find("input").val());
			var checkAmount = parseFloat($(this).find("td[data-label='验证金']").find("input").val());
			var index = $(this).index();
			if (amount != checkAmount) {
				$(this).find("td[data-label='报销金额']").not(".no_data").find("input").val(checkAmount);
				giveMoney($("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='报销金额']").find("input"));
				getTaxesByAmountAndTaxRate($("[name='travelInfo'] tbody").find("tr:eq(" + index + ")").find("td[data-label='报销金额']").find("input"));
			}

		});
		changeByIsRevertBorrow();
	} else {
		$("[name='reimburseDetail'] tbody").find("tr").each(function() {
			var amount = parseFloat($(this).find("td[data-label='金 额']").find("input").val());
			var checkAmount = parseFloat($(this).find("td[data-label='验证金']").find("input").val());
			checkAmount = isNaN(checkAmount) ? 0 : checkAmount;
			var index = $(this).index();
			if (amount != checkAmount) {
				$(this).find("td[data-label='金 额']").not(".no_data").find("input").val(checkAmount);
				giveMoney($("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input"));
				getTaxesByAmountAndTaxRate($("[name='reimburseDetail'] tbody").find("tr:eq(" + index + ")").find("td[data-label='金 额']").find("input"));
			}
		});
	}
	getAmount();
	layer.msg("财务驳回以后修改金额以后当前报销实际付款不能超过原有实际报销付款金额,现已帮您修改回原始值");
	return false;
}

//提交以后生成对应的的对应的验证金
function setCheckAmount() {
	var activityName = $("#activityName").val();
	var pageType = $("#pageType").val();
	var checkBudgetAndAmount = $("[name='checkBudgetAndAmount']").val();
	if (activityName == '申请人填写') {
		var subjectType = $("[name='subject_type']").val();
		var total = $("[name='total']").val();
		if (subjectType == '09') {
			$("[name='travelInfo'] tbody").find("tr").each(function() {
				var checkAmount = $(this).find("td[data-label='验证金']").find("input").val();
				var amount = $(this).find("td[data-labeRl='报销金额']").find("input").val();
				if (!checkAmount || checkBudgetAndAmount == '0') {
					$(this).find("td[data-label='验证金']").not(".no_data").find("input").val(amount);
				}

			});
		} else {
			$("[name='reimburseDetail'] tbody").find("tr").each(function() {
				var amount = $(this).find("td[data-label='金 额']").find("input").val();
				var checkAmount = $(this).find("td[data-label='验证金']").find("input").val();
				if (!checkAmount || checkBudgetAndAmount == '0') {
					$(this).find("td[data-label='验证金']").not(".no_data").find("input").val(amount);
				}
			});
		}
		if (checkBudgetAndAmount == '0') {
			$("[name='actualPaymentAmount']").not(".no_data").val(total);
		}

	}
}
//附件上传验证
function judgeFileIsUploaded() {
	var length = $('.upload-file-table').find('tbody').find('tr').length;
	var bussinessName = $("[name='bussinessName']").val();
	if (bussinessName == 'BM011') {
		return true;
	}
	if (length == 0) {
		layer.msg("必须上传附件", {
			icon: 2
		});
		return false;
		//失败
	} else {
		return true;
	}
}

// </script>
