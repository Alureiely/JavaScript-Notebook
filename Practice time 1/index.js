// 1. fullName

/* let name = "Alureiely"
let lastName = "Stormrage"
let fullName = document.getElementById("name")
fullName.textContent = name + " " + lastName
console.log(fullName)
 */

// 2. Function that logs out when called

/* let name = "Linda"
let greeting = "Hi there"

function message() {
    let popup = greeting + ", " + name + "!"
    console.log(popup)
    // console.log( greeting + ", " + name + "!" ) 2nd way
}

message() */

// 3. Points game

/* let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()

remove1Point()
remove1Point()

console.log("Number of pints is:" + " " + myPoints) */

// 4. STRINGS AND NUMBERS

/* console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114 */

// 5. Render an error message

/* let eroro = document.getElementById("error")

function clicked() {
    eroro.textContent = "Something went wrong, please try again later"
    console.log(eroro)
} */

// 6. Calculator

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sum.textContent = "Sum:" + result
    console.log(sum)
}

function sub() {
    let result = num1 - num2
    sum.textContent = "Sum:" + result
    console.log(sum)
}

function div() {
    let result = num1 / num2
    sum.textContent = "Sum:" + result
    console.log(sum)
}

function mul() {
    let result = num1 * num2
    sum.textContent = "Sum:" + result
    console.log(sum)
}