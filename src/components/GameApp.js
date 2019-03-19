import React, {useState} from 'react';
import { connect } from 'react-redux';
import ScreenLose from './ScreenLose';
import ScreenWin from './ScreenLose';
import Levels from './levels/Levels'
import Timer from './Timer';
import store from '../store/store'
import consts from '../const/state';

import HealthCounter from './HealthCounter';
import './GameApp.css';

const MSG_STORY = "Something something box overlord...You are the last circle, etc... Go stop the box overlord from destroying the world... Yea, let's go with that."

const mapStateToProps = (state) =>{
    return {
      gamestatus: state.gamestatus
    };
};

function GameApp(props){
  const [isGameMode, setIsGameMode] = useState(false);

  return (
    <div className="container border border-secondary p-3 mt-5">
      {
        !isGameMode ? <Title setIsGameMode={ setIsGameMode }/>
        :
          props.gamestatus.status === 'active' ? <ActiveGame setIsGameMode={setIsGameMode} secondsLeft={10000} />
          : props.gamestatus.status === 'loss' ? <ScreenLose setIsGameMode={setIsGameMode} />
          : <ScreenWin setIsGameMode={setIsGameMode} />
      }
    </div>
  );
}

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

function Title(props){
  return(
    <div>
      <h1 className="text-center">
        Click
      </h1>

      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Story:..</h5>
          <p className="card-text">{MSG_STORY}</p>

          <button type="button" className="btn btn-primary btn-lg btn-block"
            onClick={ () => 
            {
              store.dispatch( {type: "SET_GAME_STATUS_ACTIVE", amt: consts.INITIAL_HEALTH} );
              store.dispatch( {type: "SET_HEALTH", amt: consts.INITIAL_HEALTH} );
              props.setIsGameMode(true);
            }
          }>Start Game</button>
          <button type="button" className="btn btn-primary btn-lg btn-block">Database</button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(GameApp);