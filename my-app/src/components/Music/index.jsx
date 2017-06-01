import React, { Component } from 'react';
import './music.css';


class Picture extends Component {

  state = {
      misics: []
  }

  componentWillMount() {
      // var that = this;
      // fetch('/api/movie/list/0').then(function(response) {
      //     return response.json();
      // }).then(function(json){
      //     console.log(json);
      //     that.setState({movies:json.data});
      // })
      fetch('/api/music/bymonth/2016-10').then((response) => {
          return response.json();
      }).then((json) => {
          console.log(json);
          this.setState({misics: json.data});
      })
  }


    handleClick = (id) =>{
        this.props.history.push('/music/musicdetail/' + id);
    };

  render() {
      return (
          <div className="music">
              {this.state.misics.map((items) => {
                  return (
                    <div key={items.id} className="item-text" onClick={this.handleClick.bind(this,items.id)}>
                      <p className="item-biaoqian">-音乐-</p>
                      <p className="item-title">{items.title}</p>
                      <p className="item-name">文/波波</p>
                      <div className="item-pic">
                          <img src={items.cover}></img>
                      </div>
                      <span className="item-username">{items.author.user_name}</span>
                      <span className="item-author">{items.author.desc}</span>
                      <p className="item-content">如果青春逝去了呢？愿能“以后若心有不甘逗留，难说有天我说走就走”。</p>
                    </div>
                  )

              })
            }
          </div>
      );
  }
}

export default Picture;
