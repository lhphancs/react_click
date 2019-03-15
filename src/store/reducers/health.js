export default function health(state = 100000, event){
    switch(event.type){
        case 'INCREMENT_HEALTH':
            console.log("INCREASED HEALTH!");
            return state + 1;
        case 'DECREMENT_HEALTH':
            console.log("DECREASED HEALTH")
            return state - 1;
        case 'SET_HEALTH':
            return event.amtHealth;
        default:
            return state;
    }
}