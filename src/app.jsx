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
    '/samples/1.1.wav', 
    '/samples/1.2.wav', 
    '/samples/1.3.wav', 
    '/samples/1.4.wav', 
    '/samples/1.5.wav',
    '/samples/1.6.wav',
    '/samples/1.7.wav',
  ],
  [],
  [],
  [],
  []
];

class SeeNSay extends React.Component {
  constructor(props) {
    super(props);

    this.pointers = [0,0,0,0,0];
  }

  playSample(sampleUrl) {
    const sample = new Audio(sampleUrl);
    sample.play();
  }

  handleButtonPress(i) {
    // Play the current index
    this.playSample(SAMPLES[i][this.pointers[i]]);
    // Advance the index, bounded by sample length
    this.pointers[i] = (this.pointers[i] + 1) % SAMPLES[i].length;
  }

  render() {
    const buttons = BUTTONS.map((color, i) => {
      return (
        <SeeNSayButton color={x} onClick={() => this.handleButtonPress(i)} />
      )
    });

    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default SeeNSay;