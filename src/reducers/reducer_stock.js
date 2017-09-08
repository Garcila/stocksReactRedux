import { FETCH_STOCK } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_STOCK:
            //we need to add each searched stock and for that we may
            //do state.push(action.payload.data), but this will 
            //mutate the state, and we only do this via setState, for this 
            //reason we use instead concat, since it does not mutate the
            //existing state, but instead it creates a new copy such as:
            // return state.concat([action.payload.data]);
            //the line before can be expressed in es6 as:(it adds the new stock to the front of array)
            return [action.payload.data, ...state];
    }
    return state;
}
