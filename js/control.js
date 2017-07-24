domElem.showArrInHtml.addEventListener('click', letsGo);

function letsGo(e) {
    e.preventDefault();
    domElem.array = getArrElem(domElem.getArrElem, domElem.getArrIndex, domElem.array);
    viewResult(domElem.arrInHtml, domElem.array);
    // очистка не работает, пока не разобрался
    console.log(domElem.inputs);
    clearInputs(domElem.inputs.value);
    console.log(domElem.array);

}

domElem.popMeth.addEventListener('click', letsPop);

function letsPop(e) {
    e.preventDefault();
    domElem.array.pop();
    viewResult(domElem.arrInHtml, domElem.array);
    console.log(domElem.array);
}

domElem.shiftMeth.addEventListener('click', letsShift);

function letsShift(e) {
    e.preventDefault();
    domElem.array.shift();
    viewResult(domElem.arrInHtml, domElem.array);
    console.log(domElem.array);
}

domElem.pushMeth.addEventListener('click', letsPush);

function letsPush(e) {
    e.preventDefault();
    domElem.array.push(domElem.inputMeth.value);
    viewResult(domElem.arrInHtml, domElem.array);
    console.log(domElem.array);
}

domElem.unshiftMeth.addEventListener('click', letsUnShift);

function letsUnShift(e) {
    e.preventDefault();
    domElem.array.unshift(domElem.inputMeth.value);
    viewResult(domElem.arrInHtml, domElem.array);
    console.log(domElem.array);
}