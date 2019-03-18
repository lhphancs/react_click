const initialHealthState = {
    amt: 1
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
                amt: event.amtHealth 
            })
        default:
            return state;
    }
}