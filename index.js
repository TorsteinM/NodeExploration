
var element = document.getElementById('root');
element.innerHTML = 'Torstein';

setInterval(function () {
    if(element.innerHTML === 'Torstein'){
        element.innerHTML = 'Rufus';
    } else {
        element.innerHTML = 'Torstein';
    }
}, 1000);

