import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Field } from 'redux-form';
import React from 'react';
import renderField from '../commun/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from '../../image/logo.png';
import LoginImage from "../../image/registerpic.svg";
import MyFlash from '../commun/flash';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    paddingTop: '5%',
    marginTop: "5%",
    paddingBottom: '7%',
    borderRadius: theme.spacing(3),
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  submit: {
    margin: theme.spacing(0, 0, 1),
    // backgroundColor: '#11888e',
    justifyContent: 'center',
    width: "90%",
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    "&:hover": {
      background: "linear-gradient(30deg, #0b777d 10%, #34ada4 90%)",
    }
  },

  avatar: {
    margin: theme.spacing(0),
    width: theme.spacing(15),
    height: theme.spacing(17),
  },

  buttongrid: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },

  placeholder: {
    width: "85%",
  },

  login: {
    color: '#07689f',
  },

  container: {
    textAlign: 'center',
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

  logimg:{
    marginTop: "30%",
    // marginRight: "10%",
    // paddingRight: "10%",
    height : "500px",
    width:"500px"
  },

  contPic: {
    alignContent: "center",
    justifyContent: "center"
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

const Register = (props) => {
  const { handleSubmit, status, err } = props;
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.contPic}>
      <Grid style={{display: "flex", flex: "row"}}>
        <Grid item xs={false} sm={false} md={6} className={classes.gridPic}>
            {/* <Container maxWidth="xs" style={{backgroundColor:"green",    display: 'flex', alignItems: 'center', justifyContent: 'center',}}> */}
              <img alt="picregister" src={LoginImage} className={classes.logimg}></img>
            {/* </Container> */}
            
          </Grid>
          <div className={classes.marginee2}></div>
        <Grid  item xs={false} sm={false} md={6}>
          <Container className={classes.container} component="main" maxWidth="xs">
            <CssBaseline />
            {status === "error" && <MyFlash variant="error" msg={[err]} />}
            {status !== "loading" &&
              <div className={classes.paper}>
                <Paper elevation={10} className={classes.paper}>
                  <Avatar variant="rounded" className={classes.avatar} src={logo} />
                  <Typography className={classes.login} component="h2" variant="h5">
                    Sign up
        </Typography>
                  <form className={classes.form}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Field
                          name="firstname"
                          component={renderField}
                          label="firstname"
                          type="text"
                          rows='1'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="lastname"
                          component={renderField}
                          label="lastname"
                          type="text"
                          rows='1'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="username"
                          component={renderField}
                          label="Username"
                          type="text"
                          rows='1'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="email"
                          component={renderField}
                          label="Email"
                          type="email"
                          rows='1'

                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="password"
                          component={renderField}
                          label="Password"
                          type="password"
                          rows='1'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          name="confirmPassword"
                          component={renderField}
                          label="ConfirmPassword"
                          type="password"
                          rows='1'
                        />
                      </Grid>
                      <Grid className={classes.buttongrid} item xs={12}>
                        <Button onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Grid container justify="flex-end" style={{ justifyContent: 'center' }}>
                    <Grid item>
                      <Link to="/login" className={classes.linkee}>
                        Already have an account? Sign in</Link>
                    </Grid>
                  </Grid>
                </Paper>
              </div>}
            {status === "loading" && <div className={classes.paper} style={{ marginTop: "300px" }}><CircularProgress color="secondary" /></div>}
          </Container>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;