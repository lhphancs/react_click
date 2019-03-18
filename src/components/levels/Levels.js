import React, {useState} from 'react';

import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import FourthLevel from './FourthLevel';


export default function Levels(){

  const [currentLevel, setCurrentLevel] = useState(1);

  const onLevelPassed = () => {
      setCurrentLevel(currentLevel + 1);
  }

  const dictLevel = {
    1: { component: <FirstLevel onLevelPassed={onLevelPassed} />, title: "1", lvMsg: "AAAA" },
    2: { component: <SecondLevel onLevelPassed={onLevelPassed} />, title: "2", lvMsg: "Can't get me!" },
    3: { component: <ThirdLevel onLevelPassed={onLevelPassed} />, title: "3", lvMsg: "abc" },
    4: { component: <FourthLevel onLevelPassed={onLevelPassed} />, title: "4", lvMsg: "abc" },
  }

  return(
    <div>
        <h1 className="text-center">Level: { dictLevel[currentLevel].title }</h1>
        { dictLevel[currentLevel].component }
    <div className="border p-2 m-2">{dictLevel[currentLevel].lvMsg}</div>
    </div>
  );
}