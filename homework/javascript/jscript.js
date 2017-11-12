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
/------------------------------------/

function averageNumber(a, b) {
    var c = (a + b) / 2;
    return c;
}

/------------------------------------/

function numberToDegree(a, b) {
    if (a && b > 0) {
        var x = a;
        var i;
        for (i = 1; i < b; i++) {
            a = a * x;
        }
        return a;
    } else if (a > 0 && b !== 0) {
        var b = 2;
        var x = a * a;
        return x;
    } else if (b === 0) {
        return x = 1;
    }
}
