import React from 'react';
import { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

const ThirdStep = () => {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField id="outlined-basic" value={userData['city']} onChange={(e) => setUserData({...userData,"city": e.target.value})}margin="normal" label="City" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['landmark']} onChange={(e) => setUserData({...userData,"landmark": e.target.value})} margin="normal" label="Landmark" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['postalcode']} onChange={(e) => setUserData({...userData,"postalcode": e.target.value})} margin="normal" label="Postal Code" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => { setStep(2) }} color="secondary">Prev</Button><span>      </span>
                <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>
    )
}

export default ThirdStep