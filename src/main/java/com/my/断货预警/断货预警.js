// <script type='text/javascript'>
$(function() {

    formUtil.tableFun.changeNotEditByTableParam({
        name: 'goodInfo',
        colNum: 0
    })
    formUtil.tableFun.changeNotEditByTableParam({
        name: 'goodInfo',
        colNum: 2
    })
    formUtil.tableFun.changeNotEditByTableParam({
        name: 'goodInfo',
        colNum: 4
    })
    formUtil.tableFun.changeNotEditByTableParam({
        name: 'goodInfo',
        colNum: 5
    })
    var trObj = $("table[name='goodInfo'] tbody tr").find('td[data-label="商品编码"] input')
    initChanpin()
    trObj.attr("onchange", "getgoodsInfo(this)")
});

function rowChangeEvent() {
    initChanpin()
}

function rowChangeEvent(obj, sign) {

    var trObj = $("table[name='goodInfo'] tbody tr:last").find('td[data-label="商品编码"] input')
    trObj.attr("onchange", "getgoodsInfo(this)")
    var body = $("table[name='goodInfo'] tbody")
    if (body.find("tr").length > 10) {
        alert("最多添加十条商品记录！")
        body.find("tr:last").remove();
        return
    }
}
function getgoodsInfo(obj) {

    $.ajax({
        url: common.getPath() + '/sysGood/getGoodInfo',
        type: 'post',
        dataType: 'json',
        data: {
            "skuCode": $(obj).val()
        },
        success: function(result) {
            if (result.status == 1) {
                alert("未查到该商品！")
                return;
            }
            var data = result.data

            var trObj = $(obj).parent().parent()
            trObj.find("td[data-label='产品类别'] input").val(data.categoryName)
            trObj.find("td[data-label='品名'] input").val(data.name)
            trObj.find("td[data-label='供应商编码'] input").val(data.skuSupplierDTOList[0].supplierCode)
            trObj.find("td[data-label='供应商名称'] input").val(data.skuSupplierDTOList[0].supplierName)

        }
    });

}

function initChanpin() {
    $.ajax({
        url: common.getPath() + '/sysUser/searchByRole',
        type: 'post',
        dataType: 'json',
        async: false,
        data: {
            "roleUid": "sysRole:1558515942723103442"
        },
        success: function(result) {
            var trObj = $("table[name='goodInfo'] tbody tr").find("td[data-label='对应产品经理'] select")
            trObj.append("<option value=''>--请选择--</option>")
            var data = result.data
            for (var i = 0; i < data.length; i++) {
                var userUid = data[i].userUid;
                var userName = data[i].userName;
                var options = "<option value='" + userName + "-" + userUid + "'>" + userName + "-" + userUid + "</option>";
                trObj.append(options)
            }
            common.initSelect();

        }
    });

}

// </script>
