import { actionsTypes } from '../constants/counter'

const INITIAL_STATE = {
    counter: 0
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.COUNTER_DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case actionsTypes.COUNTER_INCREMENT:
            return { ...state, counter: state.counter + 1 }
        default:
            return state
    }
}

export { reducers }
