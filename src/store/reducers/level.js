const initialLevelState = {
    num: 0
}

export default function level(state = initialLevelState, event){
    switch(event.type){
        case 'INCREMENT_LEVEL':
            return Object.assign({}, state, {
               num: state.num + 1
            })
        case 'DECREMENT_LEVEL':
            return Object.assign({}, state, {
               num: state.num - 1
            })
        case 'SET_LEVEL':
            return Object.assign({}, state, {
               num: event.numHealth 
            })
        default:
            return state;
    }
}