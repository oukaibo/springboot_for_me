// <script type='text/javascript'>
$(function() {

    $("#hidden_text_bnZj").val($("#departNo").val())

    judgeIfSameDepartment()
    changeUnderReason()
    changeAll()
    $("[name='goodTable'] tbody tr td").eq(0).find("input").attr("onchange", "getGoodInfo(this)")
})

function changeAll() {
    changSave();
    changeIfSave()
    changeIfSave2()
}

function changeIfSave() {
    if ($("#select_rJHH").val() == "1") {
        $("#hidden_text_necP").val("1")
    } else {
        $("#hidden_text_necP").val("0")
    }

}

function changeIfSave2() {
    if ($("#select_tEiZ").val() == "1") {
        $("#hidden_text_necP").val("1")
    } else {
        $("#hidden_text_necP").val("0")
    }

}

function judgeIfSameDepartment() {
    $("[name='ifSameDepart']").val("0")
    $.ajax({
        type: 'POST',
        url: common.getPath() + "/sysUser/allSysUser",
        async: false,
        data: {
            userNo: $("#userId").val(),
        },
        success: function(result) {

            var applyDepartList = result.dataList[0].sysUserDepartmentList
            //console.log(applyDepartList)
            $.ajax({
                type: 'POST',
                url: common.getPath() + "/sysUser/allSysUser",
                async: false,
                data: {
                    userNo: $("#choose_user_nJPA_hide").val(),
                },
                success: function(result) {

                    var PMDepartList = result.dataList[0].sysUserDepartmentList

                    for (var i = 0; i < PMDepartList.length; i++) {
                        console.log(PMDepartList[i].departUid)
                        for (var j = 0; j < applyDepartList.length; j++) {
                            console.log(applyDepartList[j].departUid)
                            if (PMDepartList[i].departUid == null || applyDepartList[j].departUid == null) {
                                continue
                            }

                            if (PMDepartList[i].departUid == applyDepartList[j].departUid) {
                                $("[name='ifSameDepart']").val("1")
                                return;
                            }
                        }
                    }
                    console.log($("[name='ifSameDepart']").val())
                }
            });
        }
    });

}

function changeUnderReason() {

    if ($("#select_XXc6").val() == "9") {//formUtil.changeShowByName("text_ERjr")
    } else {//formUtil.changeHiddenByName("text_ERjr")
    }
}
function addChangeEvent() {

    var trObj = $("table[name='goodTable'] tbody tr:last")
    trObj.find('td[data-label="商品编码"]').find("input").attr("onchange", "getGoodInfo(this)")
}
function getGoodInfo(obj) {
    var tdObj = $(obj).parent().parent().find("td")
    var goodNum = $(obj).val()
    $.ajax({
        type: 'POST',
        url: common.getPath() + "/sysGood/getGoodInfo",
        async: false,
        data: {
            skuCode: goodNum,
        },
        success: function(result) {
            var data = result.data
            console.log(data)
            if (data != null) {
                tdObj.eq(1).find("input").val(data.name);
                //商品名称
                tdObj.eq(2).find("input").val(data.skuTypeName);
                //商品品类
                tdObj.eq(4).find("input").val(data.skuSupplierDTOList[0].supplierCode);
                //供应商编码
                tdObj.eq(5).find("input").val(data.skuSupplierDTOList[0].supplierName);
                //供应商名称
            } else {
                alert("未查到该商品信息，请重新输入！")
                tdObj.eq(0).find("input").val("");
                tdObj.eq(1).find("input").val("");
                //商品名称
                tdObj.eq(2).find("input").val("");
                //商品品类
                tdObj.eq(4).find("input").val("");
                //供应商编码
                tdObj.eq(5).find("input").val("");
                //供应商名称
            }

        },
        error: function(result) {
            alert("提交失败" + JSON.stringify(result));
        }
    });
}

function changSave() {

    if ($("#select_E8AS").val() == "1") {
        formUtil.changeNotEditByName("textarea_KAsp")
        formUtil.changeShowByName("select_5rrC")
        $("#textarea_KAsp").val("")
        $("#hidden_text_necP").val("0")

    } else {
        formUtil.changeEditByName("textarea_KAsp")
        formUtil.changeHiddenByName("select_5rrC")
        $("#hidden_text_necP").val("1")

    }

}

function changeOther() {
    $("#select_XXc6").find("option:last").html($("#text_ERjr").val());
}

// </script>
