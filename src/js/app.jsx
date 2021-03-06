import React from 'react';
import SeeNSayButton from './button';

const BUTTONS = [
  'rgb(196,21,178)',
  'rgb(18,202,236)',
  'rgb(87,201,15)',
  'rgb(254,133,29)',
  'rgb(246,54,199)'
]
const SAMPLES = [
  [
    '1.1.wav',
    '1.2.wav',
    '1.3.wav',
    '1.4.wav',
    '1.5.wav',
    '1.6.wav',
    '1.7.wav',
  ],
  [
    '2.1.wav',
    '2.2.wav',
    '2.3.wav',
    '2.4.wav',
    '2.5.wav',
    '2.6.wav',
  ],
  [
    '3.1.wav',
    '3.2.wav',
    '3.3.wav',
    '3.4.wav',
    '3.5.wav',
    '3.6.wav',
  ],
  [
    '4.1.wav',
    '4.2.wav',
    '4.3.wav',
    '4.4.wav',
    '4.5.wav',
    '4.6.wav',
    '4.7.wav',
  ],
  [
    '5.1.wav',
    '5.2.wav',
    '5.3.wav',
    '5.4.wav',
    '5.5.wav',
    '5.6.wav',
  ]
];

class SeeNSay extends React.Component {
  constructor(props) {
    super(props);

    this.pointers = [0,0,0,0,0];
  }

  // Return Promise on audio completion
  async playSample(sampleUrl) {
    return new Promise((resolve, reject) => {
      const sample = new Audio(sampleUrl);
      sample.onended = () => {
        sample.onended = null;
        resolve();
      };
      sample.play();
    });
  }

  handleSamplePress(i) {
    // Advance the index, bounded by sample length
    this.pointers[i] = (this.pointers[i] + 1) % SAMPLES[i].length;
    // Play the current index
    this.playSample(`samples/${SAMPLES[i][this.pointers[i]]}`);
  }

  async playBackSamples() {
    let i;
    for (i = 0; i < SAMPLES.length; i++) {
      await this.playSample(`samples/${SAMPLES[i][this.pointers[i]]}`);
    }
  }

  randomizeSamples() {
    this.pointers = this.pointers.map((pointer, i) => {
      return Math.floor(Math.random() * SAMPLES[i].length);
    });
  }

  playback() {
    this.pointers.forEach()
  }

  render() {
    const buttons = BUTTONS.map((color, i) => {
      return (
        <SeeNSayButton key={color} color={color} onClick={() => this.handleSamplePress(i)} />
      )
    });

    return (
      <div id="button-tray">
        {buttons}
        <div>
          <SeeNSayButton color={'rgb(231,19,8)'} onClick={() => this.playBackSamples()} />
          <SeeNSayButton color={'rgb(4,172,149)'} onClick={() => { this.randomizeSamples(); this.playBackSamples(); }} />
        </div>
      </div>
    );
  }
}

export default SeeNSay;
