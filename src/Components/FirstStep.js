import React from 'react';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';
import { Button, TextField } from '@mui/material';

function FirstStep() {
    const {setStep,userData,setUserData} = useContext(multiStepContext);
    return (
        <div>
            <div>
                <TextField id="outlined-basic" value={userData['firstname']} onChange={(e) => setUserData({...userData,"firstname": e.target.value})} margin="normal" label="First Name" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['lastname']} onChange={(e) => setUserData({...userData,"lastname": e.target.value})}margin="normal" label="Last Name" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField id="outlined-basic" value={userData['contactnumber']} onChange={(e) => setUserData({...userData,"contactnumber": e.target.value})}margin="normal" label="Contact Number" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
            </div>
        </div>
    
  )
}

export default FirstStep;