//функция принимает введеные данные в поле и передает в массив

function getArrElem(elem, index, arr) {
    let i = domElem.getArrIndex.value;
    arr[i] = domElem.getArrElem.value;
    return arr;
}

function popFunc(someArr) {
    someArr.pop();
    return someArr;
}