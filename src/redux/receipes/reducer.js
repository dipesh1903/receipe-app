import ReceipeAction from './action';

const INITIAL_STATE = {
    receipes: [],
    isLoading: false,
    cached: false
}

export default function (state= INITIAL_STATE, action) {
    if (action.error) {
        return state;
    }
    switch(action.type) {
        case ReceipeAction.REQUEST_RECEIPE:
            return {...state, 
                    isLoading: true
                }
        case ReceipeAction.REQUEST_RECEIPE_FINISHED:
            return {...state,
                    receipes: action.payload,
                    isLoading: false,
                    cached: true       
                }
        default:
            return state
    }
}