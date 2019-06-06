var images = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg'];
var currentIndex = 0;

start();

function start() {
    var linkNext = getArrow('next');
    linkNext.onclick = function() {
        changeIndex(1);
        changeImage();
    };

    var linkPrevious = getArrow('prev');
    linkPrevious.onclick = function() {
        changeIndex(-1);
        changeImage();
    };
}

function getArrow(linkId) {
    var link = document.getElementById(linkId);
    return link.getElementsByClassName('glyphicon')[0];
}

function changeIndex(value) {
    currentIndex += value;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex == images.length) {
        currentIndex = 0;
    }
}

function changeImage() {
    var div = document.getElementById('container-img');
    var img = div.getElementsByTagName('img')[0];
    img.src = 'images/' + images[currentIndex];
}