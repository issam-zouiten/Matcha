import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import * as Core from "@material-ui/core";
import { Field } from "redux-form";
import renderField from '../commun/TextField';
import RadioGroup from '../commun/RadioGroup';
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

const Infos = (props) => {
  const classes = useStyles();
  const { handleSubmit} = props;

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
                <Field component={RadioGroup} name="gender" required={true} options={[
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' }
                  ]}
              />
                </div>
              </Core.RadioGroup>
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Core.FormLabel component="legend">Matches</Core.FormLabel>
              <Core.RadioGroup
              >
                <div>
                <Field component={RadioGroup} name="Sexual_orientation" required={true} options={[
                    { title:  'Men ' , value: 'men'  },
                    { title:  'Women', value: 'women'},
                    { title:  'Both' , value: 'both' }
                  ]}
              />
                </div>
              </Core.RadioGroup>
            </Core.Grid>
            <Core.Grid className={classes.chose} item xs={12}>
              <Core.FormLabel component="legend">Birthday</Core.FormLabel>
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Field
                id="date"
                name="date_birthday"
                label="Birthday"
                component={renderField}
                type="date"
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
                name="biography"
                component={renderField}
                type = "text"
                rows='4'
                variant='outlined'
              />
            </Core.Grid>
              <Core.Grid>
                <Core.Button onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Next</Core.Button>
              </Core.Grid>
          </Core.Grid>
        </form>
      </div>
    </>
  );
};
export default Infos;
