import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import renderField from '../commun/TextField';
import logo from '../../image/logo.png';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: "30px",
    paddingTop: '5%',
    paddingBottom: '7%'
    //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
    backgroundColor: '#11888e',
    justifyContent: 'center',
    width: "90%"
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
  }
}));



const ResetPassword = (props) => {
    const {handleSubmit, status, resetPasswordStatus, resetError} = props;
    const classes = useStyles();

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    {resetPasswordStatus === "success"}
    {resetPasswordStatus === "error" && resetError}
    {status !== "loading" &&
    <div className={classes.paper}>
        <Avatar variant="rounded" className={classes.avatar} src={logo} />
        <Typography component="h1" variant="h5" color="primary">
          Reset password
        </Typography>
        <form  className={classes.form}>
            <Grid container spacing={2}>
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
                <Grid item xs={12}>
                    <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
                </Grid>
            </Grid>
        </form>    
        
        
    </div>}
    {status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}
      
    </Container>
    );
}

export default ResetPassword;