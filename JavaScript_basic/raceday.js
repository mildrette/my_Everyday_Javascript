let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 18;

if(early && age > 18){
 raceNumber += 1000;
}
  
if(early && age > 18){ 
  console.log(`The race begins at 9:30 am and your race number is: ${raceNumber}`);
} 
else if(!early && age > 18){
console.log(`The race will begin at 11:30 am and your race number is: ${raceNumber}`);
}
else if(age < 18){
  console.log(`The race will begin at 12:30 pm and your race number is: ${raceNumber}`);
} 
else {
  console.log('please kindly fill in you name at the desk at the entrance. Thanks and happy racing!');
}