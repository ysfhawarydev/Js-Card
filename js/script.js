var name = window.prompt('What is your name ?');
var age = window.prompt('What is your age ?');
var address = window.prompt('What is your address ?');

document.getElementById('paragraph').innerHTML =
  `Name: ${name} <br> Age: ${age} <br> Address: ${address}`;
