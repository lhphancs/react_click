import React, {useState, useEffect} from 'react'

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
    })

    return(
        <div>
            Time Remaining: {secondsLeft}
        </div>
    )
}

export default Timer;