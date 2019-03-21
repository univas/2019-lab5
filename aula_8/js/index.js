start();

function start() {
    var btn = document.getElementById('btnName');
    btn.onclick = function() {
        var inputName = document.getElementById("name");
        //alert(inputName.value);

        if (inputName.value === '') {
            inputName.value = 'input empty!';
        } else {
            //inputName.value = inputName.value.toUpperCase();
        }

        if (inputName.value.startsWith('R')) {
            console.log('Seu nome tem uma letra bonita!');
        }

        var names = inputName.value.split(' ');
        console.log(names[names.length - 1]);

        var newValue = inputName.value.substring(1, inputName.value.length - 1);
        console.log(newValue);

        newValue = inputName.value.trim();
        console.log(newValue);

        var index = inputName.value.indexOf('@');
        console.log(index);

        index = inputName.value.search(/[áàíóôêé]/g);
        console.log(index);

        console.log("I'm here!");
    };
}
