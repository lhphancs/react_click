import React from 'react';
import store from '../../../store/store'

function LastLevel(){
    function onWin(){
        store.dispatch( {type: "SET_GAME_STATUS_WIN"} );
    }
    return (
        <div onClick={onWin}>This is the last level</div>
    )
}

export default LastLevel;