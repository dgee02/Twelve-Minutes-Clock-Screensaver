const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        fullscreen: true,
        alwaysOnTop: true,
        focusable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.insertCSS('body { cursor: none; }');
    });
    mainWindow.focus();
}

app.whenReady().then(() => {
    const args = process.argv.slice(1);

    if (args.includes("/p")) {
        // Handle preview mode
        const hWnd = parseInt(args[args.indexOf("/p") + 1], 10);
        createWindow();
        mainWindow.setBounds({ x: 0, y: 0, width: 320, height: 240 });
    } else if (args.includes("/s")) {
        // Handle screensaver mode
        createWindow();
    } else if (args.includes("/c")) {
        // Handle configuration mode (if applicable)
        app.quit();
    } else {
        createWindow();
    }
});

ipcMain.on("mouse-moved", (event, position) => {
    app.quit();
});

ipcMain.on("mouse-clicked", (event, details) => {
    app.quit();
});

ipcMain.on("key-pressed", (event, details) => {
    app.quit();
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
