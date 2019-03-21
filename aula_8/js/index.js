start();

function start() {
    var btn = document.getElementById('btnName');
    btn.onclick = function() {
        var inputName = document.getElementById('name');
        //alert(inputName.value);

        if (inputName.value == '') {
            inputName.value = 'input empty!';
        } else {
            inputName.value = inputName.value.toUpperCase();
        }

        console.log("I'm here!");
    };
}
