# Twelve Minutes Clock Screensaver

## Description
A screensaver made using [Electron](https://www.electronjs.org/) and inspired by the clock from the game [Twelve Minutes](https://store.steampowered.com/app/1097200/Twelve_Minutes/). The design of the clock caught my attention and I thought it would make a great screensaver! The screenshot below shows exactly what the screensaver looks like on a computer, with the clock hands synced to the local time of the computer.

![](https://raw.githubusercontent.com/dgee02/portfolio-content/main/projects/Twelve-Minutes-Clock-Screensaver.gif)

The screensaver features a black hour hand and a gray(ish) minute hand. In keeping with the game's design, there is no second hand. Instead, the minute hand moves in small increments, giving a smooth progression and allowing you to gauge the passage of time within the minute.

## Installation
To install and use this screensaver on your computer, follow the steps below. Please review the [Considerations](#considerations) section before proceeding.

### Prerequisites
Ensure that you have [Node.js](https://nodejs.org/en/download/) installed on your computer.

### Steps
1. Clone the repository to your computer:
    ```bash
    git clone https://github.com/dgee02/Twelve-Minutes-Clock-Screensaver.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Twelve-Minutes-Clock-Screensaver
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Package the application for Windows:
    ```bash
    npx electron-packager . TwelveMinutesClockScreensaver --platform=win32 --arch=x64 --out=dist --overwrite
    ```
5. Navigate to the output directory:
    ```bash
    cd dist/TwelveMinutesClockScreensaver-win32-x64
    ```
6. Rename the executable file:
    ```bash
    ren TwelveMinutesClockScreensaver.exe TwelveMinutesClockScreensaver.scr
    ```
7. Right-click on `TwelveMinutesClockScreensaver.scr` and select `Install`.

8. Open your Windows screensaver settings and select `TwelveMinutesClockScreensaver` from the dropdown menu.

9. Click `OK` to apply the screensaver.

## Considerations
- **Single Monitor Support**: This screensaver is best suited for single monitor setups. Multi-monitor configurations are not supported at this time.

- **Compatibility**: The screensaver has been tested only on Windows 10. Compatibility with other versions of Windows is not guaranteed.

- **Behavior**: The screensaver behaves like a typical screensaver. It will deactivate upon detecting mouse movement, mouse clicks, or keyboard presses.
