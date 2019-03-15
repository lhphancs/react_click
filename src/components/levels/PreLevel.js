import React from 'react';

function PreLevel(props){
    return (
        <div>
            <button className="btn btn-outline-primary btn-to-click m-2" onClick={props.onLevelPassed}>
            </button>
        </div>
    );
}
export default PreLevel;