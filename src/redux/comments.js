import { connect } from 'react-redux';
import{ COMMENTS } from '../shared/comments';
import * as ActionType from './ActionTypes';

export const Comments =(state = COMMENTS, action)  => {
    switch(action.type){
    
    case ActionType.ADD_COMMENT:
        var comment = action.payload
        //20 -> 0 -> 19
        //comment id
        comment.id = state.length;
        //comment date
        comment.date = new Date().toISOString();
        console.log("Comment", comment);
        return state.concat(comment);
        
        default:
            return state;
    }
}
 