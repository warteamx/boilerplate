import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css';


export default function Home(): ReactElement {


    return (
        <div className="App">
            <header className="App-header">
                <Link className="App-link" to="/"> Home </Link>
                <Link className="App-link" to="/checker"> Checker </Link>
            </header>
        </div>
    )
}