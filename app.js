let guessNumber = Math.ceil(Math.random()* 20)
console.log(guessNumber)
let val = document.getElementById("value")
let guess = document.getElementById("startguessing")
let scores = document.getElementById("score")
let highscore = document.getElementById("highscore")
let tag = document.querySelector(".tag")
let conatiner = document.querySelector(".container")
let headguess = document.querySelector(".guess")




let score= 20


function checkHandler(){
if (val.value == guessNumber){
    guess.textContent = "you won!"
    highscore.textContent = `Highscore:${guessNumber}`
    tag.textContent = guessNumber
    conatiner.style.backgroundColor = "green"
    scores.textContent = `Score:${guessNumber}`
    headguess.textContent = "Correct Answer!"
}
else {
    guess.textContent=val.value > guessNumber? "Too-High": "Too-low"
    scores.textContent = `Score:${score--}`
}
}