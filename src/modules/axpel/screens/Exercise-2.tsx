import React, { ReactElement } from 'react'
import Footer from '../../../components/elements/Footer/Footer'
import Header from '../../../components/elements/Header/Header'
import Map from '../components/Map'
import Searchbar from '../components/Searchbar'
import { LoadScript } from '@react-google-maps/api'
import { Grid, Container } from '@material-ui/core'


export default function Exercise2(): ReactElement {

  // //
  /**
   * https://reactjs.org/docs/profiler.html
   * ========================================
   * PROFILER
   *  */ 
  // let onRenderCallback: any = (
  //   id: any, // the "id" prop of the Profiler tree that has just committed
  //   phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  //   actualDuration: any, // time spent rendering the committed update
  //   baseDuration: any, // estimated time to render the entire subtree without memoization
  //   startTime: any, // when React began rendering this update
  //   commitTime: any, // when React committed this update
  //   interactions: any // the Set of interactions belonging to this update
  // ) => {
  //   // Aggregate or log render timings...
  //   console.log('id -', id, ' The phase - ', phase, 'Time taken for the update', actualDuration, baseDuration, startTime, commitTime, interactions);
  // }

  return (
    <>
      {/* <Profiler id="exercise2" onRender={onRenderCallback} > */}
        <Header title="Axpel Search App" link="https://github.com/martinrebo/boilerplate/tree/main/src/axpel" linkText="README" />
        <LoadScript googleMapsApiKey="AIzaSyBxwQlDE8omqzejYDuo_ZmycEh8QQjM5GY" libraries={["places"]}>
          <Container maxWidth="md" >
            <Grid>
              <Searchbar />
            </Grid>
            <Grid>
              <Map />
            </Grid>
          </Container>

        </LoadScript>
        <Footer title="Axpel Map" subtitle="Challenge 2: Google Map Suggestions" />
      {/* </Profiler> */}
    </>
  )
}
