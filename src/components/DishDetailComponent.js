import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardText, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap'


const RenderItem = ({ dish }) => {

  return (

    <Card key={dish.id}>
      <CardImg top src={`../${dish.image}`} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}
const RenderComment = ({ comments }) => {
  return (
    <div key={comments.id}>
      <h2>Comments</h2>
      {comments.map(comment => (
        <ul className="list-unstyled">
          <li>{comment.comment}</li>
          <li>{`-- ${comment.author}`}, {new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
        </ul>))}

    </div>


  )
}

// initialy -> null
const DishDetailComponent = (props) => {

  return (
    <div className="container">
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderItem dish={props.dish} />
        </div>
        <div className="co-12 col-md-5 m-1">

          <RenderComment comments={props.comments} />

        </div>

      </div>
    </div>

  )




}



export default DishDetailComponent