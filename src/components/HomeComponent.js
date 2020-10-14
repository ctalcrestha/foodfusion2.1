import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Loading from './LoadingComponent'

const RenderCard = ({ item, isLoading, errMess }) => {
    if(isLoading){
        return(
            <h1>Loading ...</h1>
        )
    }
    else if(errMess){
        return(
            <h4>{errMess}</h4>
        )
    }
    else{
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                   {item. designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
    
                </CardBody>
            </Card>
        )
    }
    
}

function HomeComponent(props) {

    return (
        <div className="container">
            <div className="row">
                <div className='col-12 col-md '>
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess = {props.dishesFailed}/>
                </div>
                <div className='col-12 col-md '>
                    <RenderCard item={props.promotion} />
                </div>
                <div className='col-12 col-md '>
                    <RenderCard item={props.leader} />
                </div>
            </div>


        </div>
    )
}

export default HomeComponent
