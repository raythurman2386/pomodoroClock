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
