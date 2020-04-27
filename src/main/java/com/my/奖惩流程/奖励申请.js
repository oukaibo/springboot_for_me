// <script type='text/javascript'>

//获得当前登录人
var curUserId = $("#userId").val();
//流程主题命名
function insTitleName() {
    var date = getNowFormatDate();
    var matter = $("[name='text_yChH']").val();
    //客户名称
    var customerName = $("#userName").val();
    if (customerName == "" || customerName == null || customerName == undefined) {
        $("#insTitle_input").val("");
    } else {
        var str = date + customerName + "发起的" + matter + "的奖励流程"
        //给流程主题命名
        $("#insTitle_input").val(str);
    }

}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = month + "月" + strDate + "日";
    return currentdate;
}
$(function() {
    $("#insTitle_input").attr("disabled", "disabled");
    $("[name='isZhiSong']").val("no");
    //由于奖励表单不需要内控部直送，但是又必须要有一个值来作为网管条件所以
    $("[name='isInternalControlDepartment']").val("no");
    var activityName = $("#activityName").val();

    //每次窗体加载都要判断当前登录人是不是L5，但是必须是代办
    var pageType = $("#pageType").val();
    if (pageType != "finishedDetail") {

        isDepartManagerOrL5();
    }
    addOnchangeForGetLeader();
    isCopyTask();
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_3pmC',
        colNum: 9
    });
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_3pmC',
        colNum: 10
    });
    // 公司
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_3pmC',
        colNum: 11
    });
    if (activityName == "被奖惩人上级审批") {
        $("[name='select_hDNB']").val("");
    }
    isTeam($("[name='select_M3rJ']"));
    var zzLeadersStr = $("[name='zzLeaders']").val();
    if (zzLeadersStr = "" || zzLeadersStr == undefined) {

        // if (activityName == "被奖惩人隔级审批") {
        var gLeadersCodes = $("[name='gLeaders']").val();
        var zzLeadersStr = "";

        if (gLeadersCodes != "" && gLeadersCodes != undefined) {
            var str = gLeadersCodes.substring(0, gLeadersCodes.length - 1);
            var codes = str.split(";");

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
                                zzLeadersStr += result.data[i].zUserUid + ";";
                            }
                        }
                    }
                    if (zzLeadersStr != "" && zzLeadersStr != undefined) {
                        $("[name='zzLeadersStr']").val(zzLeadersStr);

                    } else {
                        $("[name='zzLeadersStr']").val("");
                    }
                },
                error: function(result) {}
            });

        }

        // }
    }
    // formUtil.tableFun.giveTableColSetWidth({
    // tableName: 'table_3pmC',
    // colArr: [{
    // 'table_3pmC_7': '500px'
    // }]
    // });
    layui.form.render();
})

var theUserUids = [];
//判断发起人是部门负责人，判断当前审批人是否L5级别
function isDepartManagerOrL5() {
    var isFiveL5 = $("[name='isL5Level']").val();
    var activityName = $("#activityName").val();
    if (curUserId != "" && curUserId != null && curUserId != undefined) {
        $.ajax({
            url: common.getPath() + '/selectUser/getDepartmentPrincipalByUserId?userId=' + curUserId,
            type: 'get',
            contentType: "application/json;charset=utf-8",
            success: function(result) {
                if (result.status == 0) {
                    for (var i = 0; i < result.data.users.length; i++) {
                        var userUid = result.data.users[i].userUid;
                        theUserUids.push(userUid);
                    }
                    if (activityName == "奖惩申报人提报流程") {
                        //只有第一个环节需要判断是不是部门负责人
                        if (theUserUids.indexOf(curUserId) > -1) {
                            //当前登录人是部门负责人
                            $("[name='isDepartmentManager']").val("yes");
                        } else {
                            $("[name='isDepartmentManager']").val("no");
                        }
                    }
                    if (isFiveL5 == "yes" || isFiveL5 == "no") {
                        return;
                    }
                    var level = result.data.user.levels;
                    //判断当前登录人级别是否已经L5级别
                    if (level == "L5") {
                        $("[name='isL5Level']").val("yes");
                    } else {
                        $("[name='isL5Level']").val("no");
                    }

                    common.initSelect();
                }
            },
            error: function(result) {}
        });
    }

}

function punishUserOnchange(obj) {
    var userCode = $(obj).parent().parent().find("td[data-label='获奖人员工号']").not(".no_data").find('input[type=hidden]').val();
    var codes = [];
    if (userCode != undefined && userCode != "")
        codes.push(userCode);
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
                        if (result.data[i].curUserInfo != null && result.data[i].curUserInfo != undefined && result.data[i].curUserInfo != "") {
                            $(obj).parent().parent().find("td[data-label='获奖人员姓名']").not(".no_data").find('input').val(result.data[i].curUserInfo.userName);
                            $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val(result.data[i].curUserInfo.companynumber);

                        } else {
                            layer.msg("获取当前人员信息失败", {
                                icon: 2
                            });
                            $(obj).parent().parent().find("td[data-label='获奖人员工号']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val("");

                        }
                        if (result.data[i].zUserUid != null && result.data[i].zUserUid != undefined && result.data[i].zUserUid != "") {
                            $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val(result.data[i].zUserUid);
                        }
                        if (result.data[i].gUserUid != null && result.data[i].gUserUid != undefined && result.data[i].gUserUid != undefined) {
                            $(obj).parent().parent().find("td[data-label='隔级员工号']").not(".no_data").find('input').val(result.data[i].gUserUid);
                        }

                    }

                } else {
                    layer.msg("获取当前人员信息失败", {
                        icon: 2
                    });
                    $(obj).parent().parent().find("td[data-label='获奖人员工号']").not(".no_data").find('input').val("");
                    $(obj).parent().parent().find("td[data-label='公司编码']").not(".no_data").find('input').val("");
                }
            }
        },
        error: function(result) {}
    });
}

function check_before_submit() {
    var activityName = $("#activityName").val();
    //代办
    var pageType = $("#pageType").val();
    if (pageType != "finishedDetail") {

        var taskId = $("#taskId").val();

        if (activityName == "被奖惩人上级审批") {

            $.ajax({
                url: common.getPath() + '/activityOpinion/judgeOpinion?taskId=' + taskId,
                type: 'GET',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {

                    if (result.status == 0) {
                        var data = result.data;
                        console.log(data);
                        if (data.isShangJi != undefined && data.isShangJi != "") {
                            if (data.isShangJi == "yes") {
                                $("[name='select_hDNB']").val("1");
                            }
                        }

                    }
                }
            })
        }
        if (activityName == "奖惩最终审批") {

            $.ajax({
                url: common.getPath() + '/activityOpinion/judgeOpinion?taskId=' + taskId,
                type: 'get',
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        var data = result.data;
                        console.log(data);
                        if (data.isZuiZhong != undefined && data.isZuiZhong != "") {
                            if (data.isZuiZhong == "yes") {
                                $("[name='select_7sPn']").val("1");
                            }
                        }

                    }
                }
            })
        }
        var zUserUidsStr = "";
        var gUserUidsStr = "";

        $("[name='isZhiSong']").val("no");

        var leaderCodes = [];
        var gLeaderCodes = [];
        if (activityName == "奖惩申报人提报流程") {
            var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");

            var copyUser = "";
            var companyCodeHaHaHa = "";
            for (var i = 0; i < userPunish.length; i++) {
                var a1 = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='获奖人员工号']").not(".no_data").find('input[type=hidden]').val();
                var a2 = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val();
                var a3 = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val();
                var companyCodeHaHa = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='公司编码']").not(".no_data").find('input').val();
                if (a1 != "") {
                    copyUser += a1 + ";";

                }
                if (a2 != "") {
                    zUserUidsStr += a2 + ";";
                    leaderCodes.push(a2);
                }
                if (a3 != "") {
                    gUserUidsStr += a3 + ";";
                    gLeaderCodes.push(a3);
                }
                if (companyCodeHaHa != "") {
                    companyCodeHaHaHa += companyCodeHaHa + ";";
                }
            }
            if (companyCodeHaHaHa != "") {
                $("[name='companyNum']").val(companyCodeHaHaHa);
            }
            $("[name='zLeaders']").val(zUserUidsStr);
            if (zUserUidsStr != "" && zUserUidsStr != undefined) {
                $.ajax({
                    url: 'selectUser/getLeadersLevels',
                    type: 'post',
                    dataType: 'json',
                    data: JSON.stringify(leaderCodes),
                    contentType: "application/json;charset=utf-8",
                    success: function(result) {

                        if (result.status == 0) {
                            var data = result.data;
                            console.log(data);
                            if (data.length == 0) {
                                layer.alert("无法确认被奖惩人上级的职级", {
                                    icon: 5,
                                    title: "提示"
                                });

                            } else {
                                if (result.data.indexOf("L5") > -1) {
                                    //说明上级审批人存在L5级别
                                    $("[name='zLeaderIsL5']").val("yes");

                                } else {
                                    $("[name='zLeaderIsL5']").val("no");
                                }
                            }
                        }
                    }
                })
            }

            $("[name='gLeaders']").val(gUserUidsStr);
            if (gUserUidsStr != "" && gUserUidsStr != undefined) {
                $.ajax({
                    url: 'selectUser/getLeadersLevels',
                    type: 'post',
                    dataType: 'json',
                    data: JSON.stringify(gLeaderCodes),
                    contentType: "application/json;charset=utf-8",
                    success: function(result) {

                        if (result.status == 0) {
                            var data = result.data;
                            console.log(data);
                            if (data.length == 0) {
                                layer.alert("无法确认被奖惩人隔级的职级", {
                                    icon: 5,
                                    title: "提示"
                                });

                            } else {
                                if (result.data.indexOf("L5") > -1) {
                                    //说明上级审批人存在L5级别
                                    $("[name='gLeaderIsL5']").val("yes");

                                } else {
                                    $("[name='gLeaderIsL5']").val("no");
                                }
                            }
                        }
                    }
                })
            }
            $("[name='copyToByUserId']").val(copyUser);
        }
    }
    return true;

}

function rowChangeEvent(obj) {
    var tableName = $(obj).parent().parent().parent().parent().attr("name");
    if (tableName == 'table_3pmC') {
        addOnchangeForGetLeader();
    }

}
//为被奖惩人表人员添加onchange
function addOnchangeForGetLeader() {
    var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='获奖人员工号']").not(".no_data").find("input[type=text]").attr("onchange", "punishUserOnchange(this)");
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济奖励-奖金(元)']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");

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
    setTotalMoney();
    // if($(obj).val()=="0.00"){
    // $(obj).val("");
    // }
}
function isCopyTask() {
    if ($("#taskType").val() == "transfer") {
        //当前页面是抄送
        $("[name='GaQi']").parent().hide();
        $("[name='TyJQ']").parent().hide();
        $("[name='cN76']").parent().hide();

        $("#approval_tbody").parent().parent().parent().parent().parent().parent().hide();
    }

}
//重写excel导入数据填充到数据表格补充函数
function fileUploadChangeEvent() {
    var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var money = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济奖励-奖金(元)']").find("input").val();
        if (money != "" && money != null && money != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济奖励-奖金(元)']").find("input").change();
        }
        var userNo = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='获奖人员工号']").find("input[type=hidden]").val();
        if (userNo != "" && userNo != null && userNo != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='获奖人员工号']").find("input").change();
        }
    }

}
function copyUsers() {}

function judgeLength(obj) {
    var val = $(obj).val();
    if (val.length > 20) {
        layer.alert("长度超出20字符", {
            icon: 5,
            title: "提示"
        });
        var subStr = val.substr(0, 20);
        $(obj).val(subStr);
    }
}

function isTeam(obj) {
    var team = $(obj).val();
    if (team == "1") {
        formUtil.tableFun.changeEditByTableParam({
            name: 'table_3pmC',
            colNum: 1
        });
    } else {
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'table_3pmC',
            colNum: 1
        });
        formUtil.tableFun.clearTargetObjValueByParam({
            name: 'table_3pmC',
            colNum: 1
        });
    }
}

function setTotalMoney() {
    var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
    var totalMoneyVal = 0;
    for (var i = 0; i < userPunish.length; i++) {
        var faKuan = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济奖励-奖金(元)']").not(".no_data").find("input").val();
        if (faKuan != "" && faKuan != undefined) {
            totalMoneyVal += parseInt(faKuan);
        } else {
            totalMoneyVal += 0;
        }

    }
    $("[name='number_yjwc']").val(totalMoneyVal);
    checkAndfomartNumber($("[name='number_yjwc']"), 8, 2)
}
function rowRemoveChangeAfter(obj) {
    setTotalMoney();
}
// </script>
