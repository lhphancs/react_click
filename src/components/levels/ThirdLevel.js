import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip'
import store from '../../store/store'

function ThirdLevel(props){
    const REAL_PASSWORD = "NOT PASSWORD";
    const [pass, setPass] = useState("");
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const handleOnKeyPressed = (event) =>{
        if( event.key === REAL_PASSWORD.charAt(currentLetterIndex) )
        {
            setCurrentLetterIndex(currentLetterIndex+1);
            if(currentLetterIndex >= REAL_PASSWORD.length){
                props.onLevelPassed();
            }
        }
        else{
            console.log("WRONG")
        }
    }
    return (
        <form>
            <div className="form-group">
                <label>User Name</label>
                <input className="form-control" placeholder="L33tBoxOverlord123" disabled />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="Not Password" onKeyPress={handleOnKeyPressed} />
            </div>
        </form>
    );
}

export default ThirdLevel;