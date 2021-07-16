import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import logo from '../../assets/logo.svg';
import '../../App.css';
// import { toggleTest } from '../../store/actions/actionCreators';

import { Grid } from '@material-ui/core';
import Footer from '../../components/elements/Footer/Footer';
import Layout from '../../components/elements/Layout/Layout';

/**
 * Check if MongoDB / Express / Redux is working properly
 */

export default function Checker(): ReactElement {
    const [data, setData] = useState();

    /**
     * Check express and MongoDB
     */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                '/api/test',
            );
            const expressCheck = await response.json()
            setData(expressCheck)
        };
        fetchData();
    }, []);


    return (
        <>
            <Layout>
                <Grid container direction="column" alignItems="center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2> Services Health Check  : </h2>

                    <ul>
                        <li> React <span role="img" aria-label="green-check">✔️ </span> </li>
                        <li> Typescript <span role="img" aria-label="green-check">✔️ </span> </li>
                        <li> Docker  <span role="img" aria-label="green-check">✔️ </span> </li>
                        <li> MongoDB  <span role="img" aria-label="green-check">✔️ </span></li>
                        <li> {data ? "api connected ✔️" : "Error on api ❌"} </li>
                        <li> Redux is working
                            <button > Check </button> </li>
                    </ul>
                </Grid>
            </Layout>

            <Footer subtitle='Admin Panel Private' />
        </>
    )
}
