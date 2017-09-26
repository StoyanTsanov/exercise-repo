function excThree([arg1, arg2, arg3]) {
    let picCount = Number(arg1);
    let picType = arg2;
    let orderType = arg3;
    let price = 0;
    if (picType == "9X13"){
        if (orderType == "office") {
            if (picCount >= 50) {
                price = (0.16 * picCount) - (1 / 20 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.16 * picCount);
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
        else if (orderType == "online") {
            if (picCount >= 50) {
                price = (0.16 * picCount) - (1 / 20 * (0.16 * picCount)) - (1 / 50 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.16 * picCount) - (1 / 50 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
    }
    else if (picType == "10X15") {
        if (orderType == "office") {
            if (picCount >= 80) {
                price = (0.16 * picCount) - (3 / 100 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.16 * picCount) ;
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
        else if (orderType == "online") {
            if (picCount >= 80) {
                price = (0.16 * picCount) - (3 / 100 * (0.16 * picCount)) - (1 / 50 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.16 * picCount) - (1 / 50 * (0.16 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
    }
    else if (picType == "13X18") {
        if (orderType == "office") {
            if (picCount >= 50 && picCount <= 100) {
                price = (0.38 * picCount) - (3 / 100 * (0.38 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else if (picCount > 100) {
                price = (0.38 * picCount) - (1 / 20 * (0.38 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.38 * picCount);
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
        else if (orderType == "online") {
            if (picCount >= 50 && picCount <= 100) {
                price = (0.38 * picCount) - (3 / 100 * (0.38 * picCount)) - (1 / 50 * (0.38 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else if (picCount > 100) {
                price = (0.38 * picCount) - (1 / 20 * (0.38 * picCount)) - (1 / 50 * (0.38 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (0.38 * picCount) - (1 / 50 * (0.38 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
    }
    else if (picType == "20X30") {
        if (orderType == "office") {
            if (picCount >= 10 && picCount <= 50) {
                price = (2.90 * picCount) - (7 / 100 * (2.90 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else if (picCount > 50) {
                price = (2.90 * picCount) - (9 / 100 * (2.90 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (2.90 * picCount);
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
        else if (orderType == "online") {
            if (picCount >= 10 && picCount <= 50) {
                price = (2.90 * picCount) - (7 / 100 * (2.90 * picCount)) + (1 / 50 * (2.90 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else if (picCount > 50) {
                price = (2.90 * picCount) - (9 / 100 * (2.90 * picCount)) + (1 / 50 * (2.90 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
            else {
                price = (2.90 * picCount) - (1 / 50 * (2.90 * picCount));
                console.log(`${price.toFixed(2)}BGN`);
            }
        }
    }
} 
excThree(["105", "20X30", "office"]);
