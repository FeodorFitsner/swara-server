'use strict';

var debug = require('debug')('swara:main');
var app = require('app');
var BrowserWindow = require('browser-window');
var devHelper = require('./libs/electron/devHelper');
var windowStateKeeper = require('./libs/electron/windowState');
var directoryPickerIPC = require('./libs/electron/directoryPickerIPC');
var mainWindow;

// Preserver of the window size and position between app launches.
var mainWindowState = windowStateKeeper('main', {
  width  : 1366,
  height : 768
});

debug('Setting up the app ready handler');
app.on('ready', function () {
  debug('Beginning the electron app ready handler');
  mainWindow = new BrowserWindow({
    x      : mainWindowState.x,
    y      : mainWindowState.y,
    width  : mainWindowState.width,
    height : mainWindowState.height
  });

  if (mainWindowState.isMaximized) {
    mainWindow.maximize();
  }

  //set up IPC for opening the directory picker from the angular directive
  directoryPickerIPC.setupIPC(mainWindow);

  // load the loading page
  mainWindow.loadUrl('file://' + __dirname + '/startup/index.html');

  devHelper.setDevMenu();
  // mainWindow.openDevTools();

  mainWindow.on('close', function () {
    var shutdownHandler = require('./startup/shutdown');
    shutdownHandler.shutdown();
    mainWindowState.saveState(mainWindow);
  });

  // navigate to the meanjs app
  debug('Setting the daemon.ready handler to navigate to the meanjs app');
  var daemon = require('./startup/startup.js');
  daemon.ready(function () {
    mainWindow.loadUrl('http://localhost:3000/');
  });

  // Start the server
  debug('Starting the MEAN app');
  daemon.start();

  debug('Finishing the elctron app ready handler');
});

app.on('window-all-closed', function () {
  app.quit();
});