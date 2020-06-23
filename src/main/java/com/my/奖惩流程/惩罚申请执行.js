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
        // 涉及钱就走奖励发放
        $("[name='isAboutMoney']").val("no");
        // 奖励不涉及人事
        $("[name='isAboutHr']").val("no");
        $("[name='table_3pmC'] tbody").find("tr").each(function() {
            var totalM = parseFloat($(this).find("td[data-label='经济处分-罚款']").find("input").val());
            var totalM2 = parseFloat($(this).find("td[data-label='经济处分-赔款']").find("input").val());
            var totalM3 = parseFloat($(this).find("td[data-label='人力处罚']").find("input").val());
            totalM = isNaN(totalM) ? 0 : totalM;
            totalM2 = isNaN(totalM2) ? 0 : totalM2;
            if (totalM > 0) {
                $("[name='isAboutMoney']").val("yes");
            }
            if (totalM2 > 0) {
                $("[name='isAboutMoney']").val("yes");
            }
            if (totalM3) {
                if ("no" != totalM3) {
                    $("[name='isAboutHr']").val("yes");
                }
            }
        })

    }
    $("[name='noticeType']").val("punish");
});

// </script>
