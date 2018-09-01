  <p align=center>
<img src="">
</p>


<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>


## Node.js-Raspberry-Pi-GPIO-DHT11

Raspberry Pi gpio control and DHT11 temperature humid sensor Web GUI system,
Real time temperature and humid data by socket, Using Chart.js to show real time data,
Based on Node.js.

## Features

  * 📱 RWD Design.
  * 🔘 Raspberry Pi GPIO control.
  * 🌐 Web GUI dashboard, Real time data.
  * 🌡️ DHT11 sensor read temperature and humid.
  * 🔄 Raspberry Pi system shutdown and restart mangement.

## Requirement
  
  * [Node.js](https://nodejs.org/en/) version 6.0.0 or higher.
  * [NPM](https://www.npmjs.com/) version 5.6.0 or higher.
  * [C library for Broadcom BCM 2835](http://www.airspayce.com/mikem/bcm2835/)
  
## Setting

1. Update Raspberry Pi Node.js Version.

```Shell
  $ wget https://nodejs.org/dist/v10.0.0/node-v10.0.0-linux-armv7l.tar.xz

  $ tar -xvf node-v10.0.0-linux-armv7l.tar

  $ cd node-v10.0.0-linux-armv7l/
  
  $ sudo cp -R * /usr/local

```

2. Install C library for Broadcom BCM 2835.

```Shell
  $ wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.56.tar.gz

  $ tar zxvf bcm2835-1.56.tar.gz
  
  $ cd bcm2835-1.56

  $ ./configure

  $ make

  $ sudo make check

  $ sudo make install

```

3. Restart Raspberry Pi System.

When you complete the installation and upgrade software, You have to restart the system.

## Requirement Parts & Cablage

1. DHT11 Sensor.
2. 10K Resistor.
3. GPIO Cable.
4. LED.

|Sensor |Pin    |Raspberry Pi Pin|
|-------|-------|-------------:|
|DHT11  |VCC    |5V            |
|       |GND    |GND           |
|       |Data   |D4            |



## Usage

## Demo

## License

MIT
