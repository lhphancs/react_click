import React, { useState, useEffect, useRef } from 'react';
import store from '../../../store/store'

import getRndInteger from '../../../utils';

function LastLevel(props){
    const [boxLife, setBoxLife] = useState(101);
    const [realLeftMargin, setRealLeftMargin] = useState(0);
    const [fakeLeftMargin, setFakeLeftMargin] = useState(0);
    const inputRef = useRef(null);

    function onWin(){
        store.dispatch( {type: "SET_GAME_STATUS_WIN"} );
    }

    function onRealBoxClick(){
        setBoxLife(boxLife - 10);
    }

    function onFakeBoxClick(){
        store.dispatch( {type: "DECREMENT_HEALTH"} )
    }

    useEffect( () =>{
        let width = inputRef.current.clientWidth;
        let maxHorizontalPosition = width - 200;
        
        if( boxLife <= 0 ){
            onWin();
        }
        else{
            const timerId = setTimeout( () =>{
                setRealLeftMargin( getRndInteger(0, maxHorizontalPosition) );
                setFakeLeftMargin( getRndInteger(0, maxHorizontalPosition) );
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

    return (
        <div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${boxLife}%` }}>
                
                </div>
            </div>
            <div ref={inputRef}>
                <div className="mt-3 bg-warning">
                    <button className="btn btn-outline-primary btn-to-click my-2" onClick={onRealBoxClick}
                        style={{ position: 'absolute', marginLeft: realLeftMargin }}>
                    </button>

                    <button className="btn btn-outline-danger btn-to-click my-2" onClick={onFakeBoxClick}
                        style={{ position: 'absolute', marginLeft: fakeLeftMargin }}>
                    </button>

                    <button className="btn-to-click my-2" style={{visibility: "hidden"}}>Placeholder</button>
                </div>
            </div>
        </div>
    )
}

export default LastLevel;