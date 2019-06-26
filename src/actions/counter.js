import { actionsTypes } from '../constants/counter'

const actions = {
    decrement: () => ({
        type: actionsTypes.COUNTER_DECREMENT
    }),
    increment: () => ({
        type: actionsTypes.COUNTER_INCREMENT
    })
}

export { actions }
