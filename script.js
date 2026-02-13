/*


// Download logic
document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Valentines_Day_Special.apk"; // CHANGE THIS
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

*/


// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 300);




document.getElementById("downloadBtn").addEventListener("click", () => {
  location.href = "Valentines_Day_Special (5).apk"; // CHANGE THIS
});











const container = document.querySelector(".container");
const thankYouCard = document.getElementById("thankYouCard");

document.getElementById("downloadBtn").addEventListener("click", () => {
  container.classList.add("fade-out");

  setTimeout(() => {
    document.querySelector("h1").style.display = "none";
    document.querySelector(".subtitle").style.display = "none";
    document.getElementById("downloadBtn").style.display = "none";
    document.querySelector(".note").style.display = "block";

    thankYouCard.classList.remove("hidden");
    container.classList.remove("fade-out");
    container.classList.add("fade-in");
  }, 600);
});





// ============================
// EDITABLE TARGET DATE & TIME
// ============================
const TARGET_DATE = "February 13, 2026 14:00:00";
const targetTime = new Date(TARGET_DATE).getTime();
const txtEl = document.getElementById("text");
const URL = document.getElementById("hiddenURL");
txtEl.innerText = `Countdown to ${formatTargetDate()} 2:00 PM:`;

const countdownEl = document.getElementById("countdownTimer");
let timerInterval = null;

function formatTargetDate() {
  return new Date(targetTime).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function startCountdown() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const now = Date.now();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(timerInterval);
      countdownEl.innerHTML = "💘 The moment has arrived. Love is here! 💘";
      txtEl.innerText = "Countdown Ended.";
      URL.style.display = "block";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownEl.innerHTML = `
      ${formatTargetDate()}<br>
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  }, 1000);
}

// OPTIONAL: call this when you want the timer to start
startCountdown();





















/*


// ============================
// EDITABLE TARGET DATE & TIME
// ============================
const TARGET_DATE2 = "February 14, 2026 00:00:00";
const targetTime2 = new Date(TARGET_DATE2).getTime();

const countdownEl2 = document.getElementById("countdownTimer2");
let timerInterval2 = null;

function formatTargetDate() {
  return new Date(targetTime2).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function startCountdown1() {
  if (timerInterval2) clearInterval(timerInterval2);

  timerInterval2 = setInterval(() => {
    const now2 = Date.now();
    const distance2 = targetTime - now2;

    if (distance2 <= 0) {
      clearInterval(timerInterval2);
      countdownEl2.innerHTML = "💘 The moment has arrived. Love is here! 💘";
      return;
    }

    const days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance2 / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance2 / (1000 * 60)) % 60);
    const seconds = Math.floor((distance2 / 1000) % 60);

    countdownEl2.innerHTML = `
      ${formatTargetDate()}<br>
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  }, 1000);
}

// OPTIONAL: call this when you want the timer to start
startCountdown1();




*/
