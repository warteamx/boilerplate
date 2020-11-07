import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; 
import Home from '../screens/Home/Home';
import Checker from '../screens/Checker/Checker';



export default function Routes(): ReactElement {
    return (
<Router>
    <Switch>
        <Route path="/checker" component={Checker}/>
        <Route path="/" component={Home}/>
    </Switch>
</Router>
    )
}
