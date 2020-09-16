import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes'

class Main extends Component {


  constructor(props) {
      super(props)
  
      this.state = {
        dishes:DISHES,
        selectedDish:null
      }
  }
  
  onDishSelected(dishId){
    this.setState({
        selectedDish:dishId
    })
    

}
//es7 snippets
  render(){
      return (
          <div>
              <Navbar color="primary" dark expand='md'>
                  <div className='container'>
                      <NavbarBrand herf='/'>
                          Food Fusion
                      </NavbarBrand>
                  </div>

              </Navbar>
              <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
              {/*    name            value */}
              <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

          </div>
      );
  }

} 
export default Main;


