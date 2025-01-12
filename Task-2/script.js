let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

// Format time as HH:MM:SS
function formatTime() {
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start or resume the stopwatch
function startStopwatch() {
  running = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  
  timer = setInterval(function() {
    seconds++;
    
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    
    timeDisplay.textContent = formatTime();
  }, 1000);
}

// Stop the stopwatch
function stopStopwatch() {
  running = false;
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeDisplay.textContent = formatTime();
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
