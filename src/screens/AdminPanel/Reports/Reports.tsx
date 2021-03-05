import React from 'react';
import Footer from '../../../components/elements/Footer/Footer';
import Header from '../../../components/elements/Header/Header'

import Copyright from '../../../components/elements/Copyright/Copyright';

import Dashboard from '../../../modules/Reports/Dashborad';

export default function StoreFront() {

    return (
        <>
            <Dashboard />
            <Copyright />
        </>
    );
}
