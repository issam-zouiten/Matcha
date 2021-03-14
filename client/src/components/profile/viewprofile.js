import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import SwipeableViews from 'react-swipeable-views';



const useStyles = makeStyles(theme => ({
  // root: {
  //   padding: '10px',
  //   boxShadow: 3,
  // },
  card: {
    maxWidth: 400,
    maxHeight: 600,
    borderRadius: '20px',
    backgroundColor: '#E6EAEA',
  },
  cardMedia: {
    maxWidth: 400,
    maxHeight: 250,
  },
  cardHeader: {
    maxWidth: 400,
    maxHeight: 100,
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
    width: 15,
    height: 15,
  },
  avatarOF: {
    backgroundColor: '#e42416',
    width: 15,
    height: 15,
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
}));

export default function ViewProfile(props) {
  const { user, images, tags } = props;
  const classes = useStyles();
  const value = user.rating;
  const tutorialSteps = images.images;
  const theme = useTheme();
  const [activeStep,setActiveStep ] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
console.log(tutorialSteps);
  return (
    <Grid container justify='center'>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="read-only"
                  value={value}
                  precision={0.5}
                  readOnly
                />

              </div>
            </Box>

          }
          avatar={
            <Avatar aria-label="recipe" className={user.Online === 1 ? classes.avatarON : classes.avatarOF}>

            </Avatar>

          }
          title={user.firstname + ' ' + user.lastname + ' @' + user.username}
          subheader={user.Online === 1 ? 'Online' : 'Offline' + user.lastSignIn}
        >

        </CardHeader>

        <CardMedia
          className={classes.cardMedia}
          children={
            images.isImages ? images.images.map((tile) =>
            <div className={classes.root}>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} style={{ width: "100%", height: "250px" }} src={`http://localhost:3001/${tile.path}`} alt="images" />
      
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </div>
            ) : console.log("okii")
          }
        />
        {/* {console.log(tile.id)}
        {images.isImages  && images.images.map((tile) => {
                return (
                  <GridListTile  key={tile.id}>
                    <img src={`http://localhost:3001/${tile.path}`} alt='photos' /> 
                  </GridListTile> 
                )}
              )} */}
        <CardContent className={classes.cardContent}>
          <Typography >
            <strong>AGE :</strong>{user.age}
          </Typography>
          <Typography >
            <strong>GENDER :</strong>{user.gender}
          </Typography>
          <Typography >
            <strong>INTERESTED IN :</strong>{user.Sexual_orientation}
          </Typography>
          <Typography component={'span'}>
            <strong>TAGS :</strong> {tags != null && tags.map((item, index) => <Chip key={index} className={classes.chip} label={item.value} />)}
          </Typography>
          <Typography >
            <strong>BIO :</strong> {user.biography}
          </Typography>
        </CardContent>

      </Card>
    </Grid>
  );
}
