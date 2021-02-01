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
import AxpelExercise2 from '../axpel/screens/Exercise-2'
import Airbnb from '../modules/airbnb/screens/Airbnb';
import GnomesScreen from '../modules/altran/screens/GnomesScreen';
import GnomeCard from '../modules/altran/elements/GnomeCard/GnomeCard';


export default function Routes(): ReactElement {
    return (
        
<Router>
    <Switch>
        <Route path="/checker" component={Checker}/>
        <Route path="/axpel/exercise-1" component={AxpelExercise1}/>
        <Route path="/axpel/exercise-2" component={AxpelExercise2}/>
        <Route path="/axpel" component={AxpelHome}/>
        <Route path="/airbnb" component={Airbnb} />
        <Route path="/altran/user/:id" component={GnomeCard} />
        <Route path="/altran" component={GnomesScreen} />
        <Route path="/" component={Home}/>
    </Switch>
</Router>
    )
}
