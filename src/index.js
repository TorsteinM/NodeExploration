
import Main from './Main';



//Handlers
var bgChange = () => {
    var C = num => Math.floor(Math.random()*(num+1));
    document.body.style.backgroundColor = 'rgb('+C(255)+','+C(255)+','+C(255)+')';
}

//Register events
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}