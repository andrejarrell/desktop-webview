const { url } = require('../config.json')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        autoHideMenuBar: true
    })
    window.loadURL(url)
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
