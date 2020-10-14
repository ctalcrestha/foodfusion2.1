import * as ActionTypes from './ActionTypes';


//note -> reducer will always accept two arguments -> 1. current state and 2. action
// reducer will take the current state -> receive the action type -> performs a certain task on a copy of the current state on the basis of the given action and then it will return a new state.

export const Dishes = (state = {
  isLoading:true,
  errmess:null,
  dishes:[]
}, action) => {
   switch (action.type) {
    
    case ActionTypes.ADD_DISHES:
      return {...state, isLoading:false, errmess:null, dishes:action.payload }
   
      case ActionTypes.DISHES_LOADING:
      return {...state, isLoading:true, errmess:null, dishes:[]}
   
      case ActionTypes.DISHES_FAILED:
        return {...state, isLoading:false, errmess:action.payload, dishes:[]}
     
      default:
      return state;
  }
}