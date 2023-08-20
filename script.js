'use strict';

// selecting elements 
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click",function(){
    // 1 generating a random dice roll
    let dice =Math.trunc(Math.random()*6)+1;

    // 2 display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3 check for rolled 1 and if true 
    if(dice !== 1){
        // add dice to current score 
        currentScore = currentScore + dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }else{
        // , switch to next player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer ===0 ? 1:0;
        currentScore = 0
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
})