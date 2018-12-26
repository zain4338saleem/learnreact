import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';
import Comments from './CommentsComponent';

  function RenderDish({dish}){
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


  function RenderComments({comments}){
    if(comments != null){
      const commentsList = comments.map((comment) => {
        return(
          <div key={comment.id} className="row">
            <Media list>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </Media>
          </div>
        );
      });
      return(
        <div className="col-12 col-md-5 m-1">
          <Media heading>Comments</Media>
          {commentsList}
        </div>
      );
    }
    else{
      return(<div></div>);      
    }
  }

  const Dishdetail = (props) => {
    if(props.dish != null){
      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="container">
        </div>
      );
    }
  }

export default Dishdetail;