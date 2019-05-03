start();

function start() {
    var btn = document.getElementById('calcButton');
    btn.onclick = function() {
        if (validateFields()) {
            var total = calculate();
            addTotal(total);
        }
    };
}

function addTotal(total) {
    var p = document.getElementById('result');
    p.innerHTML = 'Valor obtido ao final: R$ ' + total;
}

function calculate() {
    var numberOfMonths = getNumberValue('month');
    var monthlyInterest = getNumberValue('interest') / 100;
    var money = getNumberValue('capital');

    return ((1 + monthlyInterest) 
        * ( 
            ( 
                Math.pow(1 + monthlyInterest, numberOfMonths) 
                - 1  
            ) 
            / monthlyInterest
        ) 
        * money).toFixed(2);
}

function getNumberValue(inputId) {
    var input = document.getElementById(inputId);
    var value = input.value;
    return parseFloat(value);
}

function validateFields() {
    var fieldsId = ['month', 'interest', 'capital'];
    var allFieldsValid = true;

    for (var i = 0; i < fieldsId.length; i++) {
        var fieldId = fieldsId[i];
        var field = document.getElementById(fieldId);
        if (field.value.trim() === '') {
            allFieldsValid = false;
            showFieldMessageError(fieldId);
        } else {
            hideFieldMessageError(fieldId);
        }
    }

    return allFieldsValid;
}

function showFieldMessageError(fieldId) {
    var messageErrorId = fieldId + 'Error';
    var messageError = document.getElementById(messageErrorId);
    messageError.className = messageError.className.replace('hide', '').trim();
}

function hideFieldMessageError(fieldId) {
    var messageErrorId = fieldId + 'Error';
    var messageError = document.getElementById(messageErrorId);
    if (!messageError.className.includes('hide')) {
        messageError.className = messageError.className + ' hide';
    }
}