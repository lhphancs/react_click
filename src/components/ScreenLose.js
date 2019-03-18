import React from 'react'
import store from '../store/store'

function ScreenLose(){
    const onPlayAgain = () => store.dispatch({type: "SET_GAME_STATUS_ACTIVE"});

    return (
        <div>
            <h1 className="text-center">You Lose</h1>
            <button onClick={onPlayAgain} className="btn btn-primary btn-lg btn-block">Play Again?</button>
        </div>
    )
}

export default ScreenLose;