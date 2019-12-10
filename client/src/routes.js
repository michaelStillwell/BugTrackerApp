import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * TODO:
 *  - add route for profile page (?)
 */

// import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Project from './components/Project/Project';

/**
 * pass props as {...props} to send the whole props object
 * pass name={info} to send only the info as name to component
 */

// Dummy Data for user
const user = {
    id: 2,
    username: 'TestBoi'
}

export default (
    <Switch>
        {/* This is the landing page for new/not logged in users */}
        {/* <Route exact path='/' render={props => <Landing />}/> */}
        <Route exact path='/' render={props => <Home user={user} />}/>
        <Route path='/project/:projectId' render={props => <Project />} />
    </Switch>
);