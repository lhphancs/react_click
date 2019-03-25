const initialGameStatusState = {
    status: 'active'
}

export default function gameStatus(state = initialGameStatusState, action){
    switch(action.type){
        case 'SET_GAME_STATUS_ACTIVE':
            return Object.assign({}, state, {
                status: 'active'
            })
        case 'SET_GAME_STATUS_LOSS':
            return Object.assign({}, state, {
                status: 'loss'
            })
        case 'SET_GAME_STATUS_WIN':
            return Object.assign({}, state, {
                status: 'win'
            })
        default:
            return state;
    }
}