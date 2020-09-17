import React, { Component } from 'react'
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
             <Header/>
              <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
              {/*    name            value */}
              <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
<Footer/>
          </div>
      );
  }

} 
export default Main;


