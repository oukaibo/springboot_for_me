{/* <script type='text/javascript'>  */
}
var taskId = $("#taskId").val();
var needJudgeArr = ['审核奖惩申请(地区总经理)', '审核奖惩申请(运营发展副总裁)', '被奖惩人上级审批', '被奖惩人隔级审批', '奖惩最终审批'];
//获得当前登录人
var curUserId = $("#userId").val();
$(function() {
    $("[name='isNeiKongZhiSong']").val("1");
    accordingActivityHideOpnionField();
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
        colNum: 7
    });
    formUtil.tableFun.chooseModelHiddenByTableParam({
        name: 'table_3pmC',
        colNum: 8
    });

    if (activityName == "被奖惩人上级审批") {
        $("[name='select_hDNB']").val("");

    }

    getGgLeaders();
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
    // 加载公司代码
    queryCompanyCode();
    judgeNeiQin();
    var detailUrl = $("[name='pageDetailUrl']").val();
    if (detailUrl) {
        $("[name='judgeDetail']").show();
    } else {
        $("[name='judgeDetail']").hide();
    }
    layui.form.render();

})

function isNeiKongZhiSong(obj) {
    var is = $(obj).val();
    $("[name='isNeiKongZhiSong']").val(is);
}

// 是否内勤
function judgeNeiQin(obj) {

    var val = $("[name='judgeNeiQin']").val();
    // 是内勤
    if (val == "0") {
        formUtil.tableFun.changeNotEditByTableParam({
            name: 'table_3pmC',
            colNum: 1
        });
        $("[name='table_3pmC']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").show();
        // 是内勤就隐藏所属公司代码
        formUtil.changeHiddenByName("theCompany");
        // 隐藏必填公司代码
        formUtil.changeHiddenMustByName("theCompany");
        formUtil.changeNotEditByName("theCompany");
    } else {
        $("[name='table_3pmC'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("readonly");
        $("[name='table_3pmC'] tbody").find("tr").find("td[data-label='处罚人员']").find("input[type='text']").removeAttr("disabled");
        $("[name='table_3pmC']").find("tbody").find("tr").find("td[data-label='处罚人员']").find("i").hide();

        // 是内勤就显示所属公司代码
        formUtil.changeShowByName("theCompany");
        // 显示必填公司代码
        formUtil.changeShowMustByName("theCompany");
        formUtil.changeEditByName("theCompany");
    }

}

function clearTable() {
    $('[name="table_3pmC"]').find("tbody").find("tr:gt(0)").remove();
    $('[name="table_3pmC"]').find("tbody").find("td input").val("");
    $('[name="table_3pmC"]').find("tbody").find("td select").val("");
}
//惩罚

// 省份初始化
function initProvAndCity() {

    $.each(cityJson, function(i, val) {
        if (val.item_code.substr(2, 4) == '0000') {}
    });

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
            var selectArr = new Array();
            for (var i = 0; i < result.length - 1; i++) {
                if (result[i].companyName.indexOf("Country") < 0) {
                    selectArr.push({
                        name: result[i].companyCode,
                        value: result[i].companyCode
                    });
                    sb.append("<option value='" + result[i].companyCode + "'>" + result[i].companyCode + "</option>");
                }
            }
            //             初始化公司代码
            $("#theCompany").find("option[value='selectOption']").after(sb.toString());
            common.initSelect();
        }
    })
}
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

function judgeToDetailUrl() {
    var detailUrl = $("[name='pageDetailUrl']").val();
    if (detailUrl) {
        window.open(detailUrl);
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

    if (curUserId == "00000001") {
        $("[name='isL5Level']").val("yes");
    } else {
        $("[name='isL5Level']").val("no");
    }
    // if (curUserId != "" && curUserId != null && curUserId != undefined) {
    //     $.ajax({
    //         url: common.getPath() + '/selectUser/getDepartmentPrincipalByUserId?userId=' + curUserId,
    //         type: 'get',
    //         contentType: "application/json;charset=utf-8",
    //         success: function(result) {
    //             if (result.status == 0) {
    //                 for (var i = 0; i < result.data.users.length; i++) {
    //                     var userUid = result.data.users[i].userUid;
    //                     theUserUids.push(userUid);
    //                 }
    //                 if (activityName == "奖惩申报人提报流程") {
    //                     //只有第一个环节需要判断是不是部门负责人
    //                     if (theUserUids.indexOf(curUserId) > -1) {
    //                         //当前登录人是部门负责人
    //                         $("[name='isDepartmentManager']").val("yes");
    //                     } else {
    //                         $("[name='isDepartmentManager']").val("no");
    //                     }
    //                 }

    //                 //判断当前登录人级别是否已经L5级别
    //                 if (isFiveL5 == "yes" || isFiveL5 == "no") {
    //                     return;
    //                 }
    //                 var level = result.data.user.levels;

    //                 if (level == "L5") {
    //                     $("[name='isL5Level']").val("yes");
    //                 } else {
    //                     $("[name='isL5Level']").val("no");
    //                 }

    //                 common.initSelect();
    //             }
    //         },
    //         error: function(result) {}
    //     });
    // }

}

function accordingNeiQinGiveVal(obj) {
    var judgeNeiQin = $("[name='judgeNeiQin']").val();
    if ("1" == judgeNeiQin) {
        var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=text]').val();
        $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val(userCode);

    }
}
function punishUserOnchange(obj) {
    var userCode = $(obj).parent().parent().find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val();
    var codes = [];
    if (userCode) {
        codes.push(userCode);
    }
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

                        if (result.data[i].curUserInfo == null) {
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
                            $(obj).parent().parent().find("td[data-label='隔级员工号']").not(".no_data").find('input').val(result.data[i].gUserUid);
                        } else {
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
function accordingActivityHideOpnionField() {
    var activityName = $("#activityName").val();
    $("[name='select_hDNB']").val("");
    // 上级
    if (needJudgeArr.indexOf(activityName) > -1) {
        formUtil.changeShowByName('select_hDNB');
        formUtil.changeShowMustByName("select_hDNB");
        formUtil.changeEditByName("select_hDNB");
    } else {
        formUtil.changeHiddenByName('select_hDNB');
        formUtil.changeHiddenMustByName("select_hDNB");
        formUtil.changeNotEditByName("select_hDNB");
    }
    layui.form.render("select");
}
function accordingActivityHideOpnionField2() {
    var activityName = $("#activityName").val();
    switch (activityName) {
        case '审核奖惩申请(地区总经理)':
            // 上级
            formUtil.changeHiddenByName('select_hDNB');
            formUtil.changeHiddenMustByName("select_hDNB");
            // 隔级
            formUtil.changeHiddenByName('select_7sPn');
            formUtil.changeHiddenMustByName("select_7sPn");
            // 地区总裁
            formUtil.changeHiddenByName('select_zC46');
            formUtil.changeHiddenMustByName("select_zC46");
            // 地区总经理
            formUtil.changeShowByName('select_n5rN');
            formUtil.changeShowMustByName("select_n5rN");
            break;
        case '审核奖惩申请(运营发展副总裁)':
            // 上级
            formUtil.changeHiddenByName('select_hDNB');
            formUtil.changeHiddenMustByName("select_hDNB");
            // 隔级
            formUtil.changeHiddenByName('select_7sPn');
            formUtil.changeHiddenMustByName("select_7sPn");
            // 地区总裁
            formUtil.changeShowByName('select_zC46');
            formUtil.changeShowMustByName("select_zC46");
            // 地区总经理
            formUtil.changeShowByName('select_n5rN');
            formUtil.changeShowMustByName("select_n5rN");
            break;
        case '被奖惩人上级审批':
            // 上级
            formUtil.changeShowByName('select_hDNB');
            formUtil.changeShowMustByName("select_hDNB");
            // 隔级
            formUtil.changeHiddenByName('select_7sPn');
            formUtil.changeHiddenMustByName("select_hDNB");
            // 地区总裁
            formUtil.changeHiddenByName('select_zC46');
            formUtil.changeHiddenMustByName("select_hDNB");
            // 地区总经理
            formUtil.changeHiddenByName('select_n5rN');
            formUtil.changeHiddenMustByName("select_hDNB");
            break;
        case '被奖惩人隔级审批':
            // 上级
            formUtil.changeShowByName('select_hDNB');
            formUtil.changeShowMustByName("select_hDNB");
            // 隔级
            formUtil.changeShowByName('select_7sPn');
            formUtil.changeShowMustByName("select_7sPn");
            // 地区总裁
            formUtil.changeHiddenByName('select_zC46');
            formUtil.changeHiddenMustByName("select_zC46");
            // 地区总经理
            formUtil.changeHiddenByName('select_n5rN');
            formUtil.changeHiddenMustByName("select_n5rN");
            break;
        case '奖惩最终审批':
            var judgeNeiQin = $("[name='judgeNeiQin']").val();
            if (judgeNeiQin == '0') {
                // 上级
                formUtil.changeHiddenByName('select_hDNB');
                formUtil.changeHiddenMustByName("select_hDNB");
                // 隔级
                formUtil.changeHiddenByName('select_7sPn');
                formUtil.changeHiddenMustByName("select_7sPn");
                // 地区总裁
                formUtil.changeShowByName('select_zC46');
                formUtil.changeShowMustByName("select_zC46");
                // 地区总经理
                formUtil.changeShowByName('select_n5rN');
                formUtil.changeShowMustByName("select_n5rN");
            } else {
                // 上级
                formUtil.changeShowByName('select_hDNB');
                formUtil.changeShowMustByName("select_hDNB");
                // 隔级
                formUtil.changeShowByName('select_7sPn');
                formUtil.changeShowMustByName("select_7sPn");
                // 地区总裁
                formUtil.changeHiddenByName('select_zC46');
                formUtil.changeHiddenMustByName("select_zC46");
                // 地区总经理
                formUtil.changeHiddenByName('select_n5rN');
                formUtil.changeHiddenMustByName("select_n5rN");
            }
            break;
        default:
            // 上级
            formUtil.changeHiddenByName('select_hDNB');
            formUtil.changeHiddenMustByName("select_hDNB");
            // 隔级
            formUtil.changeHiddenByName('select_7sPn');
            formUtil.changeHiddenMustByName("select_7sPn");
            // 地区总裁
            formUtil.changeHiddenByName('select_zC46');
            formUtil.changeHiddenMustByName("select_zC46");
            // 地区总经理
            formUtil.changeHiddenByName('select_n5rN');
            formUtil.changeHiddenMustByName("select_n5rN");
            break;
    }
}

function setOpnionByActivity() {
    var nameField = "select_hDNB";
    var activityName = $("#activityName").val();
    if (nameField && needJudgeArr.indexOf(activityName) > -1) {
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
function setOpnionByActivity2() {
    var nameField = "";
    var activityName = $("#activityName").val();
    switch (activityName) {
        case '审核奖惩申请(地区总经理)':
            nameField = "select_n5rN"
            break;
        case '审核奖惩申请(运营发展副总裁)':
            nameField = "select_zC46"
            break;
        case '被奖惩人上级审批':
            nameField = "select_hDNB"
            break;
        case '被奖惩人隔级审批':
            nameField = "select_7sPn"
            break;
        default:
            break;
    }
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

function setLeadersAndL5() {
    var zUserUidsStr = "";
    var leaderCodes = [];
    var gUserUidsStr = "";
    var leaderCodes = [];
    var gLeaderCodes = [];
    var activityName = $("#activityName").val();
    var copyUser = "";
    if (activityName == "奖惩申报人提报流程") {
        var userPunish = $("[name='table_3pmC']").find("tbody").find("tr");
        var companyCodeHaHaHa = "";
        for (var i = 0; i < userPunish.length; i++) {
            var punishUserCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find('input[type=hidden]').val();
            var shangJiUserCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='上级员工号']").not(".no_data").find('input').val();
            var geJiUserCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='隔级员工号']").not(".no_data").find('input').val();
            var companyCodeHaHa = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='公司编码']").not(".no_data").find('input').val();
            if (punishUserCode != "") {
                copyUser += punishUserCode + ";";
            }
            if (shangJiUserCode != "") {
                zUserUidsStr += shangJiUserCode + ";";
                leaderCodes.push(shangJiUserCode);
            }
            if (geJiUserCode != "") {
                gUserUidsStr += geJiUserCode + ";";
                gLeaderCodes.push(geJiUserCode);
            }
            if (companyCodeHaHa != "") {
                companyCodeHaHaHa += companyCodeHaHa + ";";
            }
        }
        if (companyCodeHaHaHa) {
            $("[name='companyNum']").val(companyCodeHaHaHa);
        }
        $("[name='zLeaders']").val(zUserUidsStr);

        if (zUserUidsStr) {
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
        if (gUserUidsStr) {
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

function check_before_submit() {
    var activityName = $("#activityName").val();
    //代办
    var pageType = $("#pageType").val();
    if (pageType != "finishedDetail") {
        var isZhiSong = $("[name='select_DSnM']").val();
        if (isZhiSong == "0") {
            //当前涉及L4以上舞弊事件
            $("[name='isZhiSong']").val("yes");
        } else {
            //当前不涉及L4以上舞弊事件
            $("[name='isZhiSong']").val("no");
        }
        setOpnionByActivity();
        setLeadersAndL5();
        getGgLeaders();
    }
    return true;
}
// 获得直级领导
function getGgLeaders() {
    var zzLeadersStr = $("[name='zzLeaders']").val();
    if (!zzLeadersStr) {

        // if (activityName = "被奖惩人隔级审批") {
        var gLeadersCodes = $("[name='gLeaders']").val();
        var zzLeadersStr = "";

        if (gLeadersCodes) {
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
                                var leaders = result.data[i];
                                if (leaders.zUserUid == "" && leaders.curUserInfo.managernumber == "00000001") {
                                    zzLeadersStr += leaders.curUserInfo.managernumber + ";";
                                } else {
                                    zzLeadersStr += leaders.zUserUid + ";";
                                }
                            }
                        }
                    }
                    if (zzLeadersStr) {
                        $("[name='zzLeadersStr']").val(zzLeadersStr);
                    } else {
                        $("[name='zzLeadersStr']").val("");
                    }
                },
                error: function(result) {}
            });

        }
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
        var userCode = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").not(".no_data").find("input[type=text]").attr("onchange", "accordingNeiQinGiveVal(this);punishUserOnchange(this);");
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
    if (money < 0) {
        layer.msg("金额不能小于0");
        $(obj).val("0");
        return;
    }
    checkAndfomartNumber(obj, 8, 2)
    setTotalMoney();
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
        var userNo = $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=hidden]").val();
        if (userNo != "" && userNo != null && userNo != undefined) {
            $("[name='table_3pmC']").find("tbody").find("tr").eq(i).find("td[data-label='处罚人员']").find("input[type=text]").change();
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
function setTotalMoney() {
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
    checkAndfomartNumber($("[name='number_ajx5']"), 8, 2);
}
function rowRemoveChangeAfter(obj) {
    setTotalMoney();
}

// </script>
