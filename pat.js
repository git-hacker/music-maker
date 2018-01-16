(function(exports, $container){
  var SL = {
      beatsPerLoop: 120,
      beatsPerMinute: 300,
      _loops: {},
      _stop: false,
      add: function(name, beats) {
        this._loops[name] = beats.split(' ');
        return this;
      },
      remove: function(name, beats) {
        delete this._loops[name];
      },
      list: function() {
        var count = 0;
        for (key in this._loops) {
          console.log(key + ': ' + this._loops[key].join(' '));
          count++;
        }
        console.log(count + ' loop(s)');
      },
      clear: function() {
        this._loops = {};
      },
      stop: function() {
        this._stop = true;
      },
      start: function() {
        this._stop = false
        superloop(0, this.beatsPerLoop, this.beatsPerMinute);
      }
  }

  function playBeat(loop, beat) {
    if(loop[beat] !== '-'){
      var e = jQuery.Event("keydown");
      try {
        e.which = loop[beat].toUpperCase().charCodeAt(0);
      } catch(error) {
        console.warn('Typo at beat ' + beat + '');
      }
      $("input").val(String.fromCharCode(e.which));
      $("html").trigger(e);
    }
  }

  function superloop(beat, bpl, bpm) {
    _.each(SL._loops, function(loop) {
      playBeat(loop, beat);
    });
    if (SL._stop)
      return
    setTimeout(function(){
      var nextBeat = (beat+1)%bpl;
      superloop(nextBeat, bpl, bpm);
    }, (1000 * 60) / bpm);
  }

  superloop(0, SL.beatsPerLoop, SL.beatsPerMinute);
  exports.superloops = SL;
  if ($container) {
    $container.append('<div style="position:fixed; top: 10px; left: 10px;font-family:helvetica; font-size: 30px;color: white; padding: 20px;background-color: rgba(0,0,0,0.2);border: 5px solid black;">实现：Helen</div>');
  }
  console.clear()
})(window, $("html"));


superloops.add('a',
            [
              'k k - - o - - -',
              'k - - k j - - -',
              'k - - - o - - -',
              'k - - k j - - -',
              'k - - - o - - -',
              'k - - k j - - -',
              '- - - - - - - -',
              'k k - - o - - -',
              'k - - k j - - -',
              'k - - - o - - -',
              'k - - k j - - -',
              'k - - - o - - -',
              'k - - k j - - -',
              '- - - - - - - -',
            ].join(' ')
          )
          // .add('b',
          //   [
          //     '- - - - - - - -',
          //     '- - - - - - - -',
          //     '- - - - - - - -',
          //     '- - - - - - - -',
          //     '- - - - - - - -',
          //     '- - - - - - - -',
          //     '- q w - e e e d'
          //   ].join(' ')
          // )
          // setTimeout(superloops.remove('b'), 5000)

  superloops.add('b', [
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- q w - e - e d',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
    ].join(' ')
  )
  superloops.add('c', [
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- - - - - - - -',
      '- a s - s - s d',
    ].join(' ')
  )

