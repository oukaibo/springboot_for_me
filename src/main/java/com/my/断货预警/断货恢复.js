// <script type='text/javascript'>
$(function() {

    if ($("#activityName").val() == "计划管理部申请人" && $("#taskStatus").val() != 32) {
        initTable()
        getgoodsInfo();

    }
    initChanpin()
    formUtil.tableFun.chooseModelShowByTableParam({
        name: 'goodInfo',
        colNum: 8
    })
    $("[name='goodInfo'] tbody tr").find("i[title='添加新的一行']").remove();
});
function rowChangeEvent() {
    initChanpin()
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
function getgoodsInfo() {
    $.ajax({
        url: common.getPath() + '/LyfShortageGoods/selectNoActionGoodsUidByUserUid',
        type: 'post',
        dataType: 'json',
        success: function(result) {
            var data = result.data
            if (data == null) {
                alert("没有可以断货恢复的商品")
                return;
            }
            for (var i = 0; i < data.length - 1; i++) {
                formUtil.tableFun._addDataRow("goodInfo")
            }
            var trObj = $("[name='goodInfo'] tbody tr");

            for (var i = 0; i < trObj.length; i++) {
                trObj.eq(i).find("td[data-label='商品编码'] input").val(data[i].goodId)
                trObj.eq(i).find("td[data-label='规格(箱/公斤)'] input").val(data[i].specifications)
                //trObj.eq(i).find("td[data-label='对应产品经理'] input").val(data[i].productManager)
                //trObj.eq(i).find("td[data-label='说明'] input").val(data[i].explain)
                $.ajax({
                    url: common.getPath() + '/sysGood/getGoodInfo',
                    type: 'post',
                    dataType: 'json',
                    async: false,
                    data: {
                        "skuCode": data[i].goodId
                    },
                    success: function(result) {
                        var data2 = result.data
                        console.log(data2.categoryName)
                        trObj.eq(i).find("td[data-label='产品类别'] input").val(data2.categoryName)
                        trObj.eq(i).find("td[data-label='品名'] input").val(data2.name)
                        trObj.eq(i).find("td[data-label='供应商编码'] input").val(data2.skuSupplierDTOList[0].supplierCode)
                        trObj.eq(i).find("td[data-label='供应商名称'] input").val(data2.skuSupplierDTOList[0].supplierName)

                    }
                });
            }
        }
    });

}

function initTable() {
    formUtil.tableFun.changeEditByTableParam({
        name: 'goodInfo',
        colNum: 6
    });
    //formUtil.tableFun.changeEditByTableParam({name:'goodInfo',colNum:7});

}
// </script>
