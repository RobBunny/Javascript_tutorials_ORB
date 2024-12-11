//let age = 22;
//let cgpa = 3.77;
//let name = "Rabs";
//let email = "rabs1015724@assmail.com";
//document.getElementById("myP1").textContent = `I am ${name}`;
//document.getElementById("myP2").textContent = `I am ${age} years old`;
//document.getElementById("myP3").textContent = `My mail: ${email}`;
//document.getElementById("myP4").textContent = `I got ${cgpa}`;

//let username;
//document.getElementById("mySubmit").onclick = function() {
//    username = document.getElementById("myText").value;
//    document.getElementById("myP1").textContent = `Hello , ${username}`
//}

//let x = window.prompt(`Give name: `);
//let y = window.prompt('Give number: ')
//let z = window.prompt(`Give hea...I'm sorry. Give y/n: `);
//y = Number(y);
//x = String(x);
//z = Boolean(z);
//console.log(x);
//console.log(y);
//console.log(z);

//let a = 60*(Math.PI/180), b = 60, c = 30;
//let d;
//d = Math.cos(a);
//console.log(d);

//let Age;
//const myAge = document.getElementById("myText");
//const myClick = document.getElementById("myClick");
//const myResult = document.getElementById("myResult");
//myClick.onclick = function() {
//    Age = Number(myAge.value);
//    if(Age > 100) myResult.textContent = "Bruddah you TOO OLD for this shit";
//    else if(Age >= 18) myResult.textContent = "Welcome to the real shit DAWG";
//    else myResult.textContent = "Get outta here KID";
//}

//const myCheckBox = document.getElementById("myCheckbox");
//const myBackend = document.getElementById("myBackend");
//const myForensics = document.getElementById("myForensics");
//const myJava = document.getElementById("myJava");
//const mySubmit = document.getElementById("mySubmit");
//const myAction = document.getElementById("myAction");
//const myChoice = document.getElementById("myChoice");
//mySubmit.onclick = function() {
//    if(!myCheckBox.checked) {
//        myAction.textContent = "So you wanna chill lazy boy?";
//        myChoice.textContent = "You're choosing none of these?"
//    } else {
//        myAction.textContent = "Now that's ma man, let's get to work!";
//        if(myBackend.checked) myChoice.textContent = "Let's bang somethin in the back!";
//        else if(myForensics.checked) myChoice.textContent = "Time to be a digital Salunkhe lmao!";
//        else if(myJava.checked) myChoice.textContent = "Rizvee will be rizzed up seein this!";
//        else myChoice.textContent = "You're choosing none of these?";
//    }
//}

//let purchase = Number(window.prompt(`Amount of purchase: `));
//let price = purchase;
//purchase >= 100 ? price -= purchase*0.1 : price;
//console.log(`You'll pay : ${price}`);

//let name = "Rob Bunny";
//let firstname = name.slice(0, name.indexOf(" "));
//let lastname = name.slice(name.indexOf(" ") + 1);
//console.log(firstname);
//console.log(lastname);
//console.log(`${firstname}, ${lastname}`);
//let username = window.prompt(`Give username: `);
//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//console.log(username);

//let login = false;
//while(!login) {
//    let username = window.prompt(`Give username: `);
//    let password = window.prompt(`Give password: `);
//    if(username == "MenaceO2" && password == "B3#uL@") {
//        login = true;
//        console.log(`Welcome, ${username}`);
//    }
//    else {
//        window.alert("Invalid username or password");
//    }
//}

//(Below is a spread and rest operator example)
//function combineName(...names) {
//    return names.join(" ");
//}
//let firstName = window.prompt(`Give first name: `);
//let middleName = window.prompt(`Give middle name: `);
//let lastName = window.prompt(`Give last name: `);
//let fullname = combineName(firstName, middleName, lastName);
//console.log(fullname);

//(Strings are immutable)
//let fruits = ["apple", "banana", "mango", "lichie", "grape"];
//fruits.forEach(capitalize);
//fruits.forEach(display);
//function display(element) {
//    console.log(element);
//}

//(maps are like for each but returns new array)
//function capitalize(element, index, array) {
//    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
//}
//const usaDates = ["2024-12-11", "2025-1-3", "2024-9-3"];
//const banDates = usaDates.map(convertDates);
//function convertDates(element) {
//    const parts = element.split("-");
//    return `${parts[2]}/${parts[1]}/${parts[0]}`;
//}
//banDates.forEach(display);
//function display(element) {
//    console.log(element);
//}

//(filter returns old stuff, reduce concises to one element)
//const age = [16, 17, 18, 18, 19, 19, 19, 20];
//const uniqueAge = age.filter(getuniqueAge);
//console.log(uniqueAge);
//function getuniqueAge(element, index, array) {
//    return array.indexOf(element) === index;
//}
//const maxAge = uniqueAge.reduce(getmaxAge);
//console.log(maxAge);
//function getmaxAge(accumulator, element) {
//    return accumulator > element ? accumulator : element;
//}
//(function expression: Helpful for one-time use functions)
//const minAge = uniqueAge.reduce(function(accumulator, element) {
//    return accumulator < element ? accumulator : element;
//});
//console.log(minAge)
//const totalAge = uniqueAge.reduce((accumulator, element) => accumulator + element);
//console.log(totalAge);
