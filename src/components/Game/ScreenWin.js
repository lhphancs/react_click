import React from 'react'

function ScreenWin(props){
    return(
        <div>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Congratulations!</h4>
                <p>The box overlord has been destroyed.</p>
                <hr />
                <p class="mb-0">The world is safe...For now...</p>
            </div>

            <button onClick={ () => props.setIsGameMode(false)} className="btn btn-primary btn-lg btn-block">Return to Title Screen</button>
        </div>
    )
}

export default ScreenWin;