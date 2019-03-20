import React from 'react';
import Levels from './levels/Levels'
import Timer from './Timer';
import HealthCounter from './HealthCounter';

function ActiveGame(props){
  const TIMER_AMT = props.secondsLeft;

  return (
    <div>
      <div>
        <button className="btn btn-outline-danger" onClick={ () => props.setIsGameMode(false) }>Exit Game</button>
      </div>
      <Levels />
      <HealthCounter />
      <Timer secondsLeft={TIMER_AMT} />
    </div>
  )
}

export default ActiveGame;