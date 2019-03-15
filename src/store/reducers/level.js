export default function level(state = 0, event){
    switch(event.type){
        case 'INCREMENT_LEVEL':
            return state + 1;
        case 'DECREMENT_LEVEL':
            return state - 1;
        case 'SET_LEVEL':
            return event.level;
        default:
            return state;
    }
}