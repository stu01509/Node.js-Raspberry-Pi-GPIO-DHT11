// 'use strict'

// Loading Modules
const rpio = require('rpio');
const shell = require('shelljs');

exports.index = (req, res) => {
  res.render('index', {});
};

exports.ajax = (req, res) => {
  // if (req.body.hasOwnProperty('action')) {

  // }
  switch (req.body.action) {
    case 'write':
      rpio.init({
        mapping: 'gpio',
      });
      rpio.open(req.body.gpio, rpio.OUTPUT, +req.body.status);
      rpio.write(req.body.gpio, +req.body.status);
      res.contentType('json');
      res.send({
        gpio: req.body.gpio,
        status: req.body.status,
      });
      break;

    default:
      break;
  }
};

exports.control = (req, res) => {
  const controlStatus = req.body.action;
  const controlId = Number(controlStatus);
  if (controlId === 0) {
    console.log('ShutDown.');
    res.contentType('json');
    res.send({
      status: req.body.action,
    });
    shell.exec('sudo init 0');
  } else if (controlId === 1) {
    res.contentType('json');
    res.send({
      status: req.body.action,
    });
    console.log('Restarting.');
    shell.exec('sudo init 6');
  }
};
