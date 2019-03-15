import React from 'react';
import ReactTooltip from 'react-tooltip'
import './SecondLevel.css';


function SecondLevel(props){
    const AMT_BOX_TO_DRAW = 20;
    const amtInitialBoxesDrawn = getRndInteger(0, AMT_BOX_TO_DRAW);

    function FakeButton(props){
        return(
            <button className="btn btn-outline-primary btn-to-click m-2" onClick={props.onHealthLoss}></button>
        )
    }

    return (
        <div>
            <div>
                { Array.from({length: amtInitialBoxesDrawn }).map( () => <FakeButton onHealthLoss={props.onHealthLoss} />) }

                <span>
                    <button className="btn btn-outline-primary btn-to-click m-2"
                    data-tip={"Acchoo"}
                    onClick={props.onLevelPassed}>
                    </button>
                </span>

                { Array.from({length: AMT_BOX_TO_DRAW - amtInitialBoxesDrawn - 1}).map( () =>
                    <FakeButton />
                )}
            </div>
            <ReactTooltip />
        </div>
    );
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SecondLevel;