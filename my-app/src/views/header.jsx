import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <span className="list"></span>
          <span className="text">一个</span>
          <span className="search"></span>
      </div>
    );
  }
}

export default Header;
