jsfxr
=====

as3fxr (http://code.google.com/p/as3sfxr/) synth port to JavaScript created for js13kGames

Right now the minified size is 3357 bytes (Closure with Advanced Mode) but I am sure this can be pushed further. Pull requests are welcome ;)

Tested with FF 14 and Chrome 21

Usage
=====

 * Create a sound with as3sfxr (http://www.superflashbros.net/as3sfxr/)
 * Copy settings string (Just use Ctrl+C on the as3fxr page) and save it
 * Play sound in JS using the following code:

```javascript  
 var synth = new SfxrSynth();
 var soundURL = synth.getWave(params);
 var player = new Audio();
 player.src = soundURL;
 player.play();
```

 Also check out demo.html for some examples. Demo is also available as jsFiddle here: http://jsfiddle.net/bkr8K/
