let random = parseInt(Math.random() * 100 + 1)
console.log(random)

const userinput = document.querySelector(".guessField")
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")
const message = document.querySelector(".message")

const p = document.createElement("p")

let prevguess = []
let numguess = 1

let plagame = true
if (plagame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess < 1) {
        message.innerHTML = `Please write number greater then 1'`;
    } else if (guess > 100) {
        message.innerHTML = `Please write number lesser then or equal to 100'`;
    } else if (isNaN(guess)) {
        message.innerHTML = `Please write a NUMBER '`;
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, correct number is ${random}`)
            endgame()
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === random) {
        displayMessage('you guesses it right! Congratulation 🎉 reload to play again')
        userinput.disabled = true; 
        submit.disabled = true;
    } else if (guess < random) {
        displayMessage('too low')
    }
    else if (guess > random) {
        displayMessage('too high')
    }
}
function displayGuess(guess) {
    userinput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numguess++;
    remaining.innerHTML = `${11 - numguess} `;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newgame">start a new game</h2>`
    startover.appendChild(p);
    plagame = false;
    newgame();
}
function newgame() {
    const newGamebutton = document.querySelector("#newgame");
    newGamebutton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1)
        console.log(random)
        prevguess = []
        numguess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numguess} `;
        userinput.removeAttribute('disabled')
        startover.removeAttribute(p)
        plagame = true;
    })
}
