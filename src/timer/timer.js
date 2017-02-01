// Countdown
let time = (function() {
  let _elHours = document.querySelector('.timer__moment-piece-hours');
  let _elMinutes = document.querySelector('.timer__moment-piece-minutes');
  let _elSeconds = document.querySelector('.timer__moment-piece-seconds');
  let _moment = moment().hours(0).minutes(0).seconds(0);
  let _aux = 0;

  
  let addHour = function() {
    if(_moment.hours() === 23) return;
    _moment = _moment.add(1, 'hour');
    render();

    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.hours() === 23) return;
        _moment = _moment.add(1, 'hour');
        render();
      }, 100);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let subtractHour = function() {
    if(_moment.hours() === 0) return;
    _moment = _moment.subtract(1, 'hour');
    render();
    
    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.hours() === 0) return;
        _moment = _moment.subtract(1, 'hour');
        render();
      }, 100);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let addMinute = function() {
    if(_moment.hours() === 23 && _moment.minute() === 59) return;
    _moment = _moment.add(1, 'minute');
    render();

    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.hours() === 23 && _moment.minute() === 59) return;
        _moment = _moment.add(1, 'minute');
        render();
      }, 55);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let subtractMinute = function() {
    if(_moment.hours() === 0 && _moment.minute() === 0) return;
    _moment = _moment.subtract(1, 'minute');
    render();

    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.hours() === 0 && _moment.minute() === 0) return;
        _moment = _moment.subtract(1, 'minute');
        render();
      }, 55);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let addSecond = function() {
    if(_moment.minute() === 59 && _moment.second() === 59) return;
    _moment = _moment.add(1, 'second');
    render();

    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.minute() === 59 && _moment.second() === 59) return;
        _moment = _moment.add(1, 'second');
        render();
      }, 10);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let subtractSecond = function() {
    if(_moment.minute() === 59 && _moment.second() === 59) return;
    _moment = _moment.add(1, 'second');
    render();

    setTimeout(function() {
      let interval = setInterval(function() {
        if(_moment.minute() === 59 && _moment.second() === 59) return;
        _moment = _moment.add(1, 'second');
        render();
      }, 10);

      this.addEventListener('mouseup', function() {
        clearInterval(interval);
      });
    }, 500);
  }

  let run = function() {
    let momentZero = _moment.hours() === 0 && _moment.minutes() === 0 && _moment.seconds() === 0;
    let running = false;
    console.log(momentZero, running);
    if(momentZero && !running) return;
    
    let interval = setInterval(function() {
      running = true;
      _moment = _moment.subtract(1, 'second');
      render();
      if(momentZero) return clearInterval(interval);
    }, 1000);

  };

  let render = function(moment) {
    if(!moment) moment = _moment;

    _elHours.innerHTML = moment.hours() < 10 ? '0' + moment.hours() : moment.hours();
    _elMinutes.innerHTML = moment.minutes() < 10 ? '0' + moment.minutes() : moment.minutes();
    _elSeconds.innerHTML = moment.seconds() < 10 ? '0' + moment.seconds() : moment.seconds();
  };

  // Events
  document.querySelector('#add-hour').addEventListener('mousedown', addHour, false);
  document.querySelector('#add-minute').addEventListener('mousedown', addMinute, false);
  document.querySelector('#add-second').addEventListener('mousedown', addSecond, false);

  document.querySelector('#subtract-hour').addEventListener('mousedown', subtractHour, false);
  document.querySelector('#subtract-minute').addEventListener('mousedown', subtractMinute, false);
  document.querySelector('#subtract-second').addEventListener('mousedown', subtractSecond, false);
  
  document.querySelector('#run-it').addEventListener('click', run, false);

  return {
    // Revealed
    // render: render
  };
})();

// time.render();