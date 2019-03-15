import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip'

function FirstLevel(props){
    function onBoxClick(){
        setClickCounter(clickCounter + 1);
    }
    const [clickCounter, setClickCounter] = useState(0);
    const boxStates = [
        { classSet:"btn btn-outline-primary btn-to-click", msg:"Stop pointing at me"},
        { classSet:"btn btn-outline-warning btn-to-click", msg:"Quit poking me"},
        { classSet:"btn btn-outline-danger btn-to-click", msg:"You are going to regret this!"}
    ]

    if(clickCounter >= Object.keys(boxStates).length){
        props.onLevelPassed();
        return null;
    }
    return(
        <div>
            <button className={boxStates[clickCounter].classSet} onClick={onBoxClick}
            data-tip={boxStates[clickCounter].msg}
            >
            </button>
            <ReactTooltip />
        </div>
    )
}

export default FirstLevel;