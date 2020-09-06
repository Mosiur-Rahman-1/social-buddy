import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Box, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 800,
      margin: 2
    },
    bullet: {
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Comment = (props) => {
    const classes = useStyles();
    const  {name, email, body} = props.comment;

    return (
        <Box display="flex" flexWrap="wrap"  justifyContent = "center">
            
            <Card className={classes.root} variant="outlined">
                <CardMedia>
                    <Avatar src="/broken-image.jpg" />
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" component="h2">
                     {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                    <strong>Email:</strong> {email}
                    </Typography>
                    <Typography variant="body2" component="p">
                     <strong>Comment:</strong> {body}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Comment;