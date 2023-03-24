// document.getElementById("count-el").innerText = 5

// let count = 0

/* let firstBatch = 5
let secondBatch = 7

let count = firstBatch + secondBatch

console.log(count) */

// 1. Create a variable myAge, 2. Log it to console

// let myAge = 20

// console.log(myAge)

// Donezo, you can't use console.log before you give value to variable

// 1. Create 2 variables, myAge and humanDogRatio, 2. Multiply two together and store into myDogAge, 3. Log myDogAge to console:

/* let myAge = 20
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge) */

// DONEZO

/* let count = 5

count = 3

count += 1

console.log(count) */

// IT WILL TAKE THE LAST VALUE

// Create variable, bonusPoints. Start as 50, increase to 100, decrease to 25 and end at 70, console.log each step:

/* let bonusPoints = 50

console.log(bonusPoints)

bonusPoints += 50

console.log(bonusPoints)

bonusPoints -= 75

console.log(bonusPoints)

bonusPoints += 45

console.log(bonusPoints) */

// DONEZO!


// BUTTON INCREMENT: WE USE ID FROM HTML AS WELL AS ONCLICK ATRIBUTE

/* function increment() {
    console.log("The button was clicked!")
} */



// SETTING UP THE RACE
/*
    BAD WAY! TO REPEAT THAT OVER AND OVER

    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
*/


/* function countdown() {

    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
} */

// RACE COUNTDOWN

// countdown()

// GO

// GET READY FOR A NEW RACE

// countdown()

// GO GO GO

// 1. Create a function that logs out number 42 to the console, 2. Call the function

/* function printNumber() {
    console.log(42)
}

printNumber() */

// DONEZO

// 1. Create a function that logs out the sum of all the lap times:
/* let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapTimes() {
    let sum = lap1 + lap2 + lap3
    console.log(sum)
} */

// console.log(sum) se samo moze pozvati unutar funkcije ne moze se pozvati van nje

// lapTimes()

// DONEZO

// LAP COUNTER TASK:

/* let lapsCompleted = 0

function lapFinished() {
    lapsCompleted += 1
}

lapFinished()
lapFinished()
lapFinished()


console.log(lapsCompleted) */

// DONEZO

// FUNKCIJA SE POZIVA SAMO NJENIM IMENOM!!

// INCREMENT TASK FROM HTML BUTTON

let countEl = document.getElementById("count-el")
console.log(countEl)

// pass in arguments 

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    // document.getElementById("count-el").innerText = count
}

// THE DOM Doccumetn Object Model

// 1. Create a function save()

let saved = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    saved.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

let username = "Pero"// "za stringove"

// 1. Create a variable that stores the string

let message = "You have new notifcations"

console.log(message + "," + username)

// 2. Create a variable, messageToUser that contains the message you have logged

let messageToUser = message + "," + username + "!"
console.log(messageToUser)

// 3. Create 2 variables and 3rd that combines first 2

let myName = "Alureiely"
let greeting = "Hi, my name is "
let myGreeting = greeting + myName

console.log(myGreeting)
// Strings always win!

// 4. What will the following display?
/*
console.log(4 + 5) = 9 correct
console.log("2" + "4") = 24 correct
console.log("5" + 1) = 51 correct
console.log(100 + "100") = 100100 correct
*/

// Adding previous counts to screen in save() did above

