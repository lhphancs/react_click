import React, { useState, useRef, useEffect } from 'react';
import getRndInteger from '../../../utils';

function SecondLevel(props){
    const [leftMargin, setLeftMargin] = useState(0);
    const inputRef = useRef(null);

    useEffect( () =>{
        let width = inputRef.current.clientWidth;
        let maxHorizontalPosition = width - 200;

        const timerId = setTimeout( () =>{
            setLeftMargin( getRndInteger(0, maxHorizontalPosition) );
        }, 200);
        return () => clearTimeout(timerId);
    });

    return (
        <div ref={inputRef} className="mt-3 p-3 bg-warning">
            <button className="btn btn-outline-primary btn-to-click my-2" onClick={props.onLevelPassed}
            style={{ position: 'relative', left: leftMargin }}>
            
            </button>
        </div>
    )
}
export default SecondLevel;