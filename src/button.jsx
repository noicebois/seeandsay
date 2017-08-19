import React from 'react';
import PropTypes from 'prop-types';

class SeeNSayButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="seensay-button" style={{backgroundColor: this.props.color}}>
      </button>
    );
  }
}

SeeNSayButton.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SeeNSayButton;