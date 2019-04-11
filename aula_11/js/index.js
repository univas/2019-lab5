start();

function start() {
    var btn = document.getElementById('addBtn');
    btn.onclick = function() {
        addNewAluno();
    };
}

function addNewAluno() {
    var inputIds = ['name', 'email', 'cpf'];

    if (isAllFieldsValid(inputIds)) {
        var newLine = createNewLine(inputIds);
        addNewLineInTable(newLine);
        clearFields(inputIds);
    }
}

function createNewLine(inputIds) {
    var tr = document.createElement('tr');

    for (var i = 0; i < inputIds.length; i++) {
        tr.appendChild(createColumn(inputIds[i]));
    }

    createButtonColumns(tr);
    return tr;
}

function createButtonColumns(tr) {
    var buttonsContent = ['Editar', 'Excluir'];

    for (var i = 0; i < buttonsContent.length; i++) {
        tr.appendChild(createButtonColumn(buttonsContent[i]));
    }
}

function createButtonColumn(content) {
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'button';
    input.value = content;
    if (content === 'Excluir') {
        input.onclick = removeLine;
    }
    td.appendChild(input);
    return td;
}

function removeLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var table = document.getElementById('alunos');
    var tbody = table.tBodies[0];
    tbody.removeChild(tr);
}

function createColumn(id) {
    var td = document.createElement('td');
    var input = document.getElementById(id);
    var textNode = document.createTextNode(input.value);
    td.appendChild(textNode);
    return td;
}

function addNewLineInTable(newTr) {
    var table = document.getElementById('alunos');
    var tbody = table.tBodies[0];
    tbody.appendChild(newTr);
}

function isAllFieldsValid(inputIds) {
    var allFieldsValid = true;

    for (var i = 0; i < inputIds.length; i++) {
        var id = inputIds[i];
        var input = document.getElementById(id);
        if (input.value.trim() === '') {
            if (allFieldsValid) {
                input.focus();
            }
            allFieldsValid = false;
            showMessageField(id);
        } else {
            hideMessageField(id);
        }
    }

    return allFieldsValid;
}

function showMessageField(inputId) {
    var element = getSpanErrorElement(inputId);
    element.className = element.className.replace('hide', '').trim();
}

function hideMessageField(inputId) {
    var element = getSpanErrorElement(inputId);
    if (element.className.indexOf('hide') === -1) {
        element.className = element.className + ' hide';
    }
}

function getSpanErrorElement(inputId) {
    return document.getElementById(inputId + 'Error');
}

function clearFields(inputIds) {
    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = '';
        if (i === 0) {
            input.focus();
        }
    }
}