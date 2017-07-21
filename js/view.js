let domElem = {
    getArrElem: document.querySelector('.textArr'),
    getArrIndex: document.querySelector('.indexArr'),
    showArrInHtml: document.querySelector('.showArr'),
    arrInHtml: document.getElementById('new'),
    array: ["some", "text", "for", "fun"],
    inputs: document.getElementsByTagName('inputs'),
    popMeth: document.querySelector('.popMeth'),
    pushMeth: document.querySelector('.pusMeth'),
    shiftMeth: document.querySelector('.shiftMeth'),
    unshiftMeth: document.querySelector('.unshiftMet')
}

function viewResult(someDomElem, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            someDomElem.textContent += array[i] + " ";
        }
    }
}

// очистка не работает, пока не разобрался
// function clearInputs(allInputs) {
//     for (let i = 0; i < allInputs.length; i++) {
//         allInputs[i].value = "";
//     }
// }