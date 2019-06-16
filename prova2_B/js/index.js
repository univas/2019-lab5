var count = 0;
start();

function start() {
    var allSpan = document.getElementsByTagName('span');
    for (var i = 0; i < allSpan.length; i++) {
        var span = allSpan[i];
        span.onclick = function() {
            
            if (this.parentNode.className.indexOf('selected') === -1) {
                count++;
                this.parentNode.className = 'selected';
                var h2 = document.getElementsByTagName('h2')[0];
                h2.innerHTML = count + ' done';
            }
        };
    }
}
