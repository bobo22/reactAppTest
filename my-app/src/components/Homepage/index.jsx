import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, IndexRoute} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from '../Header';
import Nav from '../Nav';
import Mask from '../Mask';
import '../../App.css';

class Homepage extends Component {
    state = {
        isShowNav: false
    }

    showNav = () => {
        this.setState({isShowNav: true})
    }
    hideNav = () => {
        this.setState({isShowNav: false})
    }
    render() {
        return (
            <div className="content">
                <Header showNav={this.showNav}/>
                <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {this.state.isShowNav
                        ? <Nav isShowNav={this.state.isShowNav} hideNav={this.hideNav}/>
                        : null
}
                </CSSTransitionGroup>
                {this.state.isShowNav
                    ? <Mask hideNav={this.hideNav}/>
                    : null
}
                {this.props.children}
            </div>
        );
    }
}

export default Homepage;
