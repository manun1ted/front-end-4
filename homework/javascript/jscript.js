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

//---------------------------//

var codeObj = {
   'length': [45, 109, 32, 39, 1, 0]
};
codeObj.length[23]=95;
function sumD(codeObj) {
    sumD = 0;
    for (var i in codeObj) {
        sumD = sumD + codeObj[i];
    }
    return sumD;
}
//Тут якась фігня. Замість суми мені виводить сам масив і до першого числа дописує 0//



var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
function sortBubble(data) {
    for (var y = 0; y < data.length; y++) {
        for (var i = 0; data.length - 1; i++) {
            if (data[i] > data[i + 1]) {
                var x = data[i];
                data[i] = data[i + 1];
                data[i + 1] = x;
            }
        }

    }
    return data;
}

//Тут ніби логіка правильна, але працювати не хоче//