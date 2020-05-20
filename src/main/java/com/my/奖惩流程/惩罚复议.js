{/* <script type='text/javascript'> */ }
var taskId = $("#taskId").val();
$(function () {
    accordingActivityHideOpnionField();
    reTalkedReward();
    addOnchangeForGetLeader();
    //抄送
    isCopyTask();
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 11
    });
    //     隐藏上级员工号
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 7
    });
    //     隐藏上级员工号
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 8
    });
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 9
    });
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_WZJ6',
        colNum: 10
    });
    // if (activityName == "奖惩复议申报人提出复议") {
    //     //获得当前登录人
    //     var curUserId = $("#userId").val();
    //     var codes = [];
    //     if (curUserId){
    //         codes.push(curUserId);
    //     }

    //     $.ajax({
    //         url: common.getPath() + '/selectUser/getLeadesByUserId',
    //         type: 'post',
    //         dataType: 'json',
    //         data: JSON.stringify(codes),
    //         contentType: "application/json;charset=utf-8",
    //         success: function(result) {
    //             if (result.status == 0) {
    //                 if (result.data.length > 0) {
    //                     for (var i = 0; i < result.data.length; i++) {
    //                         if (result.data[i].zUserUid != null && result.data[i].zUserUid != undefined)
    //                             $("[name='table_WZJ6']").find("tbody").find("tr").eq(0).find("td[data-label='申报人上级']").not(".no_data").find('input').val(result.data[i].zUserUid);

    //                     }
    //                 }
    //             }
    //         },
    //         error: function(result) {}
    //     });
    // }
    formUtil.tableFun.giveTableColSetWidth({
        tableName: 'table_3pmC',
        colArr: [{
            'table_3pmC_hb': '500px'
        }, {
            'table_3pmC_7': '500px'
        }]
    });
    formUtil.tableFun.givePCTableSetWidth({
        "tableWidthJson": {
            "table_3pmC": "2500px"
        }
    });
    formUtil.tableFun.giveTableColSetWidth({
        tableName: 'table_WZJ6',
        colArr: [{
            'table_WZJ6_Zw': '500px'
        }, {
            'table_WZJ6_59': '500px'
        }]
    });
    formUtil.tableFun.givePCTableSetWidth({
        "tableWidthJson": {
            "table_WZJ6": "2500px"
        }
    });
})

function accordingNeiQinGiveVal(obj) {
    var judgeNeiQin = $("[name='judgeNeiQin']").val();
    if ("1" == judgeNeiQin) {
        var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=text]').val();
        $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val(userCode);
    }
}
// 查询公司编码
function queryCompanyCode() {
    $.ajax({
        url: common.getPath() + '/sysCompany/allCompany',
        type: 'post',
        dataType: 'json',
        data: {},
        success: function (result) {
            var selectArr = new Array();
            for (var i = 0; i < result.length - 1; i++) {
                if (result[i].companyName.indexOf("Country") < 0) {
                    selectArr.push({
                        name: result[i].companyCode,
                        value: result[i].companyCode
                    });
                }
            }
            //             初始化公司代码
            layui.formSelects.data('theCompany', 'local', {
                arr: selectArr
            });

            common.initMultiSelect();
            $("[name='theCompany']").attr("onchange", "companyCodeOnchange('theCompany');");
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
    var val = $(obj).val();
    // 是内勤
    if (val == "0") {
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'table_WZJ6',
            colNum: 1,
        });
        $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").show();

    } else {
        $("[name='table_WZJ6'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("readonly");
        $("[name='table_WZJ6'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("disabled");
        $("[name='table_WZJ6']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").hide();
        queryCompanyCode();
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
//给表单赋值，不需要任何js
function giveFormContent() {
    var formNo = $("[name='text_FTmR']").val();
    $.ajax({
        url: common.getPath() + '/proInstanceInfo/getFormDataByFormNo?formNo=' + formNo,
        type: 'get',
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (result) {
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

//是否隐藏复议奖励
function reTalkedReward() {
    if ($("[name='select_Ckir']").val() == 'y') {
        $("[name='text_wHnT']").parent().parent().show();
    } else {
        $("[name='text_wHnT']").parent().parent().hide();
    }
}

//复议 ---惩罚----信息表----添加触发事件
function addOnchangeForGetLeader() {
    var userPunish = $("[name='table_WZJ6']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find("input[type=text]").attr("onchange", "accordingNeiQinGiveVal(this);punishUserOnchange(this)");
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");
        var userCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");
    }
}

//判断当前输入的员工是否在范围内
function punishUserOnchange(obj) {
    var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val();
    var codes = [];
    if (userCode) {
        codes.push(userCode);
    }

    var copyToByUserId = $("[name='copyToByUserId']").val();
    var users = copyToByUserId.split(";");
    if (users.indexOf(userCode) > -1) {
        $.ajax({
            url: common.getPath() + '/selectUser/getLeadesByUserId',
            type: 'post',
            dataType: 'json',
            data: JSON.stringify(codes),
            contentType: "application/json;charset=utf-8",
            success: function (result) {
                if (result.status == 0) {
                    if (result.data.length > 0) {
                        for (var i = 0; i < result.data.length; i++) {
                            if (result.data[i].curUserInfo == null || result.data[i].zUserUid == undefined || result.data[i].zUserUid == "") {
                                layer.msg("获取当前人员信息失败", {
                                    icon: 2
                                });
                                $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val("");
                                continue;
                            } else {
                                $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val(result.data[i].curUserInfo.companynumber);
                            }
                            if (result.data[i].zUserUid != null && result.data[i].zUserUid != undefined && result.data[i].zUserUid != "") {
                                $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val(result.data[i].zUserUid);
                            } else {
                                $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val("");

                            }
                            if (result.data[i].gUserUid != null && result.data[i].gUserUid != undefined && result.data[i].gUserUid != "") {
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
            error: function (result) { }
        });
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
    var leaderCodes = [];
    var gLeaderCodes = [];
    if (activityName == "奖惩复议申报人提出复议") {
        var userPunish = $("[name='table_WZJ6']").find("tbody").find("tr");
        var copyUser = "";
        var companyCodeHaHaHa = "";
        for (var i = 0; i < userPunish.length; i++) {
            if ($("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val() != "") {
                copyUser += $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val() + ";";
            }
            if ($("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val() != "") {
                var zCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val()
                zUserUidsStr += zCode + ";";
                leaderCodes.push(zCode);
            }
            if ($("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val() != "") {
                var gCode = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val()
                gUserUidsStr += gCode + ";";
                gLeaderCodes.push(gCode);
            }
            var companyCodeHaHa = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='公司编码']").not(".no_data").find('input').val();
            if (companyCodeHaHa != "") {
                companyCodeHaHaHa += companyCodeHaHa + ";";
            }
        }
        if (companyCodeHaHaHa != "") {
            $("[name='companyNum']").val(companyCodeHaHaHa);
        }
        if (leaderCodes.indexOf("00000001") > -1 || gLeaderCodes.indexOf("00000001")) {
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
            success: function (result) {
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
        if (peiKuan != "" && peiKuan != null && peiKuan != undefined) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").find("input").change();
        }
        var userNo = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=hidden]").val();
        if (userNo != "" && userNo != null && userNo != undefined) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=text]").change();
        }
        var faKuan = $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").val();
        if (faKuan != "" && faKuan != null && faKuan != undefined) {
            $("[name='table_WZJ6']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").change();
        }
    }
    $("[name='table_WZJ6']").find("tbody").find("tr:gt(0)").remove();

}

// </script>
