const heading = document.querySelector(".heading");
const liveSession = document.querySelector(".liveSession");
const minSession = document.querySelector(".minSession");
const sessionTimer = document.querySelector(".sessionTimer");
const addSession = document.querySelector(".addSession");
const minBreak = document.querySelector(".minBreak");
const breakTimer = document.querySelector(".breakTimer");
const addBreak = document.querySelector(".addBreak");
const reset = document.querySelector(".resetButton");

let status = true;
if (status === true) {
  heading.textContent = "Keep Grinding";
} else {
  heading.textContent = "BREAK TIME!!!";
}

heading.addEventListener("click", startClock);

function startClock(e) {
  let duration = 60 * 5;
  let timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    liveSession.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// have a way to start the clock

// have a way to reset the clock

// set up the countdown to work
