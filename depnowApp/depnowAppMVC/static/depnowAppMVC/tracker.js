// tracker.js
let stopwatchInterval;
let countdownInterval;
let stopwatchTime = 0;
let countdownTime = 0;

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateStopwatchDisplay() {
  document.getElementById('stopwatch-display').innerText = formatTime(stopwatchTime);
}

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime += 1;
    updateStopwatchDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
  console.log("sigaigipadgfh");

}

function updateCountdownDisplay() {
  document.getElementById('countdown-display').innerText = formatTime(countdownTime);
}

function startCountdown() {
  const countdownInput = document.getElementById('time-dropdown');
  countdownTime = parseInt(countdownInput.value.split(':')[0], 10) * 60 
                //  parseInt(countdownInput.value.split(':')[1], 10) * 60 +
                //  parseInt(countdownInput.value.split(':')[2], 10);

  countdownInterval = setInterval(() => {
    if (countdownTime > 0) {
      countdownTime -= 1;
      updateCountdownDisplay();
     } //else {
    //   stopCountdown();
    //   alert('Countdown finished!');
    // }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  stopCountdown();
  document.getElementById('time-dropdown').value = '00:00:00';
  countdownTime = 0;
  updateCountdownDisplay();
 
}

var initialUrl = window.location.href;

// use json_script

// Show the modal popup
function showPopup() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Hide the modal popup
function hidePopup() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to execute when the user clicks "Yes, End Session" button in the popup
function endFocusSession() {
    // Perform any actions to end the focus session here
    console.log('Focus session ended.');

    // Hide the popup after the action is performed
    hidePopup();
}

// function redirectToTrackerOptions(selectElement) {
//     console.log("sigaigipadgfh");
//     var selectedOption = selectElement.value;
//     //dynamically resolve url 
//         var selectedOptionUrl = selectElement.options[selectElement.selectedIndex].dataset.url;
//         if (selectedOptionUrl) 
//         {
//             window.location.href = selectedOptionUrl;

//         }
//         else
//         {

//         }
//             //window.location.href = initalUrl;
            
        

// }

// Rest of your countdown timer functions...

// function updateCountdownDisplay() {
//   const countdownDisplay = document.getElementById('countdown-time');
//   countdownDisplay.textContent = formatTime(countdownTime);

//   const circle = document.getElementById('countdown-svg');
//   const progress = document.querySelector('.countdown-circle-progress');

//   // Calculate the percentage of the countdown time remaining
//   const percentageRemaining = (countdownTime / initialCountdownTime) * 100;

//   // Update the circle's stroke-dashoffset to display the countdown progress
//   const circleLength = 2 * Math.PI * 45;
//   const offset = circleLength - (circleLength * percentageRemaining) / 100;
//   progress.style.strokeDashoffset = offset;
//}
