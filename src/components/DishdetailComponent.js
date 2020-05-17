import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card >
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle><strong>{this.props.selectedDish.name}</strong></CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                 </CardBody>
                 </Card>
                </div> 
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(array) {
        if(array.length != 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {comment.date}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>);
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className = "row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
    }
}

export default DishDetail; 