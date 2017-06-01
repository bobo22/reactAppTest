import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'whatwg-fetch';
import './detail.css';

class Picturedetail extends Component {

    state = {
        picturedetail: []
    }

    componentWillMount() {
        let rowid = this.props.match.params.id;
        fetch('/api/hp/detail/' + rowid).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.setState({picturedetail: json.data});
        })
    }

    render() {
        return (
            <div className="picturedetail">
                <div className="item-pic1">
                    <img src={this.state.picturedetail.hp_img_url}></img>
                </div>
                <span className="item-title1">{this.state.picturedetail.hp_title}</span>
                <span className="item-author1">{this.state.picturedetail.hp_author}</span>
                <p className="item-date1">{this.state.picturedetail.hp_makettime}</p>
                <p className="item-content1">{this.state.picturedetail.hp_content}</p>
            </div>
        );
    }
}

export default withRouter(Picturedetail);
