import React, { Component } from 'react'
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';


import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUSComponent';


class Main extends Component {


  constructor(props) {
    super(props)

    this.state = {  
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null
    }
  }

  onDishSelected(dishId) {
    this.setState({
      selectedDish: dishId
    })


  }
  //es7 snippets
  render() {
    console.log(this.state.dishes)

    const HomePage = () => {
    return(
      <HomeComponent
      //featured dish
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
 
        //promotion
         promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
      //featured leader
        leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
      
      
     />
    )
    }
    return (
      <div>
          <Header />
        <Switch>
               <Route path="/home" component={HomePage}/>
      <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />} />
      <Route path="/contactus" component={() => <ContactUs/>}/>
    <Redirect to='/home'/>

              </Switch>
              <Footer /> 
      </div>
    );
  }

}
export default Main;


