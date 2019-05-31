start();

function start() {
    var btnCalc = document.getElementById('calc');
    btnCalc.onclick = function() {
        clearList();
        calcFibonacci();
    };
}

function calcFibonacci() {
    var inputQuantity = document.getElementById('quantity');
    var max = parseInt(inputQuantity.value, 10);
    var current = 1;
    var old = 1;

    for (var i = 0; i < max; i++) {
        if (i > 1) {
            var aux = current;
            current = current + old;
            old = aux;
        }
        printNumber(current);
    }
}

function printNumber(num) {
    var list = document.getElementById('numbers_sequency');
    var li = document.createElement('li');
    li.innerHTML = num;
    list.appendChild(li);
}

function clearList() {
    var list = document.getElementById('numbers_sequency');
    list.innerHTML = '';
}