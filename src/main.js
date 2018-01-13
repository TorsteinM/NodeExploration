
// Function that adds some events to the buttons i the page.
export function buttons() {
  //The function that will be fired on the events.
  var bgChange = () => {
    var C = num => Math.floor(Math.random()*(num+1));
    document.body.style.backgroundColor = 'rgb('+C(255)+','+C(255)+','+C(255)+')';
  }

  //Register events
  var buttons = document.querySelectorAll('button');
  var events = ['click','mouseover','blur','focus','dblclick'];
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(events[i], bgChange);
  }
}
