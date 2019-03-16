const initialHealthState = {
    amt: 10000
}

export default function health(state = initialHealthState, event){
    switch(event.type){
        case 'INCREMENT_HEALTH':
            console.log("INCREASED HEALTH!");
            return Object.assign({}, state, {
                amt: state.amt + 1
            })
        case 'DECREMENT_HEALTH':
            console.log("DECREASED HEALTH")
            return Object.assign({}, state, {
                amt: state.amt - 1
            })
        case 'SET_HEALTH':
            console.log("SET HEALTH");
            return Object.assign({}, state, {
                amt: event.amtHealth 
            })
        default:
            return state;
    }
}