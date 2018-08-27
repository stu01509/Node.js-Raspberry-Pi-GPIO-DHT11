(function(){
  const socket = io.connect();

  socket.on('dht11', function (data) {
    console.log(data);
    const d = new Date();
    if (tempChart.data.datasets[0].data.length < 10) {
      tempChart.data.datasets[0].data.push(data.temp);
      tempChart.data.labels.push(d.getMonth() + 1 + '/' + d.getDate() + '\r\n' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
      tempChart.update();
    } else {
      tempChart.data.datasets[0].data.shift();
      tempChart.data.labels.shift();
      tempChart.data.datasets[0].data.push(data.temp);
      tempChart.data.labels.push(d.getMonth() + 1 + '/' + d.getDate() + '\r\n' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
      tempChart.update();
    }
    if (tempChart.data.datasets[1].data.length < 10) {
      tempChart.data.datasets[1].data.push(data.humid);
      tempChart.update();
    } else {
      tempChart.data.datasets[1].data.shift();
      tempChart.data.datasets[1].data.push(data.humid);
      tempChart.update();
    }
  });
  
})();