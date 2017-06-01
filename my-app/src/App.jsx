import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, IndexRoute} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from './components/Header';
import Movie from './components/Movie';
import Moviedetail from './components/Movie/moviedetail.jsx';
import Nav from './components/Nav';
import Picture from './components/Picture';
import Picturedetail from './components/Picture/picturedetail.jsx';
import Mask from './components/Mask';
import Music from './components/Music';
import Musicdetail from './components/Music/detail.jsx';
import Homepage from './components/Homepage';
import './App.css';

const routes = [
    {
        path: '/',
        component: Picture
    }, {
        path: '/movie',
        component: Movie
    }, {
        path: '/movie/moviedetail/:id',
        component: Moviedetail
    },{
        path: '/picture',
        component: Picture
    },{
      path: '/picture/picturedetail/:id',
      component: Picturedetail
    },{
      path: '/music',
      component: Music
    },{
      path: '/music/musicdetail/:id',
      component: Musicdetail
    }
]
const RouteWithSubRoutes = (route) => (
    <Route exact={true} path={route.path} render={props => (<route.component {...props} routes={route.routes}/>)}/>
)

class App extends Component {
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
            <Router>
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

                    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}

                </div>
            </Router>
        );
    }
}

export default App;
