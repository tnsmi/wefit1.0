document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startActivity');
    const logButton = document.getElementById('logActivity');
    const activityLog = document.getElementById('activityLog');
    const activityInput = document.getElementById('activityInput');
    const timerDisplay = document.getElementById('timerDisplay');

    let timer;
    let seconds = 0;

    // Format seconds into HH:MM:SS
    const formatTime = (sec) => {
        const h = Math.floor(sec / 3600).toString().padStart(2, '0');
        const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    // Start the timer
    const startTimer = () => {
        if (timer) return; // Prevent multiple timers
        timer = setInterval(() => {
            seconds++;
            timerDisplay.textContent = `Elapsed Time: ${formatTime(seconds)}`;
        }, 1000);
    };

    // Stop the timer
    const stopTimer = () => {
        clearInterval(timer);
        timer = null;
    };

    // Start activity
    startButton.addEventListener('click', () => {
        startTimer();
        activityLog.innerHTML += `<p>Activity started at ${new Date().toLocaleTimeString()}</p>`;
    });

    // Log activity
    logButton.addEventListener('click', () => {
        const activityName = activityInput.value.trim();
        if (activityName) {
            activityLog.innerHTML += `<p>Completed: ${activityName} at ${new Date().toLocaleTimeString()} (Duration: ${formatTime(seconds)})</p>`;
            activityInput.value = ''; // Clear input
            seconds = 0; // Reset timer
            timerDisplay.textContent = 'Elapsed Time: 00:00:00';
            stopTimer();
        } else {
            alert('Please enter an activity name!');
        }
    });
});