import React, {useState} from 'react';

import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import FourthLevel from './FourthLevel';
import LastLevel from './LastLevel';


export default function Levels(){

  const [currentLevel, setCurrentLevel] = useState(5);

  const onLevelPassed = () => {
      setCurrentLevel(currentLevel + 1);
  }

  const dictLevel = {
    1: { component: <FirstLevel onLevelPassed={onLevelPassed} /> ,  title: "1", lvMsg: "Can't move me!" },
    2: { component: <SecondLevel onLevelPassed={onLevelPassed} /> , title: "2", lvMsg: "Can't catch me!" },
    3: { component: <ThirdLevel onLevelPassed={onLevelPassed} /> ,  title: "3", lvMsg: "Can't find me!" },
    4: { component: <FourthLevel onLevelPassed={onLevelPassed} />,  title: "4", lvMsg: "Can't crack this!" },
    5: { component: <LastLevel onLevelPassed={onLevelPassed} />,  title: "Last Level", lvMsg: "Can't beat this!" },
  }

  return(
    <div>
      <h1 className="text-center">Level: { dictLevel[currentLevel].title }</h1>
      { dictLevel[currentLevel].component }
    
      <div className="alert alert-info m-4">{dictLevel[currentLevel].lvMsg}</div>
    </div>
  );
}