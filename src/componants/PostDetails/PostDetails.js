import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
      boxShadow: '0 3px 5px 2px rgba(78,104,255, .3)',
      margin: 8,
      padding: 8
    },
    
});
// single post details 
const PostDetails = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [postDetials, setPostDetails] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(postDetails => setPostDetails(postDetails))
        .catch(error => console.log(error))

    },[])
//comment for that post 
const [comment, setComment] = useState([]);
console.log(comment);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(comment => setComment(comment))
        .catch(error => console.log(error))

    },[])
    
    //destructuring the post details data
    const {title, body} = postDetials;
    return (
    <>
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent = "center">
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="h1">
                        {title}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                        {body}
                    </Typography>   
                </CardContent>
                <h3>Post comments:</h3>
            </CardActionArea>
        </Card>   
    </Box>
    {/* Mapping the comment so can show it separately */}
    {

        comment.map(comment => <Comment comment = {comment}></Comment>)
    }
    </>
    );
};

export default PostDetails;