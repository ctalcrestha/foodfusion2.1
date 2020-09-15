import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap'


// initialy -> null
const RenderDishDetail = ({ dish }) => {

    return (//object of a dish -> name , id, image, description
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const RenderComment = ({comments}) => {
    return (
        <>
            <h2>Comments</h2>
            {comments.map(comment => (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>{`-- ${comment.author}, ${comment.date}`}</li>
                </ul>
            ))}
        </>
    )
}


function DishDetail(props) {
    if (props.dish != null) {
        return (
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    <RenderDishDetail dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={props.dish.comments}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}


export default DishDetail