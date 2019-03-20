import React, {useState} from 'react';
import ScreenLose from './ScreenLose';
import ScreenWin from './ScreenWin';
import Title from './Title';
import ActiveGame from './ActiveGame';

import { connect } from 'react-redux';
import './GameApp.css';

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
          props.gamestatus.status === 'active' ? <ActiveGame setIsGameMode={setIsGameMode} secondsLeft={180} />
          : props.gamestatus.status === 'loss' ? <ScreenLose setIsGameMode={setIsGameMode} />
          : <ScreenWin setIsGameMode={setIsGameMode} />
      }
    </div>
  );
}


export default connect(mapStateToProps)(GameApp);