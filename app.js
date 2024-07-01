const bot = document.getElementById('bot');
const userdisplay = document.getElementById('user');
const result = document.getElementById('result');
const possible = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let resultt;

possible.forEach(possible => possible.addEventListener('click', (e) => {
    userChoice = e.target.closest('button').id;
    userdisplay.innerHTML = userChoice;
    generatecomputerchoice();
    getresult();
}));

function generatecomputerchoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'stone';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }
    bot.innerHTML = computerChoice;
}

function getresult() {
    if (computerChoice === userChoice) {
        resultt = 'Draw!';
        result.className = 'draw';
    }
    if (computerChoice === 'stone' && userChoice === 'paper') {
        resultt = 'Win:)';
        result.className = 'win';
    }
    if (computerChoice === 'stone' && userChoice == 'Scissors') {
        resultt = 'Lost:(';
        result.className = 'lose';
    }
    if (computerChoice === 'paper' && userChoice == 'stone') {
        resultt = 'Lost:(';
        result.className = 'lose';
    }
    if (computerChoice === 'paper' && userChoice == 'Scissors') {
        resultt = 'Win:)';
        result.className = 'win';
    }
    if (computerChoice === 'Scissors' && userChoice == 'stone') {
        resultt = 'Win:)';
        result.className = 'win';
    }
    if (computerChoice === 'Scissors' && userChoice == 'paper') {
        resultt = 'Lost:(';
        result.className = 'lose';
    }

    result.innerHTML = resultt;
}
