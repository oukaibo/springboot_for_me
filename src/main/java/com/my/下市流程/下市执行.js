// <script type='text/javascript'>

$(function() {

    $("#hidden_text_JEZw").val("1");
    $("#hidden_text_ywkf").val("0")
    $("#hidden_text_bHWj").val("0")
    $("#hidden_text_DZQt").val("0")
    $("#hidden_text_dW45").val("0")
    $("#hidden_text_2JzC").val("0")

    $("#select_hrFZ").val("1")
    $("#select_TzmZ").val("1")
    $("#select_NBdW").val("1")

    judge()

});

function judge() {
    if ($("#activityName").val() == "PM确认") {
        var currentTime = new Date();
        var startTime = new Date($("#insInitDate").val().replace(/-/g, "/"));
        if ((currentTime - startTime) / (1000 * 60 * 60 * 24) > 60)
            $("#hidden_text_QPyz").val("1")
        else
            $("#hidden_text_QPyz").val("0")

        console.log(currentTime)
        console.log(startTime)
        console.log((currentTime - startTime) / (1000 * 60 * 60 * 24))
    }
}

function change() {

    var choose = $('input[name="select_W5SX"]').val().split(",");
    console.log("111111111: : " + choose)
    if ($.inArray("1", choose) != -1)
        $("#hidden_text_2JzC").val("1")
    else
        $("#hidden_text_2JzC").val("0")

    if ($.inArray("2", choose) != -1)
        $("#hidden_text_dW45").val("1")
    else
        $("#hidden_text_dW45").val("0")

    if ($.inArray("3", choose) != -1)
        $("#hidden_text_DZQt").val("1")
    else
        $("#hidden_text_DZQt").val("0")

    if ($.inArray("4", choose) != -1)
        $("#hidden_text_bHWj").val("1")
    else
        $("#hidden_text_bHWj").val("0")

    if ($.inArray("5", choose) != -1)
        $("#hidden_text_ywkf").val("1")
    else
        $("#hidden_text_ywkf").val("0")

    if ($.inArray("6", choose) != -1)
        $("#hidden_text_JEZw").val("1")
    else
        $("#hidden_text_JEZw").val("0")

}

// </script>
