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
  }   
  
}
