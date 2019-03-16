import React, { useState } from 'react';
import './GameApp.css';
import PreLevel from './levels/PreLevel';
import FirstLevel from './levels/FirstLevel';
import SecondLevel from './levels/SecondLevel';
import HealthCounter from './HealthCounter';

function GameApp(){
  const onLevelPassed = () => {
    setLevel(level+1);
  }

  const titles = [
    "Level: 0",
    "Level: 1",
    "Level: 2",
    "Congrats!"
  ]

  const dictLevel = {
    0: <PreLevel onLevelPassed={onLevelPassed} />,
    1: <FirstLevel onLevelPassed={onLevelPassed} />,
    2: <SecondLevel onLevelPassed={onLevelPassed} />
  }

  const [level, setLevel] = useState(2);

  return (
      <div className="container border border-secondary p-3 mt-5">
        <h1 className="text-center">{ titles[level] }</h1>
        <div>
            { level < Object.keys(dictLevel).length ? dictLevel[level] : <div>You win?</div> }
        </div>
        <HealthCounter />
      </div>
  );
}

export default GameApp;