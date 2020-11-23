import React, { ReactElement, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Autocomplete} from '@react-google-maps/api';
import { useDispatch } from "react-redux";
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

    const [input, setInput] = React.useState();
    const handleChange = (event: any) => {
      setInput(event.target.value);
    };

    const [autoComplete, setAutocomplete] = useState<any>(null)

    const handleOnLoad = (autocomplete :any) => {
        setAutocomplete(autocomplete)
    }

    const handleOnPlaceChanged = () : any => {
        if (autoComplete !== null) {
            let newPlace = autoComplete.getPlace()
            dispatch(addMap(newPlace))
        } else {
            console.log('Autocomplete is not loaded yet!')
        }
    }
    
    return (
        <div className={classes.root} data-testid="test">
            <Autocomplete onLoad={handleOnLoad} 
            onPlaceChanged={handleOnPlaceChanged}
            >
                <div className={classes.root} data-testid="test2">
                <TextField
                placeholder="Search your places"
                value={input}
                onChange={handleChange}
                inputProps={{
                    "data-testid": "search-input",
                }}
                />
                </div>
            </Autocomplete>
        </div>
    )
}
