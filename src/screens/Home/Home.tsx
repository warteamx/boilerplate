import React from 'react';
import Footer from '../../components/elements/Footer/Footer';
import Header from '../../components/elements/Header/Header'
import Album from '../../components/elements/Album/Album';
import Hero from '../../components/elements/Hero/Hero'
import Copyright from '../../components/elements/Copyright/Copyright';
import { Login } from '../../components/features/Messages/Login/Login';
export default function HomeScreen() {

    return (
        <>
            <Header />
            <Hero />
            <Login />
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}
