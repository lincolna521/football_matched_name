
function findEvents(min, home, away, score, sourceMin, sourceHome, sourceAway, sourceScore) {
    // min A站比赛时间 
    // home A站主队名称
    // away A站客队名称
    // score A站最新比分
    // sourceMin B站比赛时间  
    // sourceHome B站主队名称
    // sourceAway B站客队名称
    // sourceScore B站最新比分
    if (min - sourceMin != 0) return;
    if (score != sourceScore) return;
    let isGoon = true;
    if (sourceHome.toUpperCase().indexOf("WOMEN") > 0 || sourceHome.toUpperCase().indexOf("FEMMINILE") > 0) {
        if (home.toUpperCase().indexOf("(W)") < 0) {
            isGoon = false;
        }
    } 
    // 如果365比赛名称包含了U系列,则其它平台必须包含U系列或者后备队
    if (sourceHome.toUpperCase().indexOf("U1") > 0 || sourceHome.toUpperCase().indexOf("U2") > 0) {
        if ((home.toUpperCase().indexOf("U1") < 0 && home.toUpperCase().indexOf("U2") < 0)
            && (home.toUpperCase().indexOf("RISERVE") < 0)
            && (home.toUpperCase().indexOf("RESERVES") < 0)) {
            isGoon = false;
        }
    } 
    // 如果365比赛包含了后备队，则其它平台必须包含U系列或者后备队
    if (sourceHome.toUpperCase().indexOf("RESERVES") > 0) {
        if ((home.toUpperCase().indexOf("U1") < 0 && home.toUpperCase().indexOf("U2") < 0)
            && (home.toUpperCase().indexOf("RISERVE") < 0)
            && (home.toUpperCase().indexOf("RESERVES") < 0)
            && (home.toUpperCase().indexOf("II") < 0)
        ) {
            isGoon = false;
        }
    }
    // 塞浦路斯队名都必须包含U系列
    if ((home.toUpperCase().indexOf("U1") > 0 || home.toUpperCase().indexOf("U2") > 0) && (away.toUpperCase().indexOf("U1") > 0 || away.toUpperCase().indexOf("U2") > 0)) {
        if ((sourceHome.toUpperCase().indexOf("U1") < 0 && sourceHome.toUpperCase().indexOf("U2") < 0)
            && (sourceHome.toUpperCase().indexOf("RISERVE") < 0) && (sourceHome.toUpperCase().indexOf("RESERVES") < 0)) {
            isGoon = false;
        }
    }

    if (isGoon) {
        if (sourceHome.toUpperCase().indexOf(home) >= 0 && sourceAway.toUpperCase().indexOf(away) >= 0) {
            return true;
        }
        if (sourceHome.toUpperCase().indexOf(home.toUpperCase()) >= 0 && sourceAway.toUpperCase().indexOf(away.toUpperCase()) >= 0) {
            return true;
        }
        if (removeMark(sourceHome).indexOf(removeMark(home)) >= 0 && removeMark(sourceAway).indexOf(removeMark(away)) >= 0) {
            return true;
        }

        if (removeMark(sourceHome).indexOf(removeMark(home)) >= 0 && removeMark(away).indexOf(removeMark(sourceAway)) >= 0) {
            return true;
        }

        if (removeMark(home).indexOf(removeMark(sourceHome)) >= 0 && removeMark(away).indexOf(removeMark(sourceAway)) >= 0) {
            return true;
        }

        if (removeMark(home).indexOf(removeMark(sourceHome)) >= 0 && removeMark(sourceAway).indexOf(removeMark(away)) >= 0) {
            return true;
        }

        if (sourceHome == home || sourceAway == away) {
            return true;
        }

        if (removeMark(sourceHome) == (removeMark(home)) || removeMark(sourceAway) == (removeMark(away))) {
            return true;
        }
        sourceHome = removeMark(sourceHome)
        home = removeMark(home)
        sourceAway = removeMark(sourceAway)
        away = removeMark(away)
        //TODO 单词级别匹配
        if (s1 != s2) return false;
    }

    return false;
}