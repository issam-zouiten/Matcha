import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
// import {ResponsiveGridLayout } from 'react-grid-layout';
import AddIcon from "@material-ui/icons/Add";
import { Paper } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 100 : 700],
  },
  bar: {
    borderRadius: 5,
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: '10px',
  //   boxShadow: 3,
  // },
  card: {
    height: "100%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "0px",
    },
  },
  greenpaper: {
    padding: "20px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      height: "auto",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "10px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "10px",
    },
  },
  cardMedia: {
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: "300px",
  },
  cardHeader: {
    // backgroundColor : "red",
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
    backgroundColor: "#00FB0C",
    width: 5,
    height: 5,
    margin: 5,
  },
  avatarOF: {
    backgroundColor: "#e42416",
    width: 5,
    height: 5,
    margin: 5,
  },
  chip: {
    marginRight: "5px",
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  pics: {
    height: "100%",
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    // display: "flex",
    // flexDirection: "wrap",
    // maxWidth: "600px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    border: "1px solid #D7D4D3",
    alignContent: "center",
    justifyContent: "center",
    // padding: "2%",
  },
  type: {
    ...theme.typography.h5,
  },
  type1: {
    ...theme.typography.username,
  },
  type2: {
    ...theme.typography.username,
  },
  secondpaper: {
    background: "linear-gradient(140deg, #34ada4 15%, #0b777d 90%)",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      height: "auto",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "10px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "10px",
    },
  },
  bigbox: {
    borderRadius: "10px",
    height: "750px",
    [theme.breakpoints.down(425 + theme.spacing(3) * 2)]: {
      justifyContent: "center",
      margin: "5%"
    },
  }
}));

const ViewProfile = (props) => {
  const { user, images, tags } = props;
  const classes = useStyles();
  const rating = user.rating;
  return (
    // <Box  boxShadow={10}>
    <Grid
      item
      xs={12}
      sm={12}
      boxShadow={10}
      container
      alignItems="center"
      justify="center"
      style={{
        // backgroundColor : "red",
        boxShadow: "10px",
        marginTop: "6%",
      }}
    >
      {/* <Grid
        item
        xs={12}
        container
        alignItems="center"
        justify="center"
        style={{
          height: "750px",
          backgroundColor: "green",
          // marginTop:"7%"
        }} 
      > */}
      <Box
        component={Grid}
        container
        sm={11}
        xs={12}
        md={11}
        lg={6}
        boxShadow={10}
        className = {classes.bigbox}
      >
        {/* <Box style={{height : "750px", width: "100%"}}> */}
        <Grid
          item
          sm={4}
          xs={12}
          lg={4}
          style={{
            height: "100%",
            // marginTop: "50%"
          }}
        >
          {/* <Box> */}
          <Paper className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              avatar={
                <Link to={"/chat"}>
                  <IconButton alt="chat">
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                </Link>
              }
              subheader={
                <Link to={"/edit_profile"}>
                  <IconButton
                    style={{ display: "flex", float: "right" }}
                    alt="Edit profile"
                  >
                    <EditIcon />{" "}
                  </IconButton>
                </Link>
              }
            />
            <CardMedia
              style={{
                display: "flex",
                flexDirection: "wrap",
                justifyContent: "center",
              }}
            >
              <Grid className={classes.cardMedia}>
                {images.isImages &&
                  images.images.map((tile) => {
                    return (
                      <Grid
                        key={tile.id}
                        style={{ display: "flex", flexDirection: "wrap" }}
                      >
                        {tile.isProfilePic ? (
                          <img
                            style={{
                              width: "150px",
                              height: "150px",
                              margin: "10px",
                              borderRadius: "100%",
                              border: "1px solid #D7D4D3",
                            }}
                            src={`http://localhost:3001/${tile.path}`}
                            alt="photos"
                          />
                        ) : null}
                      </Grid>
                    );
                  })}
              </Grid>
            </CardMedia>
            <Grid
              style={{
                display: "flex",
                flex: "row",
                justifyContent: "center",
              }}
            >
              <Typography
                className={classes.type}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {user.username}
              </Typography>
              {
                <Avatar
                  className={
                    user.Online === 1 ? classes.avatarON : classes.avatarOF
                  }
                >
                  {" "}
                </Avatar>
              }
            </Grid>
            <Typography
              className={classes.type1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {user.firstname + " " + user.lastname}
            </Typography>
            <Divider />
            <Box component="fieldset" mb={2} mt={2} borderColor="transparent">
              <div className={classes.rating1}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(rating * 100) / 5}
                />
              </div>
            </Box>
            <Divider />
            <Box display="flex" p={0} m={3}>
              <Box display="flex" justifyContent="flex-start" width="100%">
                <Typography className={classes.type2}>GENDER :</Typography>
              </Box>
              <Box>
                <Typography className={classes.type2}>{user.gender}</Typography>
              </Box>
            </Box>
            <Box display="flex" p={0} m={3}>
              <Box display="flex" justifyContent="flex-start" width="100%">
                <Typography className={classes.type2}>AGE :</Typography>
              </Box>
              <Box>
                <Typography className={classes.type2}>{user.age}</Typography>
              </Box>
            </Box>
            <Box display="flex" p={0} m={3}>
              <Box display="flex" justifyContent="flex-start" width="100%">
                <Typography className={classes.type2}>
                  INTERESTED IN :
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.type2}>
                  {user.Sexual_orientation}
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Box m={1}>
                <Typography className={classes.type2}>BIO :</Typography>
                <Box m={1}>
                  <Typography>{user.biography}</Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box p={0} mt={2}>
              <Box>
                <Typography className={classes.type2}>Tags :</Typography>
              </Box>
              <br />
              <Box>
                {tags != null &&
                  tags.map((item, index) => (
                    <Chip
                      key={index}
                      className={classes.chip}
                      label={item.value}
                    />
                  ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          container
          // float="center"
          // alignItems="center"
          // justify="center"
          sm={8}
          xs={12}
          lg={8}
          style={
            {
              // justifyContent: 'center',
              // alignItems: 'center',
              // alignContent : 'center',
              // justifyContent: 'space-evently',
              // overflow: 'hidden',
              // backgroundColor: "#000000",
              // display: 'flex',
              // flexWrap: 'wrap',
              // padding: '2%',
              // display: 'flex',
              // flexWrap: 'wrap',
              // justifyContent: 'center',
              // overflow: 'hidden',
              // backgroundColor: "#D3D3D3",
              // // display: "flex",
              // // flexDirection: "wrap",
              // // maxWidth: "600px",
              // borderTopRightRadius: "10px",
              // borderBottomRightRadius: "10px",
              // borderTopLeftRadius: "0px",
              // borderBottomLeftRadius: "0px",
              // border: "1px solid #D7D4D3",
              // alignContent: "center",
              // justifyContent: "center",
            }
          }
        >
          <Paper className={classes.secondpaper}>
            <Grid container xm={12} className={classes.greenpaper}>
              {images.isImages &&
                images.images.map((tile) => {
                  return (
                    // <Grid item sm={4} key={tile.id}>
                    <img
                      key={tile.id}
                      style={{
                        width: "200px",
                        // magrin : "10px",
                        height: "200px",
                        borderRadius: "12px",
                        margin: "5px",
                        // display: "flex",
                        // flexDirection: "wrap",
                        // backgroundColor: "red",
                        // border: "1px solid red",
                      }}
                      src={`http://localhost:3001/${tile.path}`}
                      alt="photos"
                    />
                    // </Grid>
                  );
                })}

              {/* <Link to={"/AddPic"} 
             style={{
              width: "200px",
              // magrin : "10px",
              height: "200px",
              borderRadius: "12px",
              margin: "5px",
              // display: "flex",
              // flexDirection: "wrap",
              backgroundColor: "red",
              border: "1px solid red",
            }}> */}

              <IconButton
                style={{
                  width: "200px",
                  // magrin : "10px",
                  height: "200px",
                  borderRadius: "12px",
                  margin: "5px",
                  // display: "flex",
                  // flexDirection: "wrap",
                  // backgroundColor: "red",
                  // border: "1px solid red",
                }}
                alt="Edit profile"
              >
                <AddIcon />
              </IconButton>
              {/* </Link> */}
            </Grid>
          </Paper>
        </Grid>
        {/* </Box> */}
      </Box>
    </Grid>
    // </Box>
  );
};
export default ViewProfile;
