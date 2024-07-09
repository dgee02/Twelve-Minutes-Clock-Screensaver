const { ipcRenderer } = require('electron');

document.addEventListener('click', () => {
    ipcRenderer.send('mouse-clicked');
});