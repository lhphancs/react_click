import React from 'react';

function ScreenLose(props){
    return (
        <div>
            <h1 className="text-center">You Lose</h1>
            <button onClick={ () => props.setIsGameMode(false)} className="btn btn-primary btn-lg btn-block">Return to Title Screen</button>
        </div>
    )
}

export default ScreenLose;