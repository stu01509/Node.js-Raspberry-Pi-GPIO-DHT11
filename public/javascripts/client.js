(function(){
// Control Raspberry Pi GPIO Output.
$(function () {
  $('.gpio-checkbox').on('change', function () {
    let data = {};
    data.action = 'write';
    data.gpio = $(this).data('gpio');
    data.status = this.checked;
    console.log(data);
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/ajax',
      error: function (data) {
        alert('Error');
      },
    });
  });
});

// Shutdown Raspberry Pi System.
$(function() {
  $('#wantShut').click('clcik',function () {
    console.log('Sending ShutDown Signal');
    const shut = {};
    shut.action = '0';

    $.ajax({
      type: 'POST',
      data: JSON.stringify(shut),
      contentType: 'application/json',
      url: '/control',
      error: function (data) {
        alert('Error');
      },
    });
    console.log(shut);
    $('#shutdown').modal('hide');
  });
});

// Restart Raspberry Pi System.
$(function() {
  $('#wantRestart').click('clcik', function() {
    console.log('Sending Restart Signal');
    const restart = {};
    restart.action = '1';

    $.ajax({
      type: 'POST',
      data: JSON.stringify(restart),
      contentType: 'application/json',
      url: '/control',
      error: function (data) {
        alert('Error');
      },
    });
    console.log(restart);
    $('#restart').modal('hide');
  });
});
})();