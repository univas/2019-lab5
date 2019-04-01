start();

function start() {
    var addButton = document.getElementById('addBtn');
    addButton.onclick = function() {
        addListItem();
    };
}

function addListItem() {
    var inputName = document.getElementById('name');
    var errorElement = document.getElementById('msgError');

    if (inputName.value.trim() === '') {
        //errorElement.className = 'error';
        errorElement.className = errorElement.className.replace('hide', '').trim();

    } else {
        //errorElement.className = 'error hide';
        errorElement.className = errorElement.className + ' hide';

        var parentNode = document.getElementById('convidados');
    
        var li = document.createElement('li');
        var text = document.createTextNode(inputName.value);
        li.appendChild(text);
        parentNode.appendChild(li);
    }
    
    inputName.value = '';
    inputName.focus();
}