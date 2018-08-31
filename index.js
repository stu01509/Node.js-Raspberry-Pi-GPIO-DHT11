//  Loading Modules
const express = require('express');
const bodyParser = require('body-parser');
const io = require('socket.io');
const rpiDhtSensor = require('rpi-dht-sensor');

//  Express Setting
const app = express();
const port = '8080';
app.set('view engine', 'ejs');
const routes = require('./routes');

//  Http urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
//  Loading JS CSS Plugins
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname.concat('/public')));

//  Express Route
app.get('/', routes.index);
app.post('/ajax', routes.ajax);
app.post('/control', routes.control);

const server = app.listen(port, () => {
  console.log('\x1b[44m', `Express Server is running at Port ${port}`);
});

//  Socket
const servIo = io.listen(server);

servIo.sockets.on('connection', (socket) => {
//  Sending DHT11 Data to Browser
  setInterval(() => {
    //  DHT11
    const dht = new rpiDhtSensor.DHT11(4);
    const readout = dht.read();
    const temp = (readout.temperature.toFixed(0));
    const humid = (readout.humidity.toFixed(0));

    socket.emit('dht11', {
      temp, humid,
    });
  }, 3000);
});
