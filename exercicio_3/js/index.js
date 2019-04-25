start();
var operation = null;

function start() {
    

    document.getElementById('btn_one').onclick = function() { appendValue("1") };
    document.getElementById('btn_two').onclick = function() { appendValue("2") };
    document.getElementById('btn_three').onclick = function() { appendValue("3") };
    document.getElementById('btn_four').onclick = function() { appendValue("4") };
    document.getElementById('btn_five').onclick = function() { appendValue("5") };
    document.getElementById('btn_six').onclick = function() { appendValue("6") };
    document.getElementById('btn_seven').onclick = function() { appendValue("7") };
    document.getElementById('btn_eight').onclick = function() { appendValue("8") };
    document.getElementById('btn_nine').onclick = function() { appendValue("9") };
    document.getElementById('btn_zero').onclick = function() { appendValue("0") };
    document.getElementById('btn_addition').onclick = function() { setOperation("+") };
    document.getElementById('btn_subtraction').onclick = function() { setOperation("-") };
    document.getElementById('btn_multiplication').onclick = function() { setOperation("X") };
    document.getElementById('btn_division').onclick = function() { setOperation("/") };
    document.getElementById('btn_result').onclick = function() { result(); };
    document.getElementById('btn_clear').onclick = function() { clear(); };
}

function appendValue(value) {
    var result = document.getElementById('result');
    result.innerHTML += value;
}

function setOperation(sinal) {
    appendValue(' ' + sinal + ' ');
    operation = sinal;
}

function result() {
    var result = document.getElementById('result');
    var items = result.innerHTML.split(' ');
    
    for (var i = 0; i < items.length; i++) {
        if (!items[i].trim() == '') {
            var a = parseInt(items[i], 10);
            var b = parseInt(items[i + 2], 10);

            if (items[i + 1] == '+') {
                appendValue(' = ' + (a + b));
            } else if (items[i + 1] == '-') {
                appendValue(' = ' + (a - b));
            } else if (items[i + 1] == 'X') {
                appendValue(' = ' + (a * b));
            } else if (items[i + 1] == '/') {
                appendValue(' = ' + (a / b));
            }
        }
    }
}

function clear() {
    var result = document.getElementById('result');
    result.innerHTML = '';
}