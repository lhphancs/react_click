import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GameApp from '../components/Game/GameApp';
import Contact from '../components/Contact';
import About from '../components/About';

const Main = function(){
    return(
        <Switch>
            <Route exact path='/' component={GameApp} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
        </Switch>
    )
}

export default Main;