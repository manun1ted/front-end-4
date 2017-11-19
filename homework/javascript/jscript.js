function minNumber(a, b, c) {
    if (a >= b) {
        var d = b;
        return b;
    } else {
        var d = a;
        return a;
    }
    if (d >= c) {
        return c;
    }
}


function averageNumber(a, b) {
    return (a + b) / 2;
}



function numberToDegree(a, b) {
    if (a && b > 0) {
        var pow = a;
        for (var i = 1; i < b; i++) {
            a = a * pow;
        }
        return a;
    } else if (a > 0 && b !== 0) {
        pow *= a;
        return pow;
    } else if (b === 0) {
        return 1;
    }
}
