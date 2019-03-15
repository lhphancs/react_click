import React, { useState } from 'react';
import './GameApp.css';
import PreLevel from './levels/PreLevel';
import FirstLevel from './levels/FirstLevel';
import SecondLevel from './levels/SecondLevel';
import { store } from '../store/configureStore';

function GameApp(){
  const onLevelPassed = () => {
    setLevel(level+1);
  }
  const onHealthLoss = () =>{
    setHealth(health-1);
  }

  const titles = [
    "Level: 0",
    "Level: 1",
    "Level: 2",
    "Congrats!"
  ]

  const dictLevel = {
    0: <PreLevel onLevelPassed={onLevelPassed} onHealthLoss={onHealthLoss}/>,
    1: <FirstLevel onLevelPassed={onLevelPassed} onHealthLoss={onHealthLoss}/>,
    2: <SecondLevel onLevelPassed={onLevelPassed} onHealthLoss={onHealthLoss}/>
  }

  const [health, setHealth] = useState(100000);
  const [level, setLevel] = useState(1);

  return (
      <div className="container border border-secondary p-3 mt-5">
        <h1 className="text-center">{ titles[level] }</h1>
        <div>
            { level < Object.keys(dictLevel).length ? dictLevel[level] : <div>You win?</div> }
        </div>
        <div>
            <p className="border border-secondary p-3 mt-5">Health: {health}</p>
        </div>
      </div>
  );
}

export default GameApp;
