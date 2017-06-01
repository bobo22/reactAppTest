import React, { Component } from 'react';
import './header.css';


class Header extends Component {

  handleClick = () =>{
      this.props.showNav();
  };

  render() {
    return (
      <div className="header">
          <div className="left" onClick={this.handleClick}></div>
          <div className="right"></div>
          <div className="text">一个</div>
      </div>
    );
  }
}

export default Header;
