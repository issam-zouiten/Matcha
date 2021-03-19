import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 100 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(65deg, #FE6B8B 60%, #FF8E53 90%)',
  },
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
  // root: {
  //   padding: '10px',
  //   boxShadow: 3,
  // },
  card: {
    minWidth: 300,
    maxWidth: 350,
    minHeight: 750,
    maxHeight: 850,
    borderRadius: '10px',
    marginLeft: '10px',
    background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 30%)',
  },
  cardMedia: {
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: '300px',
  },
  cardHeader: {
    maxWidth: 400,
    maxHeight: 200,
  },

  cardContent: {
    maxWidth: 400,
    maxHeight: 200,
  },
  cardAction: {
    maxWidth: 400,
    maxHeight: 50,
  },
  avatarON: {
    backgroundColor: '#00FB0C',
    width: 5,
    height: 5,
    margin: 5
  },
  avatarOF: {
    backgroundColor: '#e42416',
    width: 5,
    height: 5,
    margin: 5
  },
  chip: {
    marginRight: '5px',
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  pics: {

  }
}));

const ViewProfile = (props) => {
  const { user, images, tags } = props;
  const classes = useStyles();
  const rating = user.rating;
  return (
    <Grid container>
      <Grid item xs={2}>
        <Card className={classes.card} >
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Link to={'/chat'}>
                <IconButton alt='chat'><ChatBubbleOutlineIcon /></IconButton>
              </Link>

            }
            subheader={
              <Link to={'/edit_profile'}>
                <IconButton style={{ display: 'flex', float: "right" }} alt='Edit profile'><EditIcon /> </IconButton>
              </Link>
            }
          />
          <CardMedia style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid className={classes.cardMedia}>
                {/* <img style={{ width: "150px", height: "150px", borderRadius: "100%" }} src={`http://localhost:3001/${user.profilePic}`} alt='photos' /> */}
                {images.isImages && images.images.map((tile) => {
                  return (
                    <Grid key={tile.id} >
                    {(tile.isProfilePic) ? <img style={{ width: "150px", height: "150px", borderRadius: "100%" }} src={`http://localhost:3001/${tile.path}`} alt='photos' /> : null}
                    </Grid>
                  )
                }
                )}
            </Grid>
          </CardMedia>
          <Typography component={'span'} variant={'body2'} style={{ display: 'flex', justifyContent: 'center' }} >
            {' @' + user.username}
            {<Avatar className={user.Online === 1 ? classes.avatarON : classes.avatarOF}> </Avatar>}
          </Typography>
          <Typography style={{ display: 'flex', justifyContent: 'center' }}>
            {user.firstname + ' ' + user.lastname}
          </Typography>
          <Divider />
          <Box component="fieldset" mb={2} mt={2} borderColor="transparent">
            <div className={classes.rating1} >
              <BorderLinearProgress variant="determinate" value={rating} />
            </div>
          </Box>
          <Divider />
          <Box display="flex" p={0} m={3} >
            <Box display="flex" justifyContent="flex-start" width="100%">
              GENDER :
          </Box>
            <Box >
              <strong>{user.gender}</strong>
            </Box>
          </Box>
          <Box display="flex" p={0} m={3} >
            <Box display="flex" justifyContent="flex-start" width="100%">
              AGE :
          </Box>
            <Box >
              <strong>{user.age}</strong>
            </Box>
          </Box>
          <Box display="flex" p={0} m={3} >
            <Box display="flex" justifyContent="flex-start" width="100%">
              INTERESTED IN  :
          </Box>
            <Box >
              {user.Sexual_orientation}
            </Box>
          </Box>
          <Divider />
          <Box p={0} mt={2} >
            <Box >
              BIO :
          </Box> <br />
            <Box >
              {user.biography}
            </Box>
          </Box>
          <Divider />
          <Box p={0} mt={2} >
            <Box >
              Tags :
          </Box> <br />
            <Box >
              {tags != null && tags.map((item, index) => <Chip key={index} className={classes.chip} label={item.value} />)}
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={10} className={classes.pics}>
        {images.isImages && images.images.map((tile) => {
          return (
            <Grid key={tile.id} style={{ display: "inline", float: "left" }}>
              <img style={{ width: "200px", height: "200px", borderRadius: "12px", margin: "3px" }} src={`http://localhost:3001/${tile.path}`} alt='photos' />
            </Grid>
          )
        }
        )}

        <Link to={'/AddPic'}>
          <IconButton style={{ display: 'flex', float: "left", width: "200px", height: "200px" }} alt='Edit profile'><AddIcon /> </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}
export default ViewProfile;