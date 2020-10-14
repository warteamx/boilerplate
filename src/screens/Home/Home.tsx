import React, { ReactElement, useState, useEffect } from 'react'
import logo from '../../assets/logo.svg';
import '../../App.css';


export default function Home(): ReactElement {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                '/api/users/hello',
            );
            const user  = await response.json()
            setData(user.express)
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Boiler Plate:
                    </p>
                <p> React - TypeScript - Docker - Redux -  </p>
                <p>  {data}   </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}
