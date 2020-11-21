import React, { ReactElement } from 'react'
import Footer from '../../components/elements/Footer/Footer'
import Header from '../../components/elements/Header/Header'
import Map from '../../axpel/components/Map'
import Searchbar from '../components/Searchbar'
import { LoadScript } from '@react-google-maps/api'

import { useSelector, shallowEqual } from "react-redux";

export default function Exercise2(): ReactElement {

    const reduxTest = useSelector((state: any) => state.maps, shallowEqual)

    console.log("Exercise2", reduxTest)

    return (
        <>
            <Header />
            <LoadScript googleMapsApiKey="AIzaSyBxwQlDE8omqzejYDuo_ZmycEh8QQjM5GY" libraries={["places"]}>
                <Searchbar />
                <Map />
            </LoadScript>

            <Footer title="Axpel Map" subtitle="Challenge 2: Google Map Suggestions" />

        </>
    )
}
