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
import logo from '../../image/logo.png';
const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    paddingTop: '5%',
    marginTop: "30px",
    paddingBottom: '7%'
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
    backgroundColor: '#11888e',
    justifyContent: 'center',
    width: "90%"
  },

  login: {
    color: '#07689f',
  },

  margin: {
    height: "30px",
  },
  linkee: {
    textDecoration: 'none', color: '#11888e',
    "&:hover": {
      color: '#09015F'
    }
  }
}));

const Login = (props) => {
  const { handleSubmit, status, errors, registredStatus } = props;
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <CssBaseline />
      {registredStatus === 'success'}
      {status === "errorField" && errors}
      <div className={classes.margin}></div>
      <Paper elevation={10} className={classes.paper}>
        <Avatar variant="rounded" className={classes.avatar} src={logo} />
        <Typography className={classes.login} component="h2" variant="h5">
          Login
        </Typography>
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
        <Grid container justify="flex-end" style={{justifyContent: 'center'}}>
          <Grid item xs={12}>
            <Link to="/register" className={classes.linkee}>
              Don't have an account? Sign Up
              </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/forgotPassword" className={classes.linkee}>
              Forgot password?
              </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default Login;