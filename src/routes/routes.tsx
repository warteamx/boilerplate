import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"; 
import Home from '../screens/Home';



export default function Routes(): ReactElement {
    return (
<Router>
    <Switch>
        <Route path="/" component={Home}/>
        
    </Switch>
</Router>
    )
}
