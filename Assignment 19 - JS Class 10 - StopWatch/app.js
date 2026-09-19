var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var milliseconds = document.querySelector("#milliseconds");

var hourTimer = 0;
var minuteTimer = 0;
var secondTimer = 0;
var millisecondTimer = 0;
var intervalId = null;

function updateDisplay() {
    milliseconds.innerHTML = String(millisecondTimer).padStart(3, "0");
    seconds.innerHTML = String(secondTimer).padStart(2, "0");
    minutes.innerHTML = String(minuteTimer).padStart(2, "0");
    hours.innerHTML = String(hourTimer).padStart(2, "0");
}

function start() {

    if (intervalId) {
        return;
    }

    intervalId = setInterval(() => {

        millisecondTimer += 10;

        if (millisecondTimer > 999) {
            millisecondTimer = 0;
            secondTimer++;

            if (secondTimer > 59) {
                secondTimer = 0;
                minuteTimer++;

                if (minuteTimer > 59) {
                    minuteTimer = 0;
                    hourTimer++;
                }
            }
        }

        updateDisplay();

    }, 10);

}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    stop();
    millisecondTimer = 0;
    secondTimer = 0;
    minuteTimer = 0;
    hourTimer = 0;

    updateDisplay();
}