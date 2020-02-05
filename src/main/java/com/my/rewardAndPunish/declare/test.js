// <script type='text/javascript'>
//惩罚
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
        var str = date + customerName + "发起的" + matter + "的惩罚流程"
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
    //内控部字段有值吗？因为curUserId在其他页面打开是获取不到的，所以我不能在每次窗体加载时获取
    var isNeiKong = $("[name='isInternalControlDepartment']").val();
    if (isNeiKong != "no" && isNeiKong != "yes") {
        getSysRoleAndSet();
        hideOrShowNeiKong();
    } else {
        hideOrShowNeiKong();
        if (isNeiKong == "yes") {
            $("[name='select_hDNB']").val("0");
        }
    }
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
    if (activityName == "被奖惩人上级审批") {
        $("[name='select_hDNB']").val("");

    }

    getGgLeaders();
    layui.form.render();

})
function hideOrShowNeiKong() {
    var isNeiKong = $("[name='isInternalControlDepartment']").val();

    if (isNeiKong == "yes") {
        //当前登录人属于内控部人员，所以要显示内控部信息
        showInternalControlDepartment();
    } else {
        hideInternalControlDepartment();
    }
}
var userUids = [];
//不是内控部的人员，不可以看见内控部填写信息
function getSysRoleAndSet() {
    $("[name='roleUid']").val("sysRole:1557200109684758547");
    var roleUid = $("[name='roleUid']").val();
    $.ajax({
        url: common.getPath() + '/sysUser/searchByRole?roleUid=' + roleUid,
        type: 'get',
        contentType: "application/json;charset=utf-8",
        success: function(result) {
            if (result.status == 0) {
                for (var i = 0; i < result.data.length; i++) {
                    var userUid = result.data[i].userUid;
                    userUids.push(userUid);
                }
                if (userUids.indexOf(curUserId) > -1) {
                    //当前登录人属于内控部人员，所以要显示内控部信息
                    $("[name='isInternalControlDepartment']").val("yes");

                    showInternalControlDepartment();
                } else {
                    $("[name='isInternalControlDepartment']").val("no");

                    hideInternalControlDepartment();
                }
                common.initSelect();
            }
        },
        error: function(result) {}
    });
}

//  隐藏内控部信息
function hideInternalControlDepartment() {
    $("#formSet").find("table[title='内控部信息']").eq(0).parent().hide();
}
// 显示内控部信息
function showInternalControlDepartment() {
    $("#formSet").find("table[title='内控部信息']").eq(0).parent().show();
}

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

                    //判断当前登录人级别是否已经L5级别
                    if (isFiveL5 == "yes" || isFiveL5 == "no") {
                        return;
                    }
                    var level = result.data.user.levels;

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
    var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val();
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

                        if (result.data[i].zUserUid != null && result.data[i].zUserUid != undefined && result.data[i].zUserUid != "") {
                            $(obj).parent().parent().find("td[data-label='连带处罚（直级）']").not(".no_data").find('input').val(result.data[i].zUserUid);
                            $(obj).parent().parent().find("td[data-label='上级员工号']").not(".no_data").find('input').val(result.data[i].zUserUid);
                        } else {
                            layer.msg("获取当前人员信息失败", {
                                icon: 2
                            });
                            $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='连带处罚（直级）']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='连带处罚（隔级）']").not(".no_data").find('input').val("");
                            continue;
                        }
                        if (result.data[i].gUserUid != null && result.data[i].gUserUid != undefined && result.data[i].gUserUid != "") {
                            $(obj).parent().parent().find("td[data-label='连带处罚（隔级）']").not(".no_data").find('input').val(result.data[i].gUserUid);
                            $(obj).parent().parent().find("td[data-label='隔级员工号']").not(".no_data").find('input').val(result.data[i].gUserUid);
                        } else {
                            layer.msg("获取当前人员信息失败", {
                                icon: 2
                            });
                            $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='连带处罚（直级）']").not(".no_data").find('input').val("");
                            $(obj).parent().parent().find("td[data-label='连带处罚（隔级）']").not(".no_data").find('input').val("");
                            continue;
                        }
                    }
                } else {
                    layer.msg("获取当前人员信息失败", {
                        icon: 2
                    });
                    $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input').val("");
                    $(obj).parent().parent().find("td[data-label='连带处罚（直级）']").not(".no_data").find('input').val("");
                    $(obj).parent().parent().find("td[data-label='连带处罚（隔级）']").not(".no_data").find('input').val("");
                }
            }
        },
        error: function(result) {}
    });
}

function check_before_submit() {
    var zUserUidsStr = "";
    var activityName = $("#activityName").val();
    //代办
    var pageType = $("#pageType").val();
    if (pageType != "finishedDetail") {
        var taskId = $("#taskId").val();
        var isZhiSong = $("[name='select_DSnM']").val();
        if (isZhiSong == "0") {
            //当前涉及L4以上舞弊事件
            $("[name='isZhiSong']").val("yes");
        } else {
            //当前不涉及L4以上舞弊事件
            $("[name='isZhiSong']").val("no");
        }
        var leaderCodes = [];
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
        var gUserUidsStr = "";
        var leaderCodes = [];
        var gLeaderCodes = [];
        if (activityName == "奖惩申报人提报流程") {
            var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");

            var copyUser = "";
            for (var i = 0; i < userPunish.length; i++) {
                if ($("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find('input').val() != "") {
                    copyUser += $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find('input').val() + ";";

                }
                if ($("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val() != "") {
                    var zCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val()
                    zUserUidsStr += zCode + ";";
                    leaderCodes.push(zCode);
                }
                if ($("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val() != "") {
                    var gCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val()
                    gUserUidsStr += gCode + ";";
                    gLeaderCodes.push(gCode);
                }
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
            getGgLeaders();
            $("[name='copyToByUserId']").val(copyUser);
        }
    }
    return true;

}
function getGgLeaders() {
    var zzLeadersStr = $("[name='zzLeaders']").val();
    if (zzLeadersStr = "" || zzLeadersStr == undefined) {

        // if (activityName = "被奖惩人隔级审批") {
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
                async: false,
                contentType: "application/json;charset=utf-8",
                success: function(result) {
                    if (result.status == 0) {
                        if (result.data.length > 0) {
                            for (var i = 0; i < result.data.length; i++) {
                                if (result.data[i].zUserUid == "" && result.data[i].curUserInfo.managernumber == "00000001") {
                                    zzLeadersStr += result.data[i].curUserInfo.managernumber + ";";
                                } else {
                                    zzLeadersStr += result.data[i].zUserUid + ";";
                                }

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
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find("input").attr("onchange", "punishUserOnchange(this);");
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").not(".no_data").find("input").attr("onchange", "totalMoney(this)");

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
    checkAndfomartNumber(obj, 8, 2)
    var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
    var totalMoneyVal = 0;
    for (var i = 0; i < userPunish.length; i++) {
        var faKuan = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").not(".no_data").find("input").val();
        var peiKuan = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").not(".no_data").find("input").val();
        if (faKuan != "" && faKuan != undefined) {
            totalMoneyVal += parseInt(faKuan);
        } else {
            totalMoneyVal += 0;
        }
        if (peiKuan != "" && peiKuan != undefined) {
            totalMoneyVal += parseInt(peiKuan);
        } else {
            totalMoneyVal += 0;
        }
    }
    $("[name='number_ajx5']").val(totalMoneyVal);
    checkAndfomartNumber($("[name='number_ajx5']"), 8, 2)
}
function isCopyTask() {
    if ($("#taskType").val() == "transfer") {
        //当前页面是抄送
        $("[name='GaQi']").parent().hide();
        $("[name='TyJQ']").parent().hide();
        $("[name='cN76']").parent().hide();
        $("[name='WKxQ']").parent().hide();

        $("#approval_tbody").parent().parent().parent().parent().parent().parent().hide();
    }

}
//重写excel导入数据填充到数据表格补充函数
function fileUploadChangeEvent() {
    var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
    for (var i = 0; i < userPunish.length; i++) {
        var peiKuan = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").find("input").val();
        if (peiKuan != "" && peiKuan != null && peiKuan != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-赔款']").find("input").change();
        }
        var userNo = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input").val();
        if (userNo != "" && userNo != null && userNo != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input").change();
        }
        var faKuan = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").val();
        if (faKuan != "" && faKuan != null && faKuan != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='经济处分-罚款']").find("input").change();
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

// </script>
