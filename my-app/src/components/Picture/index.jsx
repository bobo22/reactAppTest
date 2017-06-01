import React, { Component } from 'react';
import './picture.css';

class Picture extends Component {

  state = {
      pictures: []
  }

  componentWillMount() {
      // var that = this;
      // fetch('/api/movie/list/0').then(function(response) {
      //     return response.json();
      // }).then(function(json){
      //     console.log(json);
      //     that.setState({movies:json.data});
      // })
      fetch('/api/hp/bymonth/2016-10').then((response) => {
          return response.json();
      }).then((json) => {
          console.log(json);
          this.setState({pictures: json.data});
      })
  }

  handleClick = (id) =>{
      this.props.history.push('/picture/picturedetail/' + id);
  };

  render() {
      return (
          <div className="movie">
              {this.state.pictures.map((items) => {
                  return (
                    <div key={items.hpcontent_id} className="item-text" onClick={this.handleClick.bind(this,items.hpcontent_id)}>
                      <p className="item-date">{items.hp_makettime}</p>
                      <p className="item-title">{items.hp_title}</p>
                      <div className="item-pic">
                          <img src={items.hp_img_url}></img>
                      </div>
                      <p className="item-content">{items.hp_content}</p>
                      <p className="item-author">{items.hp_author}</p>
                    </div>
                  )

              })
            }
          </div>
      );
  }
}

export default Picture;
