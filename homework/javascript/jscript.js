var array = [];
function isEmpty(array) {
    for (key in array) {
        return true;
    }
    return false;
}

function sumData(array) {
    if (isEmpty(array)) {
        sumData = 0;
        for (var i=0; i<array.length; i++){
            sumData = sumData + array[i];
        }
        return sumData;
    } else return false;
}

/---------------------------/;

var codeObj = [45, 109, 32, 39, 1, 0];
codeObj[23]=95;
function sumData(codeObj) {
    sumData = 0;
    for (var key in codeObj.length){
        sumData = sumData + codeObj[i];
    }
    return sumData;
}