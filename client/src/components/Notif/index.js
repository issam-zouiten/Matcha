import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
    },
    large: {
        width: 75,
        height: 75,
        margin: 10
    },
}));

export default function Notif(props) {
    const classes = useStyles();
    const {notifList, deleteNotif} = props;
    return (
        <>
            <Grid container justify="center">
                <List className={classes.root}>

                    {notifList.length > 0 && notifList.length ? notifList.map((value, index) => (
                        <div key={index}>
                        <ListItem >
                            <ListItemText>{value.content}</ListItemText>
                            <Tooltip title="delete notif"><Button onClick={(e) => deleteNotif(value.by.id)}>
                                <DeleteForeverSharpIcon color="secondary" />
                            </Button>
                            </Tooltip>
                        </ListItem>
                            </div>
                    )) : <p>No notifications</p>}
                </List>
            </Grid>
        </>
    );
}