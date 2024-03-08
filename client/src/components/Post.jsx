import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';


export default function Post() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <div className='py-24 flex flex-col bg-black  '>
      <FormControl sx={{
        bgcolor: "black"

      }}>
        <FormLabel sx={{
          color: "white",
          bgcolor: "black"
        }}>Let's create a party for fun</FormLabel>

        <Link to="/Createpost">
          <Textarea
            placeholder="Type something here…"
            minRows={3}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  gap: 'var(--Textarea-paddingBlock)',
                  pt: 'var(--Textarea-paddingBlock)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  flex: 'auto',

                }}
              >

                <Button sx={{
                  ml: 'auto'
                }} >post</Button>
              </Box>
            }
            sx={{
              minWidth: 300,
              fontWeight,
              fontStyle: italic ? 'italic' : 'initial',
              //bgcolor: "black",
              //color:"white"


            }}
          />
        </Link>
      </FormControl>
    </div>
  );
}




