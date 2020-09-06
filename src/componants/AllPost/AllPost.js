import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow: '0 3px 5px 2px rgba(78,104,255, .3)',
      margin: 8,
      padding: 8
    },
    media: {
      height: 200
    },
    
});

const AllPost = (props) => {
//destructuring the post details
const {title, body, id} = props.posts;
const classes = useStyles();  
return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color = "#fff">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to= {`/post/${id}`}><Button size="small" variant="outlined" color="primary">Learn More</Button></Link>
            </CardActions>
        </Card>
    );
};

export default AllPost;