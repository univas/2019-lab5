start();

function start() {
    var btn = document.getElementById('exec');
    btn.onclick = function() {
        calculator();
    };
}

function calculator() {
    if (validateEmptyFields() && validateOperators()) {
        var inputA = document.getElementById('firstNumber');
        var inputB = document.getElementById('secondNumber');
        var operator = document.getElementById('operator');
        var result = document.getElementById('result');
        var a = parseInt(inputA.value, 10);
        var b = parseInt(inputB.value, 10);

        if (operator.value === '+') {
            result.value = sum(a, b);

        } else if (operator.value === '-') {
            result.value = sub(a, b);

        } else if (operator.value === '/') {
            result.value = div(a, b);

        } else {
            result.value = mul(a, b);
        }
    }
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function validateEmptyFields() {
    var idsToValidate = ['firstNumber', 'operator', 'secondNumber'];
    
    for (var i = 0; i < idsToValidate.length; i++) {
        var input = document.getElementById(idsToValidate[i]);
        if (input.value.trim() === '') {
            alert('Por favor, preencha todos os campos!');
            input.focus();
            return  false;
        }
    }

    return true;
}

function validateOperators() {
    var validOperators = ['+', '-', '/', 'x'];
    var inputOperator = document.getElementById('operator');

    if (validOperators.indexOf(inputOperator.value) === -1) {
        alert('Por favor, digite um operador válido (+ - / x)');
        inputOperator.value = '';
        inputOperator.focus();
        return false;
    }
    return true;
}