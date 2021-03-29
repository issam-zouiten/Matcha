import React from "react";
import { Field } from "redux-form";
import * as Core from "@material-ui/core";
// import * as Icons from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../image/logo.png";
import textField from "../commun/TextField";
import MyFlash from '../commun/flash'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    paddingTop: "5%",
    marginTop: "35%",
    paddingBottom: "7%",
    borderRadius: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(0),
    width: theme.spacing(15),
    height: theme.spacing(17),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
    justifyContent: "center",
    width: "90%",
    borderRadius: theme.spacing(1),
    textDecoration: "none",
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    "&:hover": {
      background: "linear-gradient(30deg, #0b777d 10%, #34ada4 90%)",
    },
  },
  margin: {
    height: "30px",
  },
  login: {
    color: "#07689F",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
}));
const ForgotPassword = (props) => {
  const classes = useStyles();
  const { handleSubmit, status, errors } = props;
  return (
    <Core.Container component="main" maxWidth="xs">
      <div className={classes.margin}></div>
      {status === "success" && (
        <MyFlash variant="success" msg={["Please check your e-mail"]} />
      )}
      {status === "error" && <MyFlash variant="error" msg={[errors]} />}
      <Core.Paper elevation={10} className={classes.paper}>
        <Core.Avatar className={classes.avatar} src={logo} />
        <Core.Typography
          className={classes.login}
          component="h1"
          variant="h5"
          color="primary"
        >
          Send reset link
        </Core.Typography>
        <form className={classes.form}>
          <Core.Grid item xs={12}>
            <Field
              style={{ width: "90%", marginBottom: "15px" }}
              name="email"
              component={textField}
              label="Email"
              type="email"
              rows="1"
            />
          </Core.Grid>
          <Core.Grid item xs={12}>
            <Core.Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Submit
            </Core.Button>
          </Core.Grid>
        </form>
      </Core.Paper>
    </Core.Container>
  );
};
export default ForgotPassword;
