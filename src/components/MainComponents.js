import React, { Component } from 'react'
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';

class Main extends Component {


  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
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

    const HomePage = () => {
    return(
      <HomeComponent/>
    )
    }
    return (
      <div>
        {/* <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
       
        <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer /> */}
        <Header />
        <Switch>
               <Route path="/home" component={HomePage}/>
      <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />} />
      <Redirect to='/home'/>
              </Switch>
              <Footer /> 
      </div>
    );
  }

}
export default Main;


