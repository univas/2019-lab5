start();

function start() {
    var tdList = document.getElementsByTagName('td');
    for (var i = 0; i < tdList.length; i++) {
        tdList[i].onclick = function() {
            removeClassFromTd();
            this.className = 'checked';
        };
    }
}

function removeClassFromTd() {
    var tdChecked = document.getElementsByClassName('checked');
    if (tdChecked.length > 0) {
        tdChecked[0].className = '';
    }
}