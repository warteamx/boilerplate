import React from 'react';
import Footer from '../../components/elements/Footer/Footer';
import Header from '../../components/elements/Header/Header'
import Home from '../../components/modules/Home/Home';

export default function HomeScreen() {

    return (
        <>
            <Header />
            <Home />
            <Footer title="MERN APP" subtitle="Boilerplate code for an example of a MERN App" />
        </>
    );
}
