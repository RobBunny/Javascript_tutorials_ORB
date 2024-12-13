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
//function capitalize(element, index, array) {
//    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
//}
//fruits.forEach(display);
//function display(element) {
//    console.log(element);
//}

//(maps are like for each but returns new array)
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

//(this keyword is ineffective in arrow functions)
//let character = {
//    name: "Ben",
//    age: 16,
//    favfood: "Mr. Smoothies",
//    hello: function() {
//        console.log(`Hi, I'm ${this.name} 10`);
//        console.log(`I like ${this.favfood}`);
//    },
//};
//character.hello();

//(static keyword belongs to the class, not the object)
//class Music {
//    static idNumber = 0;
//    constructor(name, instrument, status, time) {
//        this.name = name;
//        this.instrument = instrument;
//        this.status = status;
//        this.time = time;
//        Music.idNumber++;
//    }
//    showName() {
//        console.log(`Hey, I'm ${this.name}`);
//        console.log(`I've been into ${this.instrument} for ${this.time} year(s)`);
//    }
//};
//const man1 = new Music("Rabs", "Drums", "Beginner", 1);
//const man2 = new Music("Oni", "Guitar", "Professional", 30);
//man1.showName();
//man2.showName();
//console.log(`Current ids are ${Music.idNumber}`);

//(getters and setters, really cool stuff)
//class Pokemon {
//    constructor(name, type) {
//        this.name = name;
//        this.type = type;
//    }
//    specialfeat(legendary) {
//        console.log(`${this.name} beat ${legendary}`);
//    }
//    set name(newName) {
//        if(typeof newName === "string" && newName.length > 0) {
//            this._name = newName;
//        }
//        else {
//            console.error(`Give proper name`);
//        }
//    }
//    get name() {
//        return this._name;
//    }
//    set type(newType) {
//        if(typeof newType === "string" && newType.length > 0) {
//            this._type = newType;
//        }
//        else {
//            console.error(`Give proper name`);
//        }
//    }
//    get type() {
//        return this._type;
//    }
//}
//class Charizard extends Pokemon {
//    constructor(name, type, legendary) {
//        super(name, type);
//        this.legendary = legendary;
//    }
//    accolade() {
//        super.specialfeat(this.legendary);
//    }
//}
//class Sceptile extends Pokemon {
//    constructor(name, type, legendary) {
//        super(name, type);
//        this.legendary = legendary;
//    }
//}
//const cherry = new Charizard("Charizard", "Fire/Flying", "Articuno");
//cherry.accolade();
//const blade = new Sceptile(347, 5, "Darkrai");
//console.log(blade.name);
//console.log(blade.type);

//(destructuring array elements)
//const fastfood = ["Burgers", "Pizza", "Tacos", "Hotdogs", "Sandwiches"];
//[fastfood[0], fastfood[3]] = [fastfood[3], fastfood[0]];
//console.log(fastfood);
//(destructuring objects)
//function id({name, ability}) {
//    console.log(`${name} has ${ability} ability`);
//}
//const person1 = {
//    name: "Motu",
//    ability: "Samosa-eating",
//}
//const person2 = {
//    name: "Patlu",
//    ability: "Bulb-lighting",
//}
//const {name, ability} = person1;
//console.log(name);
//console.log(ability);
//id(person2);

//(nested objects)
//class Person {
//    constructor(name, age, ...address) {
//        this.name = name;
//        this.age = age;
//        this.address = new Address(...address);
//    }
//}
//class Address {
//    constructor(street, upazilla, district) {
//        this.street = street;
//        this.upazilla = upazilla;
//        this.district = district;
//    }
//}
//const person1 = new Person("Rabs", 21, 524, "Fulbaria", "Brahmonbaria");
//console.log(person1.address);
//console.log(person1.address.upazilla);

//(array of objects + sort() method)
//const yakuza = [{name: "Kiryu", age: 20, family: "Dojima", clan: "Tojo"}, 
//                {name: "Majima", age: 24, family: "Shimano", clan: "Tojo"}, 
//                {name: "Nishiki", age: 19, family: "Kazama", clan: "Tojo"}, 
//                {name: "Saejima", age: 26, family: "Sasai", clan: "Tojo"}, 
//                {name: "Akiyama", age: 17, family: "None", clan: "None"},
//                {name: "Ryuji", age: 22, family: "Goda", clan: "Oumi"}];
//yakuza.forEach(yakuza => console.log(yakuza));
//const nameyakuza = yakuza.map(yakuza => yakuza.name);
//console.log(nameyakuza);
//const gumiyakuza = yakuza.filter(yakuza => yakuza.clan === "Tojo");
//console.log(gumiyakuza);
//const maxAge = yakuza.reduce((max, yak) => max.age > yak.age ? max : yak);
//console.log(maxAge);
//yakuza.sort((yak1, yak2) => yak1.age - yak2.age);
//console.log(yakuza);
//yakuza.sort((yak1, yak2) => yak2.name.localeCompare(yak1.name));
//console.log(yakuza);

//(Fisher-Yates Algorithm)
//const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
//shuffle(cards);
//console.log(cards);
//function shuffle(array) {
//    for(i=array.length-1; i>=0; i--) {
//        let random = Math.floor(Math.random()*(i+1));
//        [array[i], array[random]] = [array[random], array[i]];
//    }
//}

//(closure messin with my head)
//function createGame() {
//    let score = 0;
//    function addscore(points) {
//        score += points;
//        console.log(`+${points} pts`);
//    }
//    function subscore(points) {
//        score -= points;
//        console.log(`-${points} pts`);
//    }
//    function getscore() {
//        return score;
//    }
////    return {addscore: addscore, subscore: subscore, getscore: getscore,};
//}
//const myGame = createGame();
//myGame.addscore(8);
//myGame.addscore(6);
//myGame.subscore(5);
//console.log(`Current Score is ${myGame.getscore()}`);
