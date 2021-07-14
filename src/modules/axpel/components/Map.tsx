import React, { ReactElement } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelector, shallowEqual,} from "react-redux";

const containerStyle = {
  width: '100%',
  height: '60vh'
};

const center = {
  lat: 0.0,
  lng: 0.0
};


function MyComponent() : ReactElement {

  const savedPositions = useSelector((state: any) => state.maps.savedPlaces, shallowEqual)
    

  return (

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        {savedPositions?.map( (savedPosition :any , index :any) => 
                  <Marker
                  key={index}
                  position={
                    {
                      lat: savedPosition.geometry.location.lat(),
                      lng: savedPosition.geometry.location.lng()
                    }
                  } />
        )}

      </GoogleMap>
  )
}

export default React.memo(MyComponent)