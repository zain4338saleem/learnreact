import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class Comments extends Component{
  constructor(props){
    super(props);
  }

  renderComment(comment){
    if(comment != null){
        return (
        <div></div>   
        );
    }
    else{
      return (<div></div>);
    }
  }

  render(){
    const comments = this.props.comments.map((comment) => {
      return(
        <div key={comment.id} className="row">
          <Media list>
            <Media tag="li">
              <Media paragraph>{comment.comment} --{comment.author}, {comment.date}</Media>
            </Media>
          </Media>
        </div>
      );
    });

    return(
      <div className="col-12 col-md-5 m-1">
        <Media heading>Comments</Media>
        {comments}
      </div>
    );
  }
}

export default Comments;