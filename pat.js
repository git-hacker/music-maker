

(function(exports, $container){
  function MM(beatsPerLoop, beatsPerMinute){
    this.beatsPerLoop = beatsPerLoop
    this.beatsPerMinute = beatsPerMinute
    this._loops = {}
    this._stop = false
  }
  MM.prototype = {
    add: function(name, beats){
      this._loops[name] = beats.split(' ')
      return this
    },
    remove: function(name){
      delete this._loops[name]
    },
    list: function(){
      var count = 0;
      for (key in this._loops) {
        console.log(key + ': ' + this._loops[key].join(' '));
        count++;
      }
      console.log(count + ' loop(s)');
    },
    clear: function(){
      this._loops = {}
    },
    stop: function(){
      this._stop = true
    },
    start: function(){
      this._stop = false
      superloop(0, superloops.beatsPerLoop, superloops.beatsPerMinute, superloops);
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
      // $("input").val(String.fromCharCode(e.which));
      $("html").trigger(e);
    }
  }
  // superloop(0, superloops.beatsPerLoop, superloops.beatsPerMinute, superloops);
  function superloop(beat, bpl, bpm, SL) {
    _.each(SL._loops, function(loop) {

      playBeat(loop, beat);
    });
    if (SL._stop)
      return
    setTimeout(function(){
      var nextBeat = (beat+1)%bpl;
      superloop(nextBeat, bpl, bpm, SL);
    }, (1000 * 60) / bpm);
  }
  exports.MM = MM;
  exports.superloop = superloop

  if ($container) {
    $container.append('<div style="position:fixed; top: 10px; left: 10px;font-family:helvetica; font-size: 30px;color: white; padding: 20px;background-color: rgba(0,0,0,0.2);border: 5px solid black;">作曲：Helen</div>');
  }
})(window, $("html"))


var superloops = new MM(110, 300)
superloops.stop()

var tapMap={
  '1':{
    key: 'stop',
    method: superloops.start
  },
  '-1':{
    key: 'start',
    method: superloops.stop
  }
}
var tap = -1
$("#start").on('click', function(){
  tap = tap * -1
  this.innerHTML = tapMap[tap].key;
  if(tap==1){
    superloops.start()
  }else{
    superloops.stop()
  }
  // (tapMap[tap].method)()
})
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
  superloops.add('d', [
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - -  - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    'x - - - - - - -',
    '- - - - - - - -',
  ].join(' ')
)
superloop(0, superloops.beatsPerLoop, superloops.beatsPerMinute, superloops);




