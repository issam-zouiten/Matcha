import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import img from '../../image/logo.png';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  backgroundColorc: {
    margin: theme.spacing(20, 'auto'),
    background: '#79A3B1',
    borderRadius: theme.spacing(2),
  },
}));

const EmailConfirmation = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.backgroundColorc}>
      <CssBaseline />
      {props.status !== 'loading' && <div className={classes.paper}>
      <Avatar variant="rounded" className={classes.avatar} src={img}></Avatar>
        <Typography variant="h3" color="inherit">
          Email confirmation
        </Typography>
        {props.status === 'error' && <Typography variant="h6" color="error">
          <ErrorIcon /> There was an error, please retry.
        </Typography>}
        {props.status === 'success' && <Typography variant="h6" color="inherit">
          <CheckCircleIcon /> Email verified successfully.
          <br/>
          You can now <Link to="/login"  style={{textDecoration: 'none', color:'#008891'}}>Login</Link>
        </Typography>}
      </div>}
      {props.status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}
    </Container>
  );
}

export default EmailConfirmation;