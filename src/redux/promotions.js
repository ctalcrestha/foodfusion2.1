import { PROMOTIONS } from '../shared/promotions';

//note -> reducer will always accept two arguments -> 1. current state and 2. action
// reducer will take the current state -> receive the action type -> performs a certain task on a copy of the current state on the basis of the given action and then it will return a new state.

export const Promotions = (state = PROMOTIONS, action) => {
  switch (action.type) {


    default:
      return state;
  }
}