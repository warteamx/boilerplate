import React, { ReactElement } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '70vh'
};

const center = {
  lat: 0.0,
  lng: 0.0
};

const position = {
    lat: 37.772,
    lng: -122.214
  }

  
  const onLoad = (marker: any) => {
    console.log('marker: ', marker)
  }

function MyComponent() : ReactElement {
  return (

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker  onLoad={onLoad}
        position={position} />
        </>
      </GoogleMap>
  )
}

export default React.memo(MyComponent)