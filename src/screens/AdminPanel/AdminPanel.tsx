import React from 'react';
import Footer from '../../components/elements/Footer/Footer';
import Header from '../../components/elements/Header/Header'
import Album from '../../components/elements/Album/Album';
import Copyright from '../../components/elements/Copyright/Copyright';
import Layout from '../../components/elements/Layout/Layout';



export default function AdminPanel() {

    return (
        <>
            <Layout>
                <Album />
            </Layout>

        </>
    );
}