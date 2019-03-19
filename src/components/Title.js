import React from 'react';
import store from '../store/store'
import consts from '../const/state';

const MSG_STORY = "Something something box overlord...You are the last circle, etc... Go stop the box overlord from destroying the world... Yea, let's go with that."

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
        </div>
      </div>
    </div>
  )
}

export default Title;