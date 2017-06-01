import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'whatwg-fetch';
import './musicdetail.css';

class Musicdetail extends Component {

    state = {
        musicdetail: []
    }

    componentWillMount() {
        let rowid = this.props.match.params.id;
        fetch('/api/music/detail/' + rowid).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.setState({musicdetail: json.data});
        })
    }

    render() {
        return (
            <div className="musicdetail">
                <div className="music-pic1">
                    <img src={this.state.musicdetail.cover}></img>
                </div>
                <div className="music-storytitle">{this.state.musicdetail.story_title}</div>
                <div className="music-story" dangerouslySetInnerHTML={{__html: this.state.musicdetail.story}}/>
            </div>
        );
    }
}

export default withRouter(Musicdetail);
