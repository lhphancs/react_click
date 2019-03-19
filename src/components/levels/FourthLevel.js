import React, { useState, useEffect } from 'react';
import store from '../../store/store'

const USERNAME = "CoolBoxOverlord123";
const REAL_PASSWORD = "password";
const HINT_MSGS = ["The password is definitely not 'password'", "What are you doing? I just said it's not 'password'", "Fine, don't listen to me when I tell you it's not 'password'"];
const HINT_WRONG_MSG = "WRONGGG";

function FourthLevel(props){
    const [userInput, setUserInput] = useState("");
    const [hintMsg, setHintMsg] = useState(HINT_MSGS[0]);

    useEffect( () =>{
        if(userInput !== REAL_PASSWORD.substring(0, userInput.length)){
            setHintMsg(HINT_WRONG_MSG);
        }
        else if(userInput.length < REAL_PASSWORD.length/2){
            setHintMsg( HINT_MSGS[0] );
        }
        else if(userInput.length !== REAL_PASSWORD.length){
            setHintMsg( HINT_MSGS[1] );
        }
        else{
            setHintMsg( HINT_MSGS[2] );
        }
    });

    const handleOnKeyPressed = (event) =>{
        setUserInput(event.target.value)
    }


    function onUserSubmit(event){
        event.preventDefault(); //Prevent reloading

        if(REAL_PASSWORD === userInput){
            props.onLevelPassed();
        }

        else{
            store.dispatch({type: "DECREMENT_HEALTH"});
        }
    }

    return (
        <div>
            <div className="alert alert-secondary">
                {hintMsg}
            </div>
            <form onSubmit={onUserSubmit} className="border p-3">
                <div className="form-group">
                    <label>User Name</label>
                    <input className="form-control" placeholder={USERNAME} disabled />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className='form-control' placeholder={REAL_PASSWORD} onChange={handleOnKeyPressed} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default FourthLevel;