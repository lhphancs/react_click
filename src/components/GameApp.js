import React from 'react';
import { connect } from 'react-redux';
import ScreenLose from './ScreenLose';
import Levels from './levels/Levels'
import Timer from './Timer';

import HealthCounter from './HealthCounter';
import './GameApp.css';

const mapStateToProps = (state) =>{
    return {
      level: state.level,
      gamestatus: state.gamestatus
    };
};

function GameApp(props){
  const TIMER_AMT = 50;

  return (
      <div className="container border border-secondary p-3 mt-5">
        <div>
          {
            props.gamestatus.status === 'active' ? 
            <div>
                <Levels />
                <Timer secondsLeft={TIMER_AMT} />
              </div>
            : props.gamestatus.status === 'loss' ? <ScreenLose />
            : <div>You win?</div>
          }
        </div>
        <HealthCounter />
      </div>
  );
}

export default connect(mapStateToProps)(GameApp);