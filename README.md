C D E F G
==================



该项目的灵感主要来自[patatap](patatap.com),  patatap是一个声音游戏，可以用电脑键盘来控制音符的，并且可以在屏幕上看到音符的动画图形。可以让用户在电脑上随意创作自己喜欢的音乐。

我在patatap上进行了二次开发，这个项目我将自己喜欢的音乐节奏组合起来，用js控制按键，用代码写出我想要的音乐，然后自动播放。

# API

## Class MM
1. constructor(beatsPerLoop: number, beatsPerMinute: number)
1. add(name: string, beats: [])
1. remove(name: string)
1. list()
1. clear()
1. start()

Example:

```js
  const superloops = new new MM(110, 300)
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

  superloop(0, superloops.beatsPerLoop, superloops.beatsPerMinute, superloops);

```








