import React, {useState, useEffect} from 'react'
import store from '../../store/store'

function Timer(props){
    const [secondsLeft, setSecondsLeft] = useState(props.secondsLeft);

    // Runs this function everytime it gets rendered
    useEffect( () =>{
        if(secondsLeft > 0){
            const timerId = setTimeout( () =>{
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
        else{
            store.dispatch( {type: "SET_GAME_STATUS_LOSS"} );
        }
    })

    return(
        <div>
            Time Remaining: {secondsLeft}
        </div>
    )
}

export default Timer;