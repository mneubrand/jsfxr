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
  this.paramsDirty;  
  
  this._waveType       =   0;    // Shape of the wave (0:square, 1:saw, 2:sin or 3:noise)
  
  this._masterVolume     =   0.5;  // Overall volume of the sound (0 to 1)
  
  this._attackTime       =  0.0;  // Length of the volume envelope attack (0 to 1)
  this._sustainTime     =   0.0;  // Length of the volume envelope sustain (0 to 1)
  this._sustainPunch     =   0.0;  // Tilts the sustain envelope for more 'pop' (0 to 1)
  this._decayTime       =   0.0;  // Length of the volume envelope decay (yes, I know it's called release) (0 to 1)
  
  this._startFrequency     =   0.0;  // Base note of the sound (0 to 1)
  this._minFrequency     =   0.0;  // If sliding, the sound will stop at this frequency, to prevent really low notes (0 to 1)
  
  this._slide         =   0.0;  // Slides the note up or down (-1 to 1)
  this._deltaSlide       =   0.0;  // Accelerates the slide (-1 to 1)
  
  this._vibratoDepth     =   0.0;  // Strength of the vibrato effect (0 to 1)
  this._vibratoSpeed     =   0.0;  // Speed of the vibrato effect (i.e. frequency) (0 to 1)
  
  this._changeAmount     =   0.0;  // Shift in note, either up or down (-1 to 1)
  this._changeSpeed     =   0.0;  // How fast the note shift happens (only happens once) (0 to 1)
  
  this._squareDuty       =   0.0;  // Controls the ratio between the up and down states of the square wave, changing the tibre (0 to 1)
  this._dutySweep       =   0.0;  // Sweeps the duty up or down (-1 to 1)
  
  this._repeatSpeed     =   0.0;  // Speed of the note repeating - certain variables are reset each time (0 to 1)
  
  this._phaserOffset     =   0.0;  // Offsets a second copy of the wave by a small phase, changing the tibre (-1 to 1)
  this._phaserSweep     =   0.0;  // Sweeps the phase up or down (-1 to 1)
  
  this._lpFilterCutoff     =   0.0;  // Frequency at which the low-pass filter starts attenuating higher frequencies (0 to 1)
  this._lpFilterCutoffSweep =   0.0;  // Sweeps the low-pass cutoff up or down (-1 to 1)
  this._lpFilterResonance   =   0.0;  // Changes the attenuation rate for the low-pass filter, changing the timbre (0 to 1)
  
  this._hpFilterCutoff     =   0.0;  // Frequency at which the high-pass filter starts attenuating lower frequencies (0 to 1)
  this._hpFilterCutoffSweep =   0.0;  // Sweeps the high-pass cutoff up or down (-1 to 1)
  
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
    
    this.waveType =         parseInt(values[0]) || 0;
    this.attackTime =        parseFloat(values[1]) || 0;
    this.sustainTime =        parseFloat(values[2]) || 0;
    this.sustainPunch =      parseFloat(values[3]) || 0;
    this.decayTime =        parseFloat(values[4]) || 0;
    this.startFrequency =      parseFloat(values[5]) || 0;
    this.minFrequency =      parseFloat(values[6]) || 0;
    this.slide =          parseFloat(values[7]) || 0;
    this.deltaSlide =        parseFloat(values[8]) || 0;
    this.vibratoDepth =      parseFloat(values[9]) || 0;
    this.vibratoSpeed =      parseFloat(values[10]) || 0;
    this.changeAmount =      parseFloat(values[11]) || 0;
    this.changeSpeed =        parseFloat(values[12]) || 0;
    this.squareDuty =        parseFloat(values[13]) || 0;
    this.dutySweep =        parseFloat(values[14]) || 0;
    this.repeatSpeed =        parseFloat(values[15]) || 0;
    this.phaserOffset =      parseFloat(values[16]) || 0;
    this.phaserSweep =        parseFloat(values[17]) || 0;
    this.lpFilterCutoff =      parseFloat(values[18]) || 0;
    this.lpFilterCutoffSweep =    parseFloat(values[19]) || 0;
    this.lpFilterResonance =    parseFloat(values[20]) || 0;
    this.hpFilterCutoff =      parseFloat(values[21]) || 0;
    this.hpFilterCutoffSweep =    parseFloat(values[22]) || 0;
    this.masterVolume =       parseFloat(values[23]) || 0;
    
    return true;
  }   
  
}
