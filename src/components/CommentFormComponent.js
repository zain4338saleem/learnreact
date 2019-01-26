import React, { Component } from 'react';
import { Button, Row, Col, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => (val) && val.length >= len;

class CommentForm extends Component{

    constructor(props){
        super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		}
	    this.handleSubmit      = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
    }

	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

    handleSubmit(values){
    	this.toggleModal();
    	this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

        // console.log("Current State:" + JSON.stringify(values));
        // alert("Current State:" + JSON.stringify(values));
    }

	render(){
	    return(
	    	<div>
		        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
		         	<ModalHeader toggle={this.toggleModal}>
		         		Submit Comment
		         	</ModalHeader>
		         	<ModalBody>
		         		<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
	                        <Row className="form-group">
	                        	<Col md={12}>
		                            <Label htmlFor="rating">Rating</Label>
	                        	</Col>
	                            <Col>
	                                <Control.select model=".rating" name="rating"
	                                    className="form-control">
	                                    <option>1</option>
	                                    <option>2</option>
	                                    <option>3</option>
	                                    <option>4</option>
	                                    <option>5</option>
	                                </Control.select>
	                            </Col>
	                        </Row>
	                        <Row className="form-group">
	                            <Col md={12}>
		                            <Label htmlFor="author">Your Name</Label>
	                            </Col>
	                            <Col md={12}>
	                                <Control.text model=".author" id="author" name="author"
	                                    placeholder="Your Name"
	                                    className="form-control"
	                                    validators={{
	                                        required, minLength: minLength(3), maxLength: maxLength(15)
	                                    }}
	                                     />
	                                <Errors
	                                    className="text-danger"
	                                    model=".author"
	                                    show="touched"
	                                    messages={{
	                                        required: 'Required',
	                                        minLength: 'Must be greater than 2 characters',
	                                        maxLength: 'Must be 15 characters or less'
	                                    }}
	                                 />
	                            </Col>
	                        </Row>
	                        <Row className="form-group">
	                            <Col md={12}>
		                            <Label htmlFor="comment">Comment</Label>
	                            </Col>
	                            <Col md={12}>
	                                <Control.textarea model=".comment" id="comment" name="comment"
	                                    rows="6"
	                                    className="form-control" />
	                            </Col>
	                        </Row>
	                        <Row className="form-group">
	                            <Col md={12}>
	                                <Button type="submit" color="primary">
	                                Submit
	                                </Button>
	                            </Col>
	                        </Row>
	                    </LocalForm>
		         	</ModalBody>
		        </Modal>
	      		<Button outline onClick={this.toggleModal}>
	      			<span className='fa fa-pencil fa-lg'></span> Submit Comment
	      		</Button>
	    	</div>
	    );
	}
}

export default CommentForm;