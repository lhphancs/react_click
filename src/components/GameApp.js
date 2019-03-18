import React from 'react';
import { connect } from 'react-redux';
import './GameApp.css';
import ScreenLose from './ScreenLose';
import store from '../store/store';

import HealthCounter from './HealthCounter';

import PreLevel from './levels/PreLevel';
import FirstLevel from './levels/FirstLevel';
import SecondLevel from './levels/SecondLevel';
import ThirdLevel from './levels/ThirdLevel';
import Timer from './Timer';

const mapStateToProps = (state) =>{
    return { level: state.level };
};


function GameApp(props){
  const titles = [
    "Level: 0",
    "Level: 1",
    "Level: 2",
    "Level: 3",
    "End"
  ]

  const onLevelPassed = () => {
    store.dispatch({type: "INCREMENT_LEVEL"})
  }

  const dictLevel = {
    0: <PreLevel onLevelPassed={onLevelPassed} />,
    1: <FirstLevel onLevelPassed={onLevelPassed} />,
    2: <SecondLevel onLevelPassed={onLevelPassed} />,
    3: <ThirdLevel onLevelPassed={onLevelPassed} />,
  }

  return (
      <div className="container border border-secondary p-3 mt-5">
        <h1 className="text-center">{ titles[props.level.num] }</h1>
        <div>
        </div>
        <div>
          {
            props.level.num === -1 ? <ScreenLose />
            : props.level.num < Object.keys(dictLevel).length ? dictLevel[props.level.num]
            : <div>You win?</div>
          }
        </div>

        <Timer secondsLeft={1} />
        <HealthCounter />
      </div>
  );
}

export default connect(mapStateToProps)(GameApp);