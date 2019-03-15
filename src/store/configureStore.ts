import { createStore } from 'redux';

let defaultState = {
    level: 0,
    health: 100000
};

function amount(state = defaultState, action: any){
    switch(action.type){
        case 'CHANGE_ORIGIN_AMOUNT':
            return {
                ...state,
                level: action.level,
                health: action.health
            }
        default:
            return state;
    }
}

let store = createStore(amount);
store.subscribe(function(){
    console.log(store.getState());
})

store.dispatch({type: "CHANGE_ORIGIN_AMOUNT", level:1, health: 2})

export default store;