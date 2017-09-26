function excOne([arg1, arg2, arg3]) {
    let n = Number(arg1);
    let width = parseFloat(arg2);
    let length = parseFloat(arg3);
    let pokrArea = n * (width + 2 * 0.3) * (length + 2 * 0.3);
    let kareArea = n * (width / 2) * (width / 2);
    let priceUsd = pokrArea * 7 + kareArea * 9;
    let priceBgn = priceUsd * 1.85;
    console.log(`${priceUsd.toFixed(2)} USD`);
    console.log(`${priceBgn.toFixed(2)} BGN`);
}
excOne(["5", "1.00", "0.50"]);