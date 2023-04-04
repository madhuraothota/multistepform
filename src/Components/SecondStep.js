import React from 'react';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';
import { Button, TextField } from '@mui/material';

const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField id="outlined-basic" value={userData['email']} onChange={(e) => setUserData({...userData,"email": e.target.value})} margin="normal" label="Email" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['country']} onChange={(e) => setUserData({...userData,"country": e.target.value})} margin="normal" label="Country" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['district']} onChange={(e) => setUserData({...userData,"district": e.target.value})} margin="normal" label="District" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => { setStep(1) }} color="secondary">Prev</Button><span>     </span>
                <Button variant="contained" onClick={() => { setStep(3) }} color="primary">Next</Button>
            </div>
        </div>
    )
}

export default SecondStep