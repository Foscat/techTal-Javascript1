// Add event listeners

// Challenge 1
document.getElementById("button1").addEventListener("click", forloopCup);

// Challenge 2
document.getElementById("button2").addEventListener("click", swimForLoop);

// Challenge 3
// Function version
document.getElementById("button3").addEventListener("click", getAndPost);
// Reg for loop version
document.getElementById("button4").addEventListener("click", getBottles);
// Slide solution answer
document.getElementById("button5").addEventListener("click", classBottleCount);


// document.getElementById



// Challenge 1 just a little fancy
var person1 = {
    name: "Joe",
    cupsDrank: 4,
}
var person2 = {
    name: "Pete",
    cupsDrank: 1,
}
var person3 = {
    name: "Sally",
    cupsDrank: 6,
}

var people = [person1, person2, person3];

askQustion = function(drank) {
    if(drank < 3) {
        console.log("Yes I will take another cup, thank you.");
        console.log("///////////////////////");
    }else {
        console.log("No thank you I've had too many as it is.");
        console.log("///////////////////////");
    }
}

function forloopCup(){
    for(var i = 0; i < people.length; i++){
        console.log(people[i].name + " has drank " + people[i].cupsDrank + " cups of coffee.");
        askQustion(people[i].cupsDrank);
    }
}

// End Challenge 1

// Challenge 2
var temp = 85;
var precipitation = false;
var indoors = true;

console.log("The temperature is " + temp + " degrees");

if (temp > 80 && precipitation === false) {
  console.log("time to swim!");
} else if (indoors) {
  console.log("time to swim!");
}

// My way 
var precipitation = ["Raining", "Snowing", "None"];

var day1 = {
    temp: 75,
    precipitation: precipitation[1],
    indoors: true
};
var day2 = {
    temp: 88,
    precipitation: precipitation[0],
    indoors: false
};
var days = [day1, day2];
let maybe = {
    t:null, 
    p:null, 
    i:null
};

canWeSwim = function(day){
    if(day.temp > 80){
        maybe.t = "warm";
    }else{
        maybe.t = "cold";
    }
}
checkPrecip = function(day){
    if(day.precipitation === true){
        maybe.p = "wet";
    }else{
        maybe.p = "dry";
    }
}
inOrOut = function(day){
    if(day.indoors === true){
        maybe.i = "in";
    }else{
        maybe.i = "out";
    }
}
constructOutput = function(com){
    console.log(com);
    if(com.i === "in"){
        console.log("Dont worry about the weather. Our pool is inside.");
    }else{
        if(com.p === "wet"){
            console.log("We can't swim today because of the weather. Our pool is outside and you dont want to be out in that.");
        }else{
            if(com.t === "cold"){
                console.log("It is just a bit too cold to be swimming outside today.");
            }else{
                console.log("The weather is perfect! Enjoy the swim and remember your sunscreen!");
            }
        }
    }
}

function swimForLoop() {
    for(i=0; i<days.length; i++){
        canWeSwim(days[i]);
        checkPrecip(days[i]);
        inOrOut(days[i]);
        constructOutput(maybe);
    }
}

// End my way to challenge 2

// Challenge 3
var bottles = 99;
var bottlesFun = 99;
var countFun = [];
var countLoop = [];

checkBottles = function(){
    if(bottlesFun > 1){
        bottlesFun = bottlesFun - 1;
        countFun.push(bottlesFun);
        checkBottles()
    }else{
        console.log("Hey we need more beer!")
    }
}
function getBottles(){
    checkBottles();
    document.getElementById("pool").append(countFun);
}
console.log(countFun);


countForLoop = function(){
    for(i=0; i < bottles; i++){
        bottles = bottles - 1;
        countLoop.push(bottles);
    }
}
console.log(countLoop);

function getAndPost(){
    countForLoop();
    document.getElementById("pool").append(countLoop);
}

// Class example
let bottle = 99;

function classBottleCount(){
    for (bottle; bottle >= 0; bottle --){

        if (bottle === 0) {
          console.log("Hey! Go buy more root beer!");
        } else {
            console.log(bottle + " bottles of root beer on the wall");
        }
      }
}

// End challenge 3


function checkValue(){
    var int = 0;
    var string = "0";
   if(int == string ){
       console.log("this is true")
   } 
   if(int === string ){
       console.log("you wont see this");
   } else{
       console.log("you will see this.")
   }
}
checkValue();