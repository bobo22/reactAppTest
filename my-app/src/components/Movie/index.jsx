import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import 'whatwg-fetch';
import './movie.css';

class Movie extends Component {

    state = {
        movies: []
    }

    componentWillMount() {
        // var that = this;
        // fetch('/api/movie/list/0').then(function(response) {
        //     return response.json();
        // }).then(function(json){
        //     console.log(json);
        //     that.setState({movies:json.data});
        // })
        fetch('/api/movie/list/0').then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
            this.setState({movies: json.data});
        })
    }

    handleClick = (id) =>{
        this.props.history.push('/movie/moviedetail/' + id);
    };

    showMore = () => {
        let lastid;
        lastid = this.state.movies[this.state.movies.length - 1].id;
        fetch('/api/movie/list/' + lastid).then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({movies: this.state.movies.concat(json.data)});
        })
    }

    render() {
        return (
            <div className="movie">
                {this.state.movies.map((items) => {
                    return (
                      <div key={items.id} className="item-text" onClick={this.handleClick.bind(this,items.id)}>
                        <p className="item-biaoqian">-影视-</p>
                        <p className="item-title">{items.title}</p>
                        <p className="item-author">文/测试</p>
                        <div className="item-pic">
                            <div className="item-pic-content"></div>
                        </div>
                        <p className="item-date">2017/04/28</p>
                      </div>
                    )

                })
              }
            <div className="showmore" onClick={this.showMore}>加载更多</div>
            </div>
        );
    }
}

export default withRouter(Movie);
