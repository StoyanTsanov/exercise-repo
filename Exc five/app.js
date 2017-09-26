function excFive([arg1]) {
    let N = Number(arg1);
    //upper half
    let dot = "."
    for (var i = 0; i < N; i++) {
        if (N - i == 1) {
            dot = "*";
        }
        console.log(".".repeat(i) + "*" + dot.repeat(N - i) + "*" + dot.repeat(N - i) + "*" + ".".repeat(i))

    }

    //middle static
    console.log("*".repeat(2 * N + 3));

    //lower half
    for (var j = N - 1; j >= 0; j--) {
        if (N - j == 1) {
            dot = "*";
        }
        else {
            dot = ".";
        }
        console.log(".".repeat(j) + "*" + dot.repeat(N - j) + "*" + dot.repeat(N - j) + "*" + ".".repeat(j))
    }
}
excFive(["5"]);