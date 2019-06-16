var count = 0;
start();

function start() {
    var allSpan = document.getElementsByTagName('span');
    for (var i = 0; i < allSpan.length; i++) {
        var span = allSpan[i];
        span.onclick = function() {
            if (count < 6 && this.className.indexOf('selected') === -1) {
                count++;
                this.className = 'selected';
                appenNumber(this.innerHTML);
            }
        };
    }
}

function appenNumber(number) {
    var p = document.getElementById('sorted');
    if (count > 1) {
        p.innerHTML += ' -';
    }
    p.innerHTML += ' ' + number;
}