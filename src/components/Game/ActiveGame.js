import React from 'react';
import Levels from './levels/Levels'
import Timer from './Timer';
import HealthCounter from './HealthCounter';

function ActiveGame(props){
  const TIMER_AMT = props.secondsLeft;

  return (
    <div>
      <Levels />
      <HealthCounter />
      <Timer secondsLeft={TIMER_AMT} />
    </div>
  )
}

export default ActiveGame;