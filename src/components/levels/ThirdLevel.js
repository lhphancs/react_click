import React from 'react';
import ReactTooltip from 'react-tooltip'
import './ThirdLevel.css';
import store from '../../store/store'
import getRndInteger from '../../utils';

function ThirdLevel(props){
    const AMT_BOX_TO_DRAW = 3;
    const amtInitialBoxesDrawn = getRndInteger(0, AMT_BOX_TO_DRAW-1);

    const boxToDrawArray = [];

    addFakeButtonsToArray(boxToDrawArray, "F-A", props.onHealthLoss, amtInitialBoxesDrawn);
    boxToDrawArray.push(
        <button className="btn btn-outline-primary btn-to-click m-2"
        key="RealBtn" data-tip={"Acchoo"}
        onClick={props.onLevelPassed}>
        </button>
    )
    addFakeButtonsToArray(boxToDrawArray, "F-B", props.onHealthLoss, AMT_BOX_TO_DRAW - amtInitialBoxesDrawn - 1);

    return (
        <div>
            { boxToDrawArray.map( (btn) => btn) }
            <ReactTooltip />
        </div>
    );
}

function addFakeButtonsToArray(array, preKeyVal, onClickResponse, amtToAdd){
    function FakeButton(){
        return(
            <button className="btn btn-outline-primary btn-to-click m-2"
            onClick={ () => store.dispatch({type: "DECREMENT_HEALTH"}) }></button>
        )
    }

    for(var i=0; i<amtToAdd; ++i){
        array.push(<FakeButton key={preKeyVal+i} onHealthLoss={onClickResponse} />);
    }
}

export default ThirdLevel;