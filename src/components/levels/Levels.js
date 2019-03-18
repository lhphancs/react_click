import React, {useState} from 'react';

import PreLevel from './PreLevel';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';


export default function Levels(){

  const [currentLevel, setCurrentLevel] = useState(0);

  const onLevelPassed = () => {
      setCurrentLevel(currentLevel + 1);
  }

  const dictLevel = {
    0: { component: <PreLevel onLevelPassed={onLevelPassed} />, title: "0", lvMsg: "abc" },
    1: { component: <FirstLevel onLevelPassed={onLevelPassed} />, title: "1", lvMsg: "abc" },
    2: { component: <SecondLevel onLevelPassed={onLevelPassed} />, title: "2", lvMsg: "abc" },
    3: { component: <ThirdLevel onLevelPassed={onLevelPassed} />, title: "3", lvMsg: "abc" },
  }

  return(
    <div>
        <h1 className="text-center">Level: { dictLevel[currentLevel].title }</h1>
        { dictLevel[currentLevel].component }
    <div className="border p-2 m-2">{dictLevel[currentLevel].lvMsg}</div>
    </div>
  );
}