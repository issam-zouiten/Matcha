import React from 'react';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import textField from '../commun/TextField'
import LoginImage from "../../image/loginpic.svg";
import logo from '../../image/logo.png';
import MyFlash from '../commun/flash'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    paddingTop: '5%',
    marginTop: "35%",
    paddingBottom: '7%',
    borderRadius: theme.spacing(3),
  },

  form: {
    width: '80%',
    marginTop: theme.spacing(3),
  },

  avatar: {
    margin: theme.spacing(0),
    width: theme.spacing(15),
    height: theme.spacing(17),
  },

  submit: {
    margin: theme.spacing(0, 0, 1),
    justifyContent: 'center',
    width: "100%",
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    "&:hover": {
      background: "linear-gradient(30deg, #0b777d 10%, #34ada4 90%)",
    }
  },

  login: {
    color: '#07689f',
  },

  marginee: {
    height: "30px",
  },

  linkee: {
    textDecoration: 'none', color: '#11888e',
    "&:hover": {
      color: '#09015F'
    }
  },

  gridPic: {
    [theme.breakpoints.down(800 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(8),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3),
      display: "none",
    },
    // backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    height : "600px",
    width : "600px"
    // marginTop:"330px"
  },
  contPic: {
    alignContent: "center",
    justifyContent: "center"
  },
  logimg:{
    marginTop: "30%",
    // marginRight: "10%",
    // paddingRight: "10%",
    height : "500px",
    width:"500px"
  },
  marginee2: {
    [theme.breakpoints.down(800 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(8),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3),
      display: "none",
    },
    width : "100px",
  },

}));

const Login = (props) => {
  const { handleSubmit, status, errors, registredStatus } = props;
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.contPic} >
        <Grid style={{display: "flex", flex: "row"}}>
        <Grid item xs={false} sm={false} md={6} className={classes.gridPic}>
          {/* <Container maxWidth="xs" style={{backgroundColor:"green",    display: 'flex', alignItems: 'center', justifyContent: 'center',}}> */}
            <img alt="logimg" src={LoginImage} className={classes.logimg}></img>
          {/* </Container> */}
          
        </Grid>
        <div className={classes.marginee2}></div>
        <Grid item xs={false} sm={false} >
          <Container maxWidth="xs" >
            <CssBaseline />
            <div className={classes.marginee}></div>
            {registredStatus === 'success' && <MyFlash variant="success" msg={['Registred successfully, check your e-mail']}/>}
            {status === "errorField" && <MyFlash variant="error" msg={[errors]}/>}
            <Paper elevation={10} className={classes.paper}>
              <Avatar variant="rounded" className={classes.avatar} src={logo} />
              <Typography className={classes.login} component="h2" variant="h5">
                Login</Typography>
              <form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="username"
                      label="Username"
                      type="text"
                      component={textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      type="password"
                      component={textField}
                      rows='1'
                      label="Password"
                    />
                  </Grid>
                  <Grid className={classes.buttongrid} item xs={12}>
                    <Button onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
                  </Grid>
                </Grid>
              </form>
              <Grid container justify="flex-end" style={{ justifyContent: 'center' }}>
                <Grid item xs={12}>
                  <Link to="/register" className={classes.linkee}>
                    Don't have an account? Sign Up
              </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/forgotPassword" className={classes.linkee}>
                    Forgot password?</Link>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;