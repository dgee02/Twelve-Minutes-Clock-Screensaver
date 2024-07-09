const { ipcRenderer } = require('electron');

const hourHand = document.getElementById("hour-hand");
const minHand = document.getElementById("min-hand");

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() ;

    const minuteDegrees = 6 * minutes;
    const hourDegrees = 30 * hours + minutes / 2;

    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const now = new Date();
const delay = 1000 - now.getMilliseconds();

setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
}, delay);

document.addEventListener('mousemove', (event) => {
    ipcRenderer.send('mouse-moved', { x: event.clientX, y: event.clientY });
});

document.addEventListener('click', (event) => {
    ipcRenderer.send('mouse-clicked', { x: event.clientX, y: event.clientY, button: event.button });
});

document.addEventListener('keydown', (event) => {
    ipcRenderer.send('key-pressed', { key: event.key, code: event.code });
});
