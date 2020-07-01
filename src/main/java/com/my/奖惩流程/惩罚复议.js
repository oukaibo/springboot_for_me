// <script type='text/javascript'>
var taskId = $("#taskId").val();
$(function() {
    accordingActivityHideOpnionField();
    // 是否修正奖惩
    reTalkedReward();
    // 添加事件
    addOnchangeForGetLeader();
    // 抄送
    isCopyTask();

    // 上级员工号
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 7
    });
    // 隔级员工号
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 8
    });
    // 申报人上级
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 9
    });
    // 公司编码
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 10
    });

    formUtil.tableFun.giveTableColSetWidth({
        tableName: 'table_WZJ6',
        colArr: [{
            'rewardName2': '200px'
        }, {
            'userNo2': '100px'
        }, {
            'adminiReward2': '100px'
        }, {
            'rewardBonus2': '100px'
        }, {
            'indemnity2': '100px'
        }, {
            'manpowerPunish2': '100px'
        }]
    });
    formUtil.tableFun.giveTableColSetWidth({
        tableName: 'table_3pmC',
        colArr: [{
            'rewardName1': '200px'
        }, {
            'userNo1': '100px'
        }, {
            'adminiReward1': '100px'
        }, {
            'rewardBonus1': '100px'
        }, {
            'indemnity1': '100px'
        }, {
            'manpowerPunish1': '100px'
        }]
    });
    // 公司编码
    queryCompanyCode();
    // 是否内勤
    judgeNeiQin();
})

function accordingNeiQinGiveVal(obj) {
    var judgeNeiQin = $("[name='judgeNeiQin']").val();
    if ("1" == judgeNeiQin) {
        // 非内勤

        var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=text]').val();
        $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val(userCode);
    }
}

function StringBuffer(str) {
    var arr = [];
    str = str || "";
    var size = 0;
    // 存放数组大小
    arr.push(str);
    // 追加字符串
    this.append = function(str1) {
        arr.push(str1);
        return this;
    }
    ;
    // 返回字符串
    this.toString = function() {
        return arr.join("");
    }
    ;
    // 清空
    this.clear = function(key) {
        size = 0;
        arr = [];
    }
    ;
    // 返回数组大小
    this.size = function() {
        return size;
    }
    ;
    // 返回数组
    this.toArray = function() {
        return buffer;
    }
    ;
    // 倒序返回字符串
    this.doReverse = function() {
        var str = buffer.join('');
        str = str.split('');
        return str.reverse().join('');
    }
    ;
}
// 查询公司编码
function queryCompanyCode() {
    var sb = new StringBuffer();
    $.ajax({
        url: common.getPath() + '/sysCompany/allCompany',
        type: 'post',
        dataType: 'json',
        data: {},
        success: function(result) {
            for (var i = 0; i < result.length - 1; i++) {
                if (result[i].companyName.indexOf("Country") < 0) {
                    sb.append("<option value='" + result[i].companyCode + "'>" + result[i].companyCode + "</option>");
                }
            }
            //             初始化公司代码
            $("[name='theCompany']").find("option[value='selectOption']").after(sb.toString());
            common.initSelect();
        }
    })
}
function accordingActivityHideOpnionField() {
    $("[name='select_ypGF']").val("");
    formUtil.changeEditByName("select_ypGF");
    // layui.form.render("select");
}

// 是否内勤
function judgeNeiQin(obj) {
    var val = $("[name='judgeNeiQin']").val();
    if (val == "0") {
        // 是内勤

        // 处罚人员
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'table_WZJ6',
            colNum: 1,
        });

        $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").show();
        // 所属公司代码
        formUtil.changeHiddenByName("theCompany");
        formUtil.changeHiddenMustByName("theCompany");
        formUtil.changeNotEditByName("theCompany");
        // 是否处罚加盟商
        formUtil.changeHiddenByName("isPunishFranchisee");
        formUtil.changeHiddenMustByName("isPunishFranchisee");
        // 上级员工号
        formUtil.tableFun.changeShowMustByTableParam({
            name: 'table_WZJ6',
            colNum: 7
        });
        // 隔级员工号
        formUtil.tableFun.changeShowMustByTableParam({
            name: 'table_WZJ6',
            colNum: 8
        });
        // 申报人上级
        formUtil.tableFun.changeShowMustByTableParam({
            name: 'table_WZJ6',
            colNum: 9
        });
    } else {
        // 非内勤
        $("[name='table_WZJ6'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("readonly");
        $("[name='table_WZJ6'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("disabled");
        $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").hide();

        // 所属公司代码
        formUtil.changeShowByName("theCompany");
        formUtil.changeShowMustByName("theCompany");
        formUtil.changeEditByName("theCompany");
        // 是否处罚加盟商
        formUtil.changeShowByName("isPunishFranchisee");
        formUtil.changeShowMustByName("isPunishFranchisee");
        // 上级员工号
        formUtil.tableFun.changeHiddenMustByTableParam({
            name: 'table_WZJ6',
            colNum: 7
        });
        // 隔级员工号
        formUtil.tableFun.changeHiddenMustByTableParam({
            name: 'table_WZJ6',
            colNum: 8
        });
        // 申报人上级
        formUtil.tableFun.changeHiddenMustByTableParam({
            name: 'table_WZJ6',
            colNum: 9
        });
    }

}
function totalMoney(obj) {
    var money = $(obj).val();
    if (money == "") {
        money = "0";
        $(obj).val("0");
    }

    if (isNaN(money)) {
        layer.msg("请输入正确的金额");
        $(obj).val("0");
        return;
    }
    if (money < 0) {
        layer.msg("金额不能小于0");
        $(obj).val("0");
        return;
    }
    checkAndfomartNumber(obj, 8, 2)
}
//给表单赋值
function giveFormContent() {
    var formNo = $("[name='text_FTmR']").val();
    $.ajax({
        url: common.getPath() + '/proInstanceInfo/getFormDataByFormNo?formNo=' + formNo,
        type: 'get',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function(result) {
            if (result.status == 0 && result.data.length == undefined) {

                var data = result.data;
                console.log(data);
                common.giveFormSetValue(JSON.stringify(data), undefined);
                common.initSelect();

            } else {
                layer.msg("找不到对应流程信息", {
                    icon: 2,
                    title: "提示"
                });
                $("[name='text_FTmR']").val("");
            }
        }
    })
}

// 是否修正奖惩

function reTalkedReward() {
    if ($("[name='select_Ckir']").val() == 'y') {
        //是否隐藏复议后奖励文本框
        $("[name='text_wHnT']").parent().parent().show();
    } else {
        $("[name='text_wHnT']").parent().parent().hide();
    }
}

//复议惩罚
function addOnchangeForGetLeader() {
    var userPunish = $("[name='table_WZJ6']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find("input[type=text]").attr("onchange", "accordingNeiQinGiveVal(this);punishUserOnchange(this)");
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");
    }
}

//当前输入的员工是否在范围内
function punishUserOnchange(obj) {
    var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val();
    var codes = [];
    if (userCode) {
        codes.push(userCode);
    }

    var copyToByUserId = $("[name='copyToByUserId']").val();
    var users = copyToByUserId.split(";");
    if (users.indexOf(userCode) > -1) {
        var val = $("[name='judgeNeiQin']").val();
        // 是内勤就判断存在吗
        if (val == "0") {
            $.ajax({
                url: common.getPath() + '/selectUser/getLeadesByUserId',
                type: 'post',
                dataType: 'json',
                data: JSON.stringify(codes),
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        if (result.data.length > 0) {
                            for (var i = 0; i < result.data.length; i++) {
                                if (!result.data[i].curUserInfo || !result.data[i].zUserUid) {
                                    layer.msg("获取当前人员信息失败", {
                                        icon: 2
                                    });
                                    $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val("");
                                    continue;
                                } else {
                                    $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val(result.data[i].curUserInfo.companynumber);
                                }
                                if (result.data[i].zUserUid) {
                                    $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val(result.data[i].zUserUid);
                                } else {
                                    $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val("");

                                }
                                if (result.data[i].gUserUid) {
                                    $(obj).parent().parent().find("td[data-label='隔级领导']").not(".no_data").find('input').val(result.data[i].gUserUid);
                                    $(obj).parent().parent().find("td[data-label='隔级员工号']").not(".no_data").find('input').val(result.data[i].gUserUid);
                                } else {
                                    $(obj).parent().parent().find("td[data-label='隔级领导']").not(".no_data").find('input').val(result.data[i].gUserUid);
                                    $(obj).parent().parent().find("td[data-label='隔级员工号']").not(".no_data").find('input').val(result.data[i].gUserUid);

                                }
                            }
                        } else {
                            layer.msg("获取当前人员信息失败", {
                                icon: 2
                            });
                            $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val("");
                        }
                    }
                },
                error: function(result) {}
            });
        }
    } else {

        $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val("");
        layer.msg("当前人员不在惩罚人员列表", {
            icon: 2
        });

    }
}
//提交前验证
function check_before_submit() {
    var activityName = $("#activityName").val();

    var zUserUidsStr = "";
    var gUserUidsStr = "";
    var zleaderCodes = [];
    var gLeaderCodes = [];
    if (activityName == "奖惩复议申报人提出复议") {
        var userPunish = $("[name='table_WZJ6']").find("tbody").find("tr");
        var copyUser = "";
        var companyCodeHaHaHa = "";
        for (var i = 0; i < userPunish.length; i++) {
            var userId = $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val();
            if (userId) {
                copyUser += userId + ";";
            }
            var zleaderCode = $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='上级员工号']").not(".no_data").find('input').val();
            if (zleaderCode) {

                zUserUidsStr += zleaderCode + ";";
                zleaderCodes.push(zleaderCode);
            }
            var gLeaderCode = $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='隔级员工号']").not(".no_data").find('input').val();
            if (gLeaderCode != "") {
                gUserUidsStr += gLeaderCode + ";";
                gLeaderCodes.push(gLeaderCode);
            }
            var companyCodeHaHa = $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='公司编码']").not(".no_data").find('input').val();
            if (companyCodeHaHa) {
                companyCodeHaHaHa += companyCodeHaHa + ";";
            }
        }
        if (companyCodeHaHaHa) {
            $("[name='companyNum']").val(companyCodeHaHaHa);
        }
        if (zleaderCodes.indexOf("00000001") > -1) {
            //说明上级审批人存在施董
            $("[name='leadersContainHe']").val("yes");
        } else {
            $("[name='leadersContainHe']").val("no");
        }
        $("[name='zLeaders']").val(zUserUidsStr);
        $("[name='gLeaders']").val(gUserUidsStr);
        $("[name='copyToByUserId']").val(copyUser);
    }
    setOpnionByActivity();
    giveCompanyChooseUser();
    return true;
}

function setOpnionByActivity() {
    var nameField = "select_ypGF";
    var activityName = $("#activityName").val();
    if (nameField) {
        $.ajax({
            url: common.getPath() + '/activityOpinion/judgeOpinion?taskId=' + taskId + '&nameField=' + nameField,
            type: 'GET',
            async: false,
            contentType: "application/json;charset=utf-8",
            success: function(result) {
                if (result.status == 0) {
                    var data = result.data;
                    console.log(data);
                    if (data.opinion) {
                        if (data.opinion == "yes") {
                            $("[name='" + nameField + "']").val("1");
                        }
                    }
                }
            }
        })
    }

}

//行触发
function rowChangeEvent(obj) {
    var tableName = $(obj).parent().parent().parent().parent().attr("name");
    if (tableName == 'table_WZJ6') {
        addOnchangeForGetLeader();
    }

}

function isCopyTask() {
    if ($("#taskType").val() == "transfer") {
        //当前页面是抄送
        $("#formSet").find("table[title=原处罚事件信息]").parent().hide();
        $("#formSet").find("table[title=惩罚复议信息]").parent().hide();
        $("#formSet").find("table[title=复议后惩罚结论]").parent().hide();
        $("#formSet").find("table[title=原有人员处罚信息]").parent().parent().hide();
        $("[name='select_ypGF']").parent().parent().parent().parent().parent().hide();
        $("#approval_tbody").parent().parent().parent().parent().parent().parent().hide();
    }
}
//重写excel导入数据填充到数据表格补充函数
function fileUploadChangeEvent() {

    var userPunish = $("[name='table_WZJ6']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var peiKuan = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").find("input").val();
        if (peiKuan) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").find("input").change();
        }
        var userNo = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=hidden]").val();
        if (userNo) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=text]").change();
        }
        var faKuan = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").val();
        if (faKuan) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").change();
        }
    }
    $("[name='table_WZJ6']").find("tbody").find("tr:gt(0)").remove();

}
function giveCompanyChooseUser() {
    var code = $("[name='theCompany']").val();
    var judgeNeiQin = $("[name='judgeNeiQin']").val();
    if ("1" == judgeNeiQin) {
        $("[name='companyNum']").val(code);
    }
}

// </script>
