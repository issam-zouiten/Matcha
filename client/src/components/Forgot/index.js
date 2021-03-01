import React from 'react';
import {Field} from 'redux-form';
import * as Core from '@material-ui/core';
// import * as Icons from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../image/logo.png';
import renderField from '../commun/TextField';
const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        padding: '5%',
        marginTop: "30px",
        paddingBottom: '7%'
      },
    avatar: {
        margin: theme.spacing(0),
        width: theme.spacing(15),
        height: theme.spacing(17),
      },
      submit: {
        margin: theme.spacing(10, 0, 1),
        backgroundColor: '#11888E',
        justifyContent: 'center',
        width: "90%"
      },
      margin: {
        height: "30px",
      },
      login: {
        color: '#07689F',
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(3),
      },
}))
const ForgotPassword = (props) => {
    const classes = useStyles();
    const {handleSubmit} = props;
    return (
        <Core.Container component="main" maxWidth="xs">
            <div className={classes.margin}></div>
            <Core.Paper elevation={10} className={classes.paper}>
                <Core.Avatar className={classes.avatar} src={logo} />
                <Core.Typography className={classes.login} component="h1" variant="h5" color="primary">
                    Send reset link
                </Core.Typography>
                <form className={classes.form}>
                <Core.Grid item xs={12}>
                <Field
                    name="email"
                    component={renderField}
                    label="Email"
                    type = "email"
                    rows='1'
                />
                </Core.Grid>
                <Core.Grid item xs={12}>
                <Core.Button fullWidth variant="contained" type="submit" color="primary" className={classes.submit} onClick={handleSubmit}>Submit</Core.Button>
                </Core.Grid>
                </form>
            </Core.Paper>
        </Core.Container>
    );
}
export default ForgotPassword;