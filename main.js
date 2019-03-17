const heading = document.querySelector(".heading");
const liveSession = document.querySelector(".liveSession");
const minSession = document.querySelector(".minSession");
const sessionTimer = document.querySelector(".sessionTimer");
const addSession = document.querySelector(".addSession");
const minBreak = document.querySelector(".minBreak");
const breakTimer = document.querySelector(".breakTimer");
const addBreak = document.querySelector(".addBreak");
const reset = document.querySelector(".resetButton");

heading.addEventListener("click", startClock, 5000);

function startClock(e) {
  let work = true;
  heading.textContent = "Keep Grinding";
  let duration = 60 * 25;
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
      heading.textContent = "Break Time!"
      breakTime();
    }
  }, 1000);
}

function breakTime() {
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
      heading.textContent = "Keep Grinding";
    }
  }, 1000);
}

startClock();
