let minutes = 25;
let seconds = 00;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds'); 

const pomodoroT = document.getElementById('pomodoro');
const shortB = document.getElementById('short');
const longB = document.getElementById('long');
const buttonsB = document.querySelectorAll('.buttonsB');

let counterInterval = undefined;


// style change

function stylesS(color, buttons) {
    buttonsB.forEach(element => {
        element.style.background = 'rgba(160,152,152,0.4)';
        element.removeAttribute('data','active');
    });

    document.body.style.background = color;
    buttons.style.background = 'rgb(174, 191, 118)';
    buttons.setAttribute('data','active');
}

function pomodoro() {
    pomodoroT.setAttribute('data', 'active');
    stylesS('rgb(217, 85, 80)', pomodoroT);
    resetCounter();
}

function short() {
    stylesS('rgb(76, 145, 149)', shortB);
    resetCounter();
}

function long() {
    stylesS('rgb(164, 134, 207)', longB);
    resetCounter();
}

// counter

function updateCounterEl(){
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startCounter() {
    if(counterInterval) return; 

    counterInterval = setInterval( () => {
        if (!seconds) {
            if (!minutes) {
                clearInterval(counterInterval)
                alert ('time is up!')
            } else {
                seconds = 59;
                --minutes}
            } else {
                --seconds
            }

            updateCounterEl ()
        }, 1000)
    } 

function pauseCounter() {
    destroyInterval();
}

function destroyInterval() {
    clearInterval(counterInterval);
    counterInterval = undefined;
}

function resetCounter() {
    destroyInterval();
    seconds = 0;
    if (pomodoroT.hasAttribute('data', 'active')) {
        minutes = 25;
    } else if (shortB.hasAttribute('data', 'active')) {
        minutes = 5;
    } else {
        minutes = 15;
    }
  
    updateCounterEl();
}