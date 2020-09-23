import React, { Component } from 'react'

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Redirect, Route, Switch } from 'react-router-dom';

//components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUSComponent';
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import About from './AboutUSComponents';


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
      return (
        <HomeComponent
          //featured dish
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}

          //promotion
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          //featured leader
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}


        />
      )
    }
    const DishDetail = ({ match }) => {
      return (
        
      //filter out the specific dish according to the id parameter and send the single dish

      <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
       comments={this.state.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId, 10))}
      />
      
      )

      
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />} />
          <Route exact path="/menu/:dishId" component={DishDetail} />
          <Route path="/aboutUs" component={() => <About leaders={this.state.leaders}/>}/>
          <Route  path="/contactus" component={() => <ContactUs />} />
          
          <Redirect to='/home' />

        </Switch>
        <Footer />
      </div>
    );
  }

}
export default Main;


