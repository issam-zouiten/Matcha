import React from "react";
// import {Field} from 'redux-form';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import * as Core from "@material-ui/core";
import { Field } from "redux-form";
import renderField from "../commun/TextField";
// import * as Icons from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  chose: {
  },
}));

// const renderDatepicker = ({input, label, meta : { touched, error}}
//     ) => (
//         <Core.TextField
//             {...input}
//             type = 'date'
//             label = {label}
//             error = {touched && (error ? true : false)}
//             helperText={touched && error}
//             fullWidth
//             InputLabelProps={{
//               shrink: true,
//             }}
//         />
//   )

const Infos = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <CssBaseline />
        <form className={classes.form}>
          <Core.Grid container justify="center" spacing={2}>
            <Core.Grid item xs={12}>
              <Core.FormLabel component="legend">Gender</Core.FormLabel>
              <Core.RadioGroup
              >
                <div>
                  <Core.FormControlLabel
                    value="Male"
                    control={<Core.Radio />}
                    label="Male"
                  />
                  <Core.FormControlLabel
                    value="Female"
                    control={<Core.Radio />}
                    label="Female"
                  />
                </div>
              </Core.RadioGroup>
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Core.FormLabel component="legend">Matches</Core.FormLabel>
              <Core.RadioGroup
              >
                <div>
                  <Core.FormControlLabel
                    value="Men"
                    control={<Core.Radio />}
                    label="Men"
                  />
                  <Core.FormControlLabel
                    value="Women"
                    control={<Core.Radio />}
                    label="Women"
                  />
                  <Core.FormControlLabel
                    value="Both"
                    control={<Core.Radio />}
                    label="Both"
                  />
                </div>
              </Core.RadioGroup>
            </Core.Grid>
            <Core.Grid className={classes.chose} item xs={12}>
              <Core.FormLabel component="legend">Birthday</Core.FormLabel>
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Core.TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Core.Grid>
            {/* <Core.Grid item xs={5}>
                <Core.FormLabel component="legend">Interests</Core.FormLabel>
                <Field name='interests'/>
              </Core.Grid> */}
            <Core.Grid item xs={12}>
            <Core.FormLabel component="legend">Bio</Core.FormLabel>
              <Field
                style={{width: "15%"}}
                name="bio"
                component={renderField}
                type = "text"
                rows='4'
                variant='outlined'
              />
            </Core.Grid>
            <Core.Grid item xs={12}></Core.Grid>
            <Core.Grid item container justify='center' xs={1}>
                <Core.Button className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Done</Core.Button>
              </Core.Grid>
          </Core.Grid>
        </form>
      </div>
    </>
  );
};
export default Infos;
