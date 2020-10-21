import React, { Component } from 'react'


import { Redirect, Route, Switch, withRouter} from 'react-router-dom';

//components
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUSComponent';
import Menu from './MenuComponents';
import DishDetailComponent from './DishDetailComponent';
import About from './AboutUSComponents';


//store
import {connect} from 'react-redux';
import {addComment,  fetchDishes} from '../redux/ActionCreators';
import { actions} from 'react-redux-form';
//mapStateToProps ->  takes the current state from the store and convert it intoa prop to be used by the respective component 


const mapStateToProps = state => {
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})
class Main extends Component {


  constructor(props) {
    super(props)

    this.state = {
     
      selectedDish: null
    }
  }

  onDishSelected(dishId) {
    this.setState({
      selectedDish: dishId
    })


  }
  componentDidMount(){
    this.props.fetchDishes()
  }
  //es7 snippets
  render() {
    console.log(this.props)

    const HomePage = () => {
      return (
        <HomeComponent
          //featured dish
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesFailed={this.props.dishes.errmess}
          //promotion
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          //featured leader
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}


        />
      )
    }
    const DishDetail = ({ match }) => {
      return (
        
      //filter out the specific dish according to the id parameter and send the single dish

      <DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
      isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess}
      comments={this.props.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId, 10))}
        addComment={this.props.addComment}
      />
      
      )

      
    }

    console.log("dishes",this.props.dishes)
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess}
           onClick={(dishId) => this.onDishSelected(dishId)} />} />
          <Route exact path="/menu/:dishId" component={DishDetail} />
          <Route path="/aboutUs" component={() => <About leaders={this.props.leaders}/>}/>
          <Route  path="/contactus" component={() => <ContactUs resetForm={this.props.resetFeedbackForm}/>} />
          
          <Redirect to='/home' />

        </Switch>
        <Footer />
      </div>
    );
  }

}
//store has been connected to our component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


