// <script type='text/javascript'>
$(function() {
    var activityName = $("#activityName").val();
    if (activityName == "行政管理部确认奖惩生效") {
        var insBusinessKey = $("#insBusinessKey").val();
        if (insBusinessKey == "申报惩罚" || insBusinessKey == "复议惩罚") {
            $("[name='isType']").val("0");
        }
        if (insBusinessKey == "申报奖励" || insBusinessKey == "复议奖励") {
            $("[name='isType']").val("1");
        }

    }
    $("[name='noticeType']").val("punish");
});

// </script>
