// 1. First task
// SETTING THE STAGE
/* const player = "Alure"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game}  game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
} */

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

// Perfect.

// 2. 

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

/* function first(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

first(myCourses) */

// Donezo

// 3.
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

/* localStorage.setItem("name", "value")
console.log(localStorage.key("name"))
localStorage.clear() */

// Donezoou

// 4. Event listener 

/* let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const logEl = document.getElementById("log-btn")
logEl.addEventListener("click", function () {
    console.log(data[0].score)
}) */

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// Almost perfect, i did not add the .score where it was needed

// 5.

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

/* function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }

    return baseString
}

const sentence = generateSentence("highest mountains", ["Everest", "K2"])

console.log(sentence) */

// No bueno i needed help for this one

// 6. Render img

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
let container = document.getElementById("container")
function render() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

render()

// MORE BUENO 
