jsfxr
=====

as3fxr (http://code.google.com/p/as3sfxr/) synth port to JavaScript created for js13kGames

Right now the minified size is 3357 bytes (Closure with Advanced Mode) but I am sure this can be pushed further. Pull requests are welcome ;)

Tested with FF 14 and Chrome 21

Usage
=====

 * Create a sound with as3sfxr (http://www.superflashbros.net/as3sfxr/)
 * Copy settings string (Just use Ctrl+C on the as3fxr page) and save it (should look something like this "0,0.7171,0.4522,0.002,0.9266,0.2473,,0.1576,0.7738,-0.451,0.4825,0.9674,0.7548,-0.1474,-0.4877,-0.2089,0.4686,-0.0014,0.9483,0.0405,-0.2313,0.0003,-0.598,0.5")
 * Play sound in JS using the following code:

```javascript  
 var synth = new SfxrSynth();
 var soundURL = synth.getWave("as3fxr settings string here");
 var player = new Audio();
 player.src = soundURL;
 player.play();
```

 Also check out demo.html for some examples. Demo is also available as jsFiddle as well: http://jsfiddle.net/bkr8K/
