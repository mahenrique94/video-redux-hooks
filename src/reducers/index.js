import { combineReducers } from 'redux'

import { reducers as counterReducers } from './counter'

const reducers = combineReducers({
    counterReducers
})

export { reducers }