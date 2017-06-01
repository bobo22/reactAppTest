import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './nav.css';

class Nav extends Component {

  handleClick = () =>{
      this.props.hideNav();
  };

    render() {
        return (
            <div className="shownav">
                <ul className="navlist">
                    <li className="navoption" onClick={this.handleClick}>
                        <Link to="/picture">图片</Link>
                    </li>
                    <li className="navoption" onClick={this.handleClick}>
                        <Link to="/music">音乐</Link>
                    </li>
                    <li className="navoption" onClick={this.handleClick}>
                        <Link to="/movie">影视</Link>
                    </li>
                    <li className="navoption">APP下载</li>
                    <li className="navoption">关于</li>
                </ul>
            </div>

        );
    }
}

export default Nav;
