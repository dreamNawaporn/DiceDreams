import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


const Post = () => {
    return (
        <div className="section-container bg-gradient-to-r from-[#000000] from-0% to-[#000000] 
        to-100% flex justify-center items-center ">
            <div className='p-24  h-20 '>
                <Card sx={{ maxWidth: 345 }}>
                    <textarea className="textarea textarea-error fullWidth sx={{ m: 1 }}"
                        placeholder="Let's create a party for fun."></textarea>
                    <CardActions disableSpacing>
                        <button className="btn btn-outline btn-error">Post</button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Post


