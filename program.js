//COUNTER PROGRAM

/*const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");
const incBtn = document.getElementById("incBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
incBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}*/

//RANDOM NUMBER GENRATOR

/*const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const myButton = document.getElementById("myButton");
const min = 1, max = 6;
let rand1, rand2, rand3;
myButton.onclick = function() {
    rand1 = Math.floor(Math.random()*(max-min+1)) + min;
    rand2 = Math.floor(Math.random()*(max-min+1)) + min;
    rand3 = Math.floor(Math.random()*(max-min+1)) + min;
    myLabel1.textContent = rand1;
    myLabel2.textContent = rand2;
    myLabel3.textContent = rand3;
}*/

//NUMBER GUESSING GAME

/*const myNumber = document.getElementById("myNumber");
const myButton = document.getElementById("myButton");
const p1 = document.getElementById("myP");
const min = 1;
const max = 1000;
const ans = Math.floor(Math.random()*(max-min+1)) + min;
let guess;
let attempts = 0;
let running = true;
myButton.onclick = function() {
    guess = Number(myNumber.value);
    if(isNaN(guess)) {
        p1.textContent = "Please enter a valid number";
    }
    else if(guess > max || guess < min) {
        p1.textContent = `Please enter a number between ${min} and ${max}`;
    }
    else {
        attempts++;
        if(guess > ans) {
            p1.textContent = "TOO high!";
        }
        else if(guess < ans) {
            p1.textContent = "TOO low!";
        }
        else {
            p1.textContent = `You got it! The number was ${ans}.\nIt took you ${attempts} tries.`;
            running = false;
        }
    }
}*/

//TEMPERATURE CONVERTER

/*const myInput = document.getElementById("myInput");
const Ctof = document.getElementById("Ctof");
const Ftoc = document.getElementById("Ftoc");
const myAns = document.getElementById("myAns");
let input;;
let output;
function convert() {
    if(Ctof.checked) {
        input = Number(myInput.value);
        output = input*1.8 + 32;
        myAns.textContent = output.toFixed(2) + "℉";
    }
    else if(Ftoc.checked) {
        input = Number(myInput.value);
        output = (input-32)/1.8;
        myAns.textContent = output.toFixed(2) + "℃";
    }
    else {
        myAns.textContent = `PLease select a unit`;
    }
}*/

//DICE ROLLER

/*function rollDice() {
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceRoll = [];
    const images = [];
    for(i=0; i<numofDice; i++) {
        diceRoll[i] = Math.floor(Math.random()*6) + 1;
        images[i] = `<img src="dice_images/${diceRoll[i]}.png">`;
    }

    diceResult.textContent = diceRoll.join(", ");
    diceImages.innerHTML = images.join("");
}*/

//PASSWORD GENERATOR

/*function generatePassword(passlength, lowerChars, upperChars, numChars, symChars) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_+";
    let allowedChars = "";
    let password = "";
    allowedChars += lowerChars ? lowercase : "";
    allowedChars += upperChars ? uppercase : "";
    allowedChars += numChars ? numbers : "";
    allowedChars += symChars ? symbols : "";
    if(passlength<1) return "(Length should be at least 1 characters)";
    if(allowedChars.length===0) return "(At least 1 set of characters should be chosen)";
    for(i=0; i<passlength; i++) {
        password += allowedChars[Math.floor(Math.random()*allowedChars.length)];
    }
    return password;
}
const passlength = 12;
const lowerChars = true;
const upperChars = true;
const numChars = true;
const symChars = true;
const password = generatePassword(passlength, lowerChars, upperChars, numChars, symChars);
console.log(password);*/