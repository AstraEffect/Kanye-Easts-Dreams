const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            
        }
    });
    mainWindow.loadFile(path.join(__dirname, './app/land.html'));
}
const loadLoginWindow = () => {
    const loginWindow = new BrowserWindow({
        width : 250,
        height: 350,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            
        }
    });
    loginWindow.loadFile(path.join(__dirname, './loader/loading.html'));
}
app.on('ready', loadLoginWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadLoginWindow();
    }
});
