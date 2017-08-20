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

  playSample(sampleUrl) {
    const sample = new Audio(sampleUrl);
    sample.play();
  }

  handleButtonPress(i) {
    // Advance the index, bounded by sample length
    this.pointers[i] = (this.pointers[i] + 1) % SAMPLES[i].length;
    // Play the current index
    this.playSample(`samples/${SAMPLES[i][this.pointers[i]]}`);


  }

  playback() {
    this.pointers.forEach()
  }

  render() {
    const buttons = BUTTONS.map((color, i) => {
      return (
        <SeeNSayButton key={color} color={color} onClick={() => this.handleButtonPress(i)} />
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
