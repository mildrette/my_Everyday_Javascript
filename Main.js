
// switch keyword in javascript
let userName = 'Zoey';
userName ? console.log(`Hello, ${userName}!`)
: console.log('Hello!');

var userQuestion = 'How many childred will i have in 2015?';
console.log(`${userName} is asking ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain.';
    break;
  case 1:
  eigthBall = 'It si decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My source say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  eightBall = 'signs point to yes';
  break;
  default:
  console.log('undefined');
}

console.log(`Magic Eight Ball's says, ${eightBall}`)