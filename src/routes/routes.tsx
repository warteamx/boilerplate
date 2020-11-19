import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; 
import Home from '../screens/Home/Home';
import Checker from '../screens/Checker/Checker';
import AxpelHome from '../axpel/screens/Home'
import AxpelExercise1 from '../axpel/screens/Exercise-1'


export default function Routes(): ReactElement {
    return (
<Router>
    <Switch>
        <Route path="/checker" component={Checker}/>
        <Route path="/axpel/exercise-1" component={AxpelExercise1}/>
        <Route path="/axpel" component={AxpelHome}/>

        <Route path="/" component={Home}/>
    </Switch>
</Router>
    )
}
