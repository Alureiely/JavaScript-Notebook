// 1. Create a preson object, name age and country, create a function that uses the person object to create a string call the logData() to verify that it works

/* let person = {
    name: "Alurey",
    age: 21,
    country: "Serbia",
    logData: function () {
        console.log("Hey my name is " + person.name + " I am " + person.age + " years old, and i live in " + person.country + ".")
    }
}

person.logData() */

// PERFECT !

// 2. Create a conditional statment that logs out discount bassed on age variable

/* let age = 244

if (age < 6) {
    console.log("The card is free!");
} else if (age < 18) {
    console.log("You've recieved child discount.");
} else if (age < 27) {
    console.log("You've recieved student discount.");
} else if (age < 67) {
    console.log("You have to pay full ticket price.");
} else {
    console.log("You've recieved senior citizen discount.");
} */

// Donnezo!

// 3. For loops

/* let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world are the following:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log(" - " + largeCountries[i]);
} */

// PUR PERFECTION

// 4. Push pop shift unshift time

/* let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.pop()  // Brise poslednji
largeCountries.shift() // Brise prvi
console.log(largeCountries);

largeCountries.push("Pakistan") // Dodaje na kraj
largeCountries.unshift("China") // Dodaje na pocetak
console.log(largeCountries); */

// Peeerfectoo

// 5. Logical ops

/* let dayOfMonth = 12
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("💀");
} else { console.log("wooh that was close :D"); }
 */
// TBH it was easier then the rest :D

// 6. Random numbers thru Rock, Paper, Scissors

/* let hands = ["rock", "paper", "scissor"]

let randNumb = Math.floor(Math.random() * 3)

console.log(hands[randNumb])

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand()) */

// First way was mine, and the function is by Scrimba

// 7. Sorting fruits 

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
        putApple()
    }
    else if (fruit[i] === "🍊") {
        putOrange()
    } else { console.log("We don't have a shelf for that type of item."); }
}

function putApple() {
    appleShelf.textContent += "🍎"
}
function putOrange() {
    orangeShelf.textContent += "🍊"
}


// I AMAZE MYSELF, they again did it the other way but i like mine more