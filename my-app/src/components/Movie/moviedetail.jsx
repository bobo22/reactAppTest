import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './movie.css';

class Moviedetail extends Component {

    state = {
        moviedetail: []
    }

    componentWillMount() {
        let rowid = this.props.match.params.id;
        fetch('/api/movie/detail/' + rowid).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.setState({moviedetail: json.data});
        })
    }

    render() {
        return (
            <div className="moviedetail">

            </div>
        );
    }
}

export default withRouter(Moviedetail);
