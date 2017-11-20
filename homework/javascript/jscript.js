var array = [1,4,6,2,-2];
function isEmpty(array) {
    for (key in array) {
        return true;
    }
    return false;
}

function sumData(array) {
    if (isEmpty(array)) {
        var sum = 0;
        for (var i=0; i<array.length; i++){
            sum = sum + array[i];
        }
        return sum;
    } else return false;
}

//---------------------------//

var codeObj = {
   'length': [45, 109, 32, 39, 1, 0]
};
codeObj.length[23]=95;
console.log('Новий масив:',(codeObj['length']));
function sumData(array) {
    var sum = 0;
    for (var i in array){
        sum = sum + array[i];
    }
    return sum;
}
console.log('Сума елементів нового масиву =', sumData(codeObj['length']));




var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
function sortBubble(data) {
    for (var y = 0; y < data.length; y++) {
        for (var i = 0; i < data.length - 1; i++) {
            if (data[i] > data[i + 1]) {
                var x = data[i];
                data[i] = data[i + 1];
                data[i + 1] = x;
            }
        }

    }
    return data;
}
