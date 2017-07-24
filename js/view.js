let domElem = {
    getArrElem: document.querySelector('.textArr'),
    getArrIndex: document.querySelector('.indexArr'),
    showArrInHtml: document.querySelector('.showArr'),
    arrInHtml: document.getElementById('new'),
    array: [],
    inputs: document.querySelectorAll('.data'),
    inputMeth: document.querySelector('.difrentMethod'),
    popMeth: document.querySelector('.popMeth'),
    pushMeth: document.querySelector('.pushMeth'),
    shiftMeth: document.querySelector('.shiftMeth'),
    unshiftMeth: document.querySelector('.unshiftMeth')
}

function viewResult(someDomElem, array) {
    someDomElem.textContent = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            someDomElem.textContent += array[i] + " ";
        }
    }
}

// очистка не работает, пока не разобрался
function clearInputs(allInputs) {
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].textContent = "";
    }
}