import React, { ReactElement, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@react-google-maps/api';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addMap } from '../../../store/actions/actionCreators'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50%',
        },
    },
}));


export default function Searchbar(): ReactElement {
    const classes = useStyles();
    const dispatch: Dispatch<any> = useDispatch();

    const [input, setInput] = React.useState({ value: "", error: false });

    const handleChange = (event: any) => {
        setInput({ value: event.target.value, error: false });
    };

    const [autoComplete, setAutocomplete] = useState<any>(null)

    const handleOnLoad = (autocomplete: any) => {
        setAutocomplete(autocomplete)
    }

    const handleOnPlaceChanged = (): any => {
        // If autocomplete has a result the with geometries
        if (autoComplete !== null) {
            let newPlace = autoComplete.getPlace()

            // We check that the place comes from the autocomplete and not from the user input
            // User input only have .name property - Autocomplete has many (geometry among others)
            if (newPlace.geometry) {
                dispatch(addMap(newPlace))
            } else {
                // If user choose a place with no match with autocomplete we clean the form and show a helper message to choose another place.  
                setInput({ value: "", error: true })
            }

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
                        error={input.error}
                        helperText={input.error ? "Choose a place from the list" : ""}
                        placeholder="Search your places"
                        value={input.value}
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
