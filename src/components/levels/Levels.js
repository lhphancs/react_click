import React, {useState} from 'react';

import PreLevel from './PreLevel';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';


export default function Levels(){

  const [currentLevel, setCurrentLevel] = useState(0);

  const titles = [
    "Level: 0",
    "Level: 1",
    "Level: 2",
    "Level: 3",
  ]

  const onLevelPassed = () => {
      setCurrentLevel(currentLevel + 1);
  }

  const dictLevel = {
    0: <PreLevel onLevelPassed={onLevelPassed} />,
    1: <FirstLevel onLevelPassed={onLevelPassed} />,
    2: <SecondLevel onLevelPassed={onLevelPassed} />,
    3: <ThirdLevel onLevelPassed={onLevelPassed} />,
  }

  return(
    <div>
        <h1 className="text-center">{ titles[currentLevel] }</h1>
        { dictLevel[currentLevel] }
    </div>
  )
}