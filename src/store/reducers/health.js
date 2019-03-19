import consts from '../../const/state';

const initialHealthState = {
    amt: consts.INITIAL_HEALTH
}

export default function health(state = initialHealthState, event){
    switch(event.type){
        case 'INCREMENT_HEALTH':
            return Object.assign({}, state, {
                amt: state.amt + 1
            })
        case 'DECREMENT_HEALTH':
            return Object.assign({}, state, {
                amt: state.amt - 1
            })
        case 'SET_HEALTH':
            return Object.assign({}, state, {
                amt: event.amt
            })
        default:
            return state;
    }
}