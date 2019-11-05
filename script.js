function logName(name) {
  console.log(`Hello your name, ${name}!`);
}

nameA = prompt('Please Input First Name : ');
nameB = prompt('Please Input Last Name : ');

name = nameA + nameB;

logName(name);

///////////////

function checkAge(){

  var age = prompt('Input your Age?');

  alertit = function (age) {
    if (age >= 18) {
      alert('You are old enough');
    } else if (age < 18 && age >= 0) {
      alert('You are still young');
    } else {
      alert('You are not born yet');
    }
  };

  alertit(age);
  console.log(age);
}

////////////////

function addMarks(){
  
  alertit = (text, mark, times) => {
    newText = text;
  
    for (i = 0; i <= times; i++) {
      newText += mark;
    }
  
    console.log(newText);
    alert(newText);
  };
  
  alertit('Hello', '!', 1); // Hello!
  alertit('How are you', '?', 0); // How are you?
}

///////////////

function showNameWithAge(){
  alertit = (name, age) => {
    nameWithAge = `${name} is ${age} year(s) old`;
  
    return nameWithAge; // return the value to be used later
  };
  
  age = prompt(`what's your age again?`);

  myname = alertit(name, age);
  
  alert(myname);
  console.log(myname);
}