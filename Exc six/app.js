function excSix([arg1, arg2, arg3, arg4]) {
    let oneLevCoins = Number(arg1);
    let twoLevCoins = Number(arg2);
    let fiveLevNotes = Number(arg3);
    let sum = Number(arg4);
    for (var i = 0; i <= oneLevCoins; i++) {
        let oneLevCoinsSum = 1 * i;
        for (var j = 0; j <= twoLevCoins; j++) {
            let twoLevCoinsSum = 2 * j;
            for (var k = 0; k <= fiveLevNotes; k++){
                let fiveLevNotesSum = 5 * k;
                if (oneLevCoinsSum + twoLevCoinsSum + fiveLevNotesSum == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2lv. + ${k} * 5 lv. = ${sum} lv.`)
                }
            }
        }
    }
}
excSix(["5", "7", "13", "70"]);