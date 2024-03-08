import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function Ccreatepost() {


  return (
    <div className="section-container bg-gradient-to-r from-[#000000] from-0% to-[#000000] 
    to-100% flex justify-center items-center" >
      <div className='flex flex-col md:flex-row items-center '>
        <div className='py-24 flex flex-col  '>
          <Card sx={{ maxWidth: 600 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <div>
                <h1>Create a board game post</h1>
                <FormControl color="w" sx={{ m: 1, width: '25ch' }} variant="outlined">
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Board game name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">Board game name</InputAdornment>}
                    label="Amount"
                  />
                </FormControl>
                <FormControl color="w" sx={{ m: 1, width: '25ch' }} variant="outlined">
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Post details</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">Post details </InputAdornment>}
                    label="Amount"
                  />
                </FormControl>

                <TextField
                  id="outlined-controlled"
                  label="Select an appointment date"
                  defaultValue="MM/DD/YYYY"
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Select an appointment time"
                  defaultValue="hh:mm aa"
                />
                <TextField
                  id="outlined-uncontrolled"
                  label="Select Number of Player"
                  defaultValue="Select Number of Player"
                />

                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              
                  <button className=" btn btn-block btn-outline btn-red">Create Post</button>
               
              </div>
            </Box>
          </Card>
        </div>
      </div>
    </div>

  );
}