import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Loading from './LoadingComponent';


const RenderMenuItem = ({dish, onClick}) => {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
            {/* /menu/ */}
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link> 
        </Card>
    )
}


const Menu = (props) => {

    //render method
    // return
    // this.state.dishes
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                   <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>

        )
    })
if(props.isLoading){
    return(
        <div className="container">
            <div className='row'>
              <Loading/>
            </div>

        </div>
    )
}
else if(props.errMess){
    return(
        <div className="container">
            <div className='row'>
    <h4>{props.errMess}</h4>
            </div>

        </div>
    )
}
else{
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
                 <h3>Menu</h3>  
                 <hr/>
               </div>
         </div>

            <div className='row'>
                {menu}
            </div>


        </div>
    )
    
}


   




   
}


export default Menu;