import React from 'react';
import { connect } from 'react-redux';
import ScreenLose from './ScreenLose';
import Levels from './levels/Levels'

import HealthCounter from './HealthCounter';
import './GameApp.css';

const mapStateToProps = (state) =>{
    return {
      level: state.level,
      gamestatus: state.gamestatus
    };
};

function GameApp(props){
  return (
      <div className="container border border-secondary p-3 mt-5">
        <div>
          {
            props.gamestatus.status === 'active' ? 
              <Levels />
            : props.gamestatus.status === 'loss' ? <ScreenLose />
            : <div>You win?</div>
          }
        </div>
        <HealthCounter />
      </div>
  );
}

export default connect(mapStateToProps)(GameApp);