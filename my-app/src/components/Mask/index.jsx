import React, { Component } from 'react';
import './mask.css';


class Mask extends Component {

  handleClick = () =>{
      this.props.hideNav();
  };

  render() {
    return (
      <div className="mask" onClick={this.handleClick}>

      </div>
    );
  }
}

export default Mask;
