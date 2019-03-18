import React from 'react';
import { connect } from 'react-redux';
import ScreenLose from './ScreenLose';
import Levels from './levels/Levels'
import Timer from './Timer';

import HealthCounter from './HealthCounter';
import './GameApp.css';

const mapStateToProps = (state) =>{
    return {
      gamestatus: state.gamestatus
    };
};

function GameApp(props){
  return (
      <div className="container border border-secondary p-3 mt-5">
        <div>
          {
            props.gamestatus.status === 'active' ? <ActiveGame secondsLeft={50} />
            : props.gamestatus.status === 'loss' ? <ScreenLose />
            : <div>You win?</div>
          }
        </div>
        <HealthCounter />
      </div>
  );
}

function ActiveGame(props){
  const TIMER_AMT = props.secondsLeft;

  return (
    <div>
      <Levels />
      <Timer secondsLeft={TIMER_AMT} />
    </div>
  )
}

export default connect(mapStateToProps)(GameApp);