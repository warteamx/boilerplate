import React from 'react';
import Footer from '../../components/elements/Footer/Footer';
import Header from '../../components/elements/Header/Header'
import Album from '../../components/elements/Album/Album';
import Copyright from '../../components/elements/Copyright/Copyright';



export default function AdminPanel() {

    return (
        <>
            <Header />
            <Album />
            <Footer title="Netenders" subtitle="Admin Panel " />
            <Copyright />
        </>
    );
}