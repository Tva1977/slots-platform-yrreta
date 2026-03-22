const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let serverProcess;

function createWindow () {

  // INICIA SERVIDOR AUTOMÁTICO
  serverProcess = spawn('node', ['server.js'], {
    shell: true
  });

  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    alwaysOnTop: true,
    autoHideMenuBar: true
  });

  win.loadFile(path.join(__dirname, 'admin/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (serverProcess) {
    serverProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
