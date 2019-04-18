var lineIndexToEdit = -1;
var inputIds = ['name', 'email', 'cpf'];

start();

function start() {
    var btn = document.getElementById('addBtn');
    btn.onclick = function() {
        addNewAluno();
    };
}

function addNewAluno() {
    if (isAllFieldsValid()) {
        if (lineIndexToEdit === -1) {
            removeEmptyLine();
            var newLine = createNewLine();
            addNewLineInTable(newLine);
        } else {
            editExistLine();
        }
        clearFields();
        lineIndexToEdit = -1;
    }
}

function editExistLine() {
    var tbody = getTbody();
    var tr = tbody.children[lineIndexToEdit - 1];

    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        tr.children[i].innerHTML = input.value;
    }
}

function createNewLine() {
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
    } else if (content === 'Editar') {
        input.onclick = editLine;
    }

    td.appendChild(input);
    return td;
}

function editLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    lineIndexToEdit = tr.rowIndex;
    
    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = tr.children[i].innerHTML;
    }
}

function removeLine() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var tbody = getTbody();
    tbody.removeChild(tr);
    checkEmptyTable();
}

function createColumn(id) {
    var td = document.createElement('td');
    var input = document.getElementById(id);
    var textNode = document.createTextNode(input.value);
    td.appendChild(textNode);
    return td;
}

function addNewLineInTable(newTr) {
    var tbody = getTbody();
    if (tbody.children.length % 2 === 0) {
        newTr.style.backgroundColor = 'lightGray';
    } else {
        newTr.style.backgroundColor = 'darkGray';
    }
    tbody.appendChild(newTr);
}

function isAllFieldsValid() {
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

function clearFields() {
    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = '';
        if (i === 0) {
            input.focus();
        }
    }
}

function removeEmptyLine() {
    var line = document.getElementById('emptyLine');
    if (line) {
        var tbody = getTbody();
        tbody.removeChild(line);
    }
}

function getTbody() {
    var table = document.getElementById('alunos');
    return table.tBodies[0];
}

function checkEmptyTable() {
    var tbody = getTbody();
    if (tbody.children.length === 0) {
        var td = document.createElement('td');
        td.colSpan = 5;
        var textNode = document.createTextNode('Nenhum aluno cadastrado ainda!');
        td.appendChild(textNode);
        var tr = document.createElement('tr');
        tr.id = 'emptyLine';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}