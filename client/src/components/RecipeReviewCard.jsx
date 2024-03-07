import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const RecipeReviewCard = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="section-container bg-gradient-to-r from-[#000000] from-0% to-[#000000] 
    to-100% flex justify-center items-center">
      <div className='py-24 flex flex-col md:flex-row-reverse  items-center'>
        <div className='flex flex-col md:flex-row items-center ' >
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src="/P1.png" alt="" className='h-12 pr-1 mx-auto' />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Dream"
              subheader="29 february 2024"
            />
            <CardMedia
              component="img"
              height="194"
              image="/G1.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text-black">
              เกมเศรษฐี
              </Typography>
              <Typography variant="body2" color="text.secondary">
              วันศุกร์ที่ 1 มีนาคม พ.ศ. 2567   เวลา 15.00 น.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              หาเพื่อนเล่นบอร์ดเกม ชิวๆไม่ซีเรียส สัก4-5 คน
              </Typography>
              <Typography variant="body2" color="text.secondary">
              จำนวนคนจะไป : 1/5
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <button className=" btn btn-block btn-outline btn-red">Comment</button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RecipeReviewCard