domElem.showArrInHtml.addEventListener('click', letsGo);

function letsGo(e) {
    e.preventDefault(e);
    domElem.array = getArrElem(domElem.getArrElem, domElem.getArrIndex);
    viewResult(domElem.arrInHtml, domElem.array);
    // очистка не работает, пока не разобрался
    // clearInputs(domElem.inputs);
}