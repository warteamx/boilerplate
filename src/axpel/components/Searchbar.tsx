import React, { ReactElement, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Autocomplete} from '@react-google-maps/api';

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addMap } from '../../store/actions/actionCreators'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(5),
            width: '50%',
        },
    },
}));


export default function Searchbar(): ReactElement {
    const classes = useStyles();
    const dispatch: Dispatch<any> = useDispatch();
    

    const [autoComplete, setAutocomplete] = useState<any>(null)

    const handleOnLoad = (autocomplete :any) => {
        console.log('autocomplete', autocomplete)
        setAutocomplete(autocomplete)
    }

    const handleOnPlaceChanged = () : any => {
        if (autoComplete !== null) {

            let newPlace = autoComplete.getPlace()
            dispatch(addMap(newPlace))
            console.log("place dispatched", newPlace)
        } else {
            console.log('Autocomplete is not loaded yet!')
        }
    }
    const reduxTest = useSelector((state: any) => state.maps, shallowEqual)

    console.log(reduxTest)

    return (
        <div className={classes.root}>

            <Autocomplete onLoad={handleOnLoad} 
            onPlaceChanged={handleOnPlaceChanged}
            >
                <div className={classes.root}>
                <TextField placeholder="Search your places"/>
                </div>
            </Autocomplete>

        </div>
    )
}
