jsfxr
=====

as3fxr (http://code.google.com/p/as3sfxr/) synth port to JavaScript created for js13kGames

Current version contains various performance/browser compatibility improvements by [@maettig](https://twitter.com/maettig)

The minified size is 3169 bytes (Closure with Advanced Mode) but I am sure this can be pushed further. Pull requests are welcome ;)

Tested with FF 14, Chrome 21 and Opera 12

Usage
=====

 * Create a sound with as3sfxr (http://www.superflashbros.net/as3sfxr/)
 * Copy settings string (Just use Ctrl+C on the as3fxr page) and save it (should look something like this "0,,0.1812,,0.1349,0.4524,,0.2365,,,,,,0.0819,,,,,1,,,,,0.5")
 * Play sound in JS using the following code:

```javascript  
 var soundURL = jsfxr("as3fxr settings string here");
 var player = new Audio();
 player.src = soundURL;
 player.play();
```

Check out demo.html for some examples. Interactive demo is also available as [jsFiddle](http://jsfiddle.net/mneubrand/tsC8j/)
