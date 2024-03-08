import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function Ccreatepost() {


  return (
  <div className='py-24 flex flex-col bg-black  '>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
       
        <FormControl color="w"  sx={{ m: 1, width: '25ch' }} variant="outlined">
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>     
    </Box>
    </div>
  );
}