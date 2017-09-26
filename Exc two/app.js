function excTwo([arg1, arg2, arg3]) {
    let n = parseFloat(arg1);
    let m = parseFloat(arg2);
    let l = parseFloat(arg3);
    let socSchol = 0;
    let excSchol = 0;
    if (n < l && m > 4.50) {
        socSchol = (35 / 100) * l;
    }
    if (m >= 5.50) {
        excSchol = m * 25;
    }
    if (socSchol == 0 && excSchol == 0) {
        console.log("You cannot get a scholarship!");
    }
    else if (socSchol != 0 && socSchol > excSchol) {
        console.log(`You get a Social scholarship ${Math.floor(socSchol)} BGN`);
    }
    else if (excSchol != 0 && excSchol >= socSchol) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excSchol)} BGN`)
    }
}
excTwo(["300.00", "5.65", "420.00"]);