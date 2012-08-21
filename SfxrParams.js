/**
 * SfxrParams
 * 
 * Copyright 2010 Thomas Vian
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * @author Thomas Vian
 */
function SfxrParams() {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  // Variables will be kept alive by function closures of the member functions below

  /** If the parameters have been changed since last time (shouldn't used cached sound) */
  var paramsDirty;  
  
  var _waveType       =   0;    // Shape of the wave (0:square, 1:saw, 2:sin or 3:noise)
  
  var _masterVolume     =   0.5;  // Overall volume of the sound (0 to 1)
  
  var _attackTime       =  0.0;  // Length of the volume envelope attack (0 to 1)
  var _sustainTime     =   0.0;  // Length of the volume envelope sustain (0 to 1)
  var _sustainPunch     =   0.0;  // Tilts the sustain envelope for more 'pop' (0 to 1)
  var _decayTime       =   0.0;  // Length of the volume envelope decay (yes, I know it's called release) (0 to 1)
  
  var _startFrequency     =   0.0;  // Base note of the sound (0 to 1)
  var _minFrequency     =   0.0;  // If sliding, the sound will stop at this frequency, to prevent really low notes (0 to 1)
  
  var _slide         =   0.0;  // Slides the note up or down (-1 to 1)
  var _deltaSlide       =   0.0;  // Accelerates the slide (-1 to 1)
  
  var _vibratoDepth     =   0.0;  // Strength of the vibrato effect (0 to 1)
  var _vibratoSpeed     =   0.0;  // Speed of the vibrato effect (i.e. frequency) (0 to 1)
  
  var _changeAmount     =   0.0;  // Shift in note, either up or down (-1 to 1)
  var _changeSpeed     =   0.0;  // How fast the note shift happens (only happens once) (0 to 1)
  
  var _squareDuty       =   0.0;  // Controls the ratio between the up and down states of the square wave, changing the tibre (0 to 1)
  var _dutySweep       =   0.0;  // Sweeps the duty up or down (-1 to 1)
  
  var _repeatSpeed     =   0.0;  // Speed of the note repeating - certain variables are reset each time (0 to 1)
  
  var _phaserOffset     =   0.0;  // Offsets a second copy of the wave by a small phase, changing the tibre (-1 to 1)
  var _phaserSweep     =   0.0;  // Sweeps the phase up or down (-1 to 1)
  
  var _lpFilterCutoff     =   0.0;  // Frequency at which the low-pass filter starts attenuating higher frequencies (0 to 1)
  var _lpFilterCutoffSweep =   0.0;  // Sweeps the low-pass cutoff up or down (-1 to 1)
  var _lpFilterResonance   =   0.0;  // Changes the attenuation rate for the low-pass filter, changing the timbre (0 to 1)
  
  var _hpFilterCutoff     =   0.0;  // Frequency at which the high-pass filter starts attenuating lower frequencies (0 to 1)
  var _hpFilterCutoffSweep =   0.0;  // Sweeps the high-pass cutoff up or down (-1 to 1)
  
  /**
   * Resets the parameters, used at the start of each generate function
   */
  this.resetParams = function resetParams() {
    paramsDirty = true;
    
    _waveType = 0;
    _startFrequency = 0.3;
    _minFrequency = 0.0;
    _slide = 0.0;
    _deltaSlide = 0.0;
    _squareDuty = 0.0;
    _dutySweep = 0.0;
    
    _vibratoDepth = 0.0;
    _vibratoSpeed = 0.0;
    
    _attackTime = 0.0;
    _sustainTime = 0.3;
    _decayTime = 0.4;
    _sustainPunch = 0.0;
    
    _lpFilterResonance = 0.0;
    _lpFilterCutoff = 1.0;
    _lpFilterCutoffSweep = 0.0;
    _hpFilterCutoff = 0.0;
    _hpFilterCutoffSweep = 0.0;
    
    _phaserOffset = 0.0;
    _phaserSweep = 0.0;
    
    _repeatSpeed = 0.0;
    
    _changeSpeed = 0.0;
    _changeAmount = 0.0;
  }
  
  //--------------------------------------------------------------------------
  //  
  //  Settings String Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Parses a settings string into the parameters
   * @param  string  Settings string to parse
   * @return      If the string successfully parsed
   */
  this.setSettingsString = function setSettingsString(string)
  {
    var values = string.split(",");
    
    if (values.length != 24) {
      return false;
    }
    
    waveType =         parseInt(values[0]) || 0;
    attackTime =        parseInt(values[1]) || 0;
    sustainTime =        parseInt(values[2]) || 0;
    sustainPunch =      parseInt(values[3]) || 0;
    decayTime =        parseInt(values[4]) || 0;
    startFrequency =      parseInt(values[5]) || 0;
    minFrequency =      parseInt(values[6]) || 0;
    slide =          parseInt(values[7]) || 0;
    deltaSlide =        parseInt(values[8]) || 0;
    vibratoDepth =      parseInt(values[9]) || 0;
    vibratoSpeed =      parseInt(values[10]) || 0;
    changeAmount =      parseInt(values[11]) || 0;
    changeSpeed =        parseInt(values[12]) || 0;
    squareDuty =        parseInt(values[13]) || 0;
    dutySweep =        parseInt(values[14]) || 0;
    repeatSpeed =        parseInt(values[15]) || 0;
    phaserOffset =      parseInt(values[16]) || 0;
    phaserSweep =        parseInt(values[17]) || 0;
    lpFilterCutoff =      parseInt(values[18]) || 0;
    lpFilterCutoffSweep =    parseInt(values[19]) || 0;
    lpFilterResonance =    parseInt(values[20]) || 0;
    hpFilterCutoff =      parseInt(values[21]) || 0;
    hpFilterCutoffSweep =    parseInt(values[22]) || 0;
    masterVolume =       parseInt(values[23]) || 0;
    
    return true;
  }   
  
}
