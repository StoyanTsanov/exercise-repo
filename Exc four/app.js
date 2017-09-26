function excFour(args) {
    let width = Number(args[0]);
    let length = Number(args[1]);
    let piecesTaken = args[2];
    let pieces = width * length;
    for (var i = 2; pieces >= 0; i++) {
        piecesTaken = (args[i]);
        if (piecesTaken != "STOP") {
            pieces = pieces - piecesTaken;
        }
        //console.log(piecesTaken);
        if (pieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }
        else if (piecesTaken == "STOP" && pieces >= 0) {
            console.log(`${pieces} pieces are left.`);
            break;
        }
    }
} excFour(["10","2","2", "4", "6", "STOP"]);
