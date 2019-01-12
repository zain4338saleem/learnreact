import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Comments from './CommentsComponent';
import CommentForm from './CommentFormComponent';
import { Link } from 'react-router-dom';
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
          <CommentForm />
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
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/menu'>Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {props.dish.name}
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <RenderComments comments={props.comments} />
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