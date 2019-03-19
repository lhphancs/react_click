import React, {useState} from 'react';
import store from '../../store/store'

function FourthLevel(props){
    const REAL_PASSWORD = "NOT PASSWORD";
    const [isCorrectPassSoFar, setIsCorrectPassSoFar] = useState(true);

    const handleOnKeyPressed = (event) =>{
        let currentUserInput = event.target.value;
        let isMatchingInputSoFar = currentUserInput === REAL_PASSWORD.substring(0, currentUserInput.length);
        setIsCorrectPassSoFar(isMatchingInputSoFar);
    }

    function onUserSubmit(event){
        console.log(event)
        props.onLevelPassed();
    }

    return (
        <form onSubmit={onUserSubmit} className="border p-3">
            <div className="form-group">
                <label>User Name</label>
                <input className="form-control" placeholder="CoolBoxOverlord123" disabled />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className={'form-control '+  (isCorrectPassSoFar ? 'is-valid' : 'is-invalid')} placeholder={REAL_PASSWORD} onChange={handleOnKeyPressed} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default FourthLevel;