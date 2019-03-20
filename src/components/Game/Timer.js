import React, {useState, useEffect} from 'react'
import store from '../../store/store'
import './Timer.css'

const HIGH_TIME = 120;
const MEDIUM_TIME = 60;

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
        <p id="timer" className={ secondsLeft >= HIGH_TIME ? "text-dark"
            : secondsLeft >= MEDIUM_TIME ? "text-warning"
            : "text-danger" 
        }>
            Time Remaining: {secondsLeft}
        </p>
    )
}

export default Timer;