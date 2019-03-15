import React from 'react';
import ReactTooltip from 'react-tooltip'
import './SecondLevel.css';
import store from '../../store/store'

function SecondLevel(props){
    const AMT_BOX_TO_DRAW = 3;
    const amtInitialBoxesDrawn = getRndInteger(0, AMT_BOX_TO_DRAW-1);

    function FakeButton(){
        return(
            <button className="btn btn-outline-primary btn-to-click m-2" onClick={ () => store.dispatch({type: "DECREMENT_HEALTH"}) }></button>
        )
    }

    const boxToDrawArray = [];
    for(var i=0; i<amtInitialBoxesDrawn; ++i){
        boxToDrawArray.push(<FakeButton onHealthLoss={props.onHealthLoss} />);
    }
    boxToDrawArray.push(
        <button className="btn btn-outline-primary btn-to-click m-2"
        data-tip={"Acchoo"}
        onClick={props.onLevelPassed}>
        </button>
    )
    var amtRemainingToDraw = AMT_BOX_TO_DRAW - amtInitialBoxesDrawn - 1;
    for(var i=0; i<amtRemainingToDraw; ++i){
        boxToDrawArray.push(<FakeButton onHealthLoss={props.onHealthLoss} />);
    }
    return (
        <div>
            { boxToDrawArray.map( (btn) => btn) }
            <ReactTooltip />
        </div>
    );
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default SecondLevel;