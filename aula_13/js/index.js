var idStudentEdit = -1;
var inputIds = ['name', 'email', 'cpf'];
var students = [];

function start() {
    $('#addBtn').click(function() {
        addNewAluno();
    });
}

function addNewAluno() {
    if (isAllFieldsValid()) {
        var student = getStudentObject();
        if (idStudentEdit > -1) {
            updateStudent(student);
        } else {
            saveStudent(student);
        }
        
        clearFields();
        idStudentEdit = -1;
    }
}

function getStudentObject() {
    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');
    var inputCpf = document.getElementById('cpf');

    return {
        name: inputName.value,
        email: inputEmail.value,
        cpf: inputCpf.value
    };
}

function clearTableData() {
    var tbody = getTbody();
    tbody.innerHTML = '';
}

function populateTableData() {
    var tbody = getTbody();
    
    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement('tr');
        var student = students[i];
        tr.appendChild(createColumn(student.name));
        tr.appendChild(createColumn(student.email));
        tr.appendChild(createColumn(student.cpf));
        createButtonColumns(tr, student.id);
        tbody.appendChild(tr);
    }
}

function createButtonColumns(tr, id) {
    var buttonsContent = ['Editar', 'Excluir'];

    for (var i = 0; i < buttonsContent.length; i++) {
        tr.appendChild(createButtonColumn(buttonsContent[i], id));
    }
}

function createButtonColumn(content, id) {
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.type = 'button';
    input.value = content;
    input.name = id;
    if (content === 'Excluir') {
        input.onclick = deleteStudent;
    } else if (content === 'Editar') {
        input.onclick = editLine;
    }

    td.appendChild(input);
    return td;
}

function editLine() {
    idStudentEdit = this.name
    var td = this.parentNode;
    var tr = td.parentNode;
    
    for (var i = 0; i < inputIds.length; i++) {
        var input = document.getElementById(inputIds[i]);
        input.value = tr.children[i].innerHTML;
    }
}

function createColumn(content) {
    var td = document.createElement('td');
    var textNode = document.createTextNode(content);
    td.appendChild(textNode);
    return td;
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

window.onload = function() {
    loadDataFromAPI();
    start();
};

function loadDataFromAPI() {
    $.get("https://pacific-wave-50441.herokuapp.com/api/aluno", function( data ) {
        students = data;
        clearTableData();
        populateTableData();
        checkEmptyTable();
    });
}

function saveStudent(student) {
    $.ajax(
        "https://pacific-wave-50441.herokuapp.com/api/aluno", 
        {
            type: 'POST',
            data: JSON.stringify(student), 
            contentType: 'application/json',
            success: function( data ) {
                loadDataFromAPI();
            }
        }
    );
}

function deleteStudent() {
    var idStudent = this.name;

    $.ajax(
        "https://pacific-wave-50441.herokuapp.com/api/aluno/" + idStudent, 
        {
            type: 'DELETE',
            contentType: 'application/json',
            success: function( data ) {
                loadDataFromAPI();
            }
        }
    );
}

function updateStudent(student) {
    $.ajax(
        "https://pacific-wave-50441.herokuapp.com/api/aluno/" + idStudentEdit, 
        {
            type: 'PUT',
            data: JSON.stringify(student), 
            contentType: 'application/json',
            success: function( data ) {
                loadDataFromAPI();
            }
        }
    );
}
