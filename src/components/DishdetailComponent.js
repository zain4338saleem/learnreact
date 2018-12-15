import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Comments from './CommentsComponent';

class Dishdetail extends Component{
  constructor(props){
    super(props);
  }

  renderDish(dish){
    if(dish != null){
        return (
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
    }
    else{
      return (<div></div>);
    }
  }

  renderComments(comments){
    return(
      <Comments comments={this.props.dish.comments} />
    );

  }

  render(){
    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        {this.renderComments(this.props.dish.comments)}
      </div>
    );
  }
}

export default Dishdetail;