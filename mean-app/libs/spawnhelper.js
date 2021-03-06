'use strict';

var debug = require('debug')('swara:spawnhelper');

module.exports = {

  spawn : function (options) {

    var fs = require('fs'),
      _ = require('lodash'),
      moment = require('moment'),
      domain = require('domain').create(),
      spawn = require('child_process').spawn,
      util = require('util'),
      app = require('../app');

    var defaults = {
      name          : '',
      command       : '',
      debugPort     : app.getNextDebugPort(),
      logFile       : '',
      args          : [],
      onBeforeSpawn : function () {
      },
      onAfterSpawn  : function (/* spawnedProcess */) {
      }
    };

    var settings = _.defaults(options, defaults);

    if (!settings.name || !settings.command || !settings.logFile) {
      throw new Error('name, command and logFile cannot be empty');
    }

    domain.on('error', function (error) {
      console.error('!!ERROR: %j', error);
    });

    domain.run(function () {

      var stdout, stderr;

      stderr = stdout = fs.openSync(settings.logFile, 'w+');

      var startMarker = util.format('Beginning process <strong>%s</strong> - (%s)\n--------------\n',
        settings.name, moment());
      fs.writeSync(stdout, startMarker);

      if (typeof(settings.onBeforeSpawn) === 'function') {
        settings.onBeforeSpawn();
      }

      debug('Starting the spawnedProcess named %s...', settings.name);
      var args = ['--debug=' + settings.debugPort, settings.command].concat(settings.args);
      var spawnedProcess = spawn('node', args, {
        env   : process.env,
        stdio : ['pipe', stdout, stderr]
      });

      if (typeof(settings.onAfterSpawn) === 'function') {
        settings.onAfterSpawn(spawnedProcess);
      }

    });

  }

};
