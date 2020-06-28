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
        $("[name='isAboutMoney']").val("no");
        $("[name='isAboutHr']").val("no");
        $("[name='table_WZJ6'] tbody").find("tr").each(function() {
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
    $("[name='isPunishFranchiseeHidden']").val("0");
    $("[name='noticeType']").val("punish");
});
function check_before_submit() {
    var judgeNeiQin = $("[name='judgeNeiQin']").val();
    if ("1" == judgeNeiQin) {
        var isPunishFranchisee = $("[name='isPunishFranchisee']").val();
        if (!isPunishFranchisee) {
            layer.msg("非内勤必须填写是否处罚加盟商字段", {
                icon: 2
            });
            return false;
        }
        if (isPunishFranchisee == '0') {
            $("[name='isPunishFranchiseeHidden']").val("1");
        }
    }
    return true;
}
// </script>
