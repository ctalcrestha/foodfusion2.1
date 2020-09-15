import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDish : null
        }
        console.log("initial state loaded");
    }



    onDishSelected(dish){
        this.setState({
            selectedDish:dish
        })
        console.log("initial state updated");

    }

    //render method
    // return
    // this.state.dishes
    render() {


        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        {/* call the onDishSelected bhanne function and pass the dish as a parameter / arguments */}
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            )
        })



        return (
            <div className="container">
                <div className='row'>
                    {menu}
                </div>

                <DishDetail dish={this.state.selectedDish} />

            </div>
        )
    }
}

export default Menu;