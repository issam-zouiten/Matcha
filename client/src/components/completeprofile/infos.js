import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import * as Core from "@material-ui/core";
import { Field } from "redux-form";
import Flash from '../commun/flash';
import renderField from '../commun/TextField';
import RadioGroup from '../commun/RadioGroup';
import CreatableSelect from 'react-select/creatable';
// import * as Icons from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(15deg, #11978D 30%, #11878D 70%)",
    justifyContent: "center",
    color: "#FFF",
  },
  
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

const renderDatepicker = ({ input, label, meta: { touched, error } }
) => (
  <Core.TextField
    {...input}
    type="date"
    label={label}
    error={touched && (error ? true : false)}
    helperText={touched && error}
    InputLabelProps={{
      shrink: true,
    }}
  />
)


const Infos = (props) => {
  const classes = useStyles();
  const { handleSubmit, selectLoading, selectTags, selectError, createTag } = props;

  const handleCreate = (value) => {
    createTag(value);
  }

  const selectField = ({ input, meta: { touched, error } }) => (
    <div>
      <CreatableSelect
        {...input}
        isMulti
        isDisabled={selectLoading}
        isLoading={selectLoading}
        isClearable={false}
        options={selectTags}
        onBlur={() => input.onBlur(input.value)}
        onChange={(value) => { input.onChange(value) }}
        onCreateOption={handleCreate}
      />

      <div>{(touched && error) &&
        <div style={{ 'fontSize': '12px', 'color': 'rgb(244, 67, 54)' }}>{error}</div>}
      </div>
    </div>
  );

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <CssBaseline />
        {selectError && <Flash variant="error" msg={selectError} />}
        <form className={classes.form}>
          <Core.Grid container justify="center" spacing={2}>
            <Core.Grid item xs={12} sm={6}>
              <Field
                name="firstname"
                component={renderField}
                label="Firstname"
                type="text"
                rows='1'
              />
            </Core.Grid>
            <Core.Grid item xs={12} sm={6}>
              <Field
                name="lastname"
                component={renderField}
                label="Lastname"
                type="text"
                rows='1'
              />
            </Core.Grid>
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
                    { title: 'Men ', value: 'men' },
                    { title: 'Women', value: 'women' },
                    { title: 'Both', value: 'both' }
                  ]}
                  />
                </div>
              </Core.RadioGroup>
            </Core.Grid>
            <Core.Grid className={classes.chose} item xs={12}>
              <Core.FormLabel component="legend">Birthday</Core.FormLabel>
              <Field
                name="date_birthday"
                component={renderDatepicker}
              />
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Core.FormLabel component="legend">Bio</Core.FormLabel>
              <Field
                name="biography"
                component={renderField}
                type="text"
                rows='4'
                variant='outlined'
              />
            </Core.Grid>
            <Core.Grid item xs={12}>
              <Core.FormLabel component="legend">Tags</Core.FormLabel>
              <Field name='tags' component={selectField} />
            </Core.Grid>
            <Core.Grid container direction="row" item xs={12}>
              <Core.Grid item xs={9} />
              <Core.Grid item container alignItems="flex-end" xs={3}>
                <Core.Button onClick={handleSubmit} fullWidth variant="contained" type="submit" className={classes.button} name="submit" value="ok" >Next</Core.Button>
              </Core.Grid>
            </Core.Grid>
          </Core.Grid>
        </form>
      </div>
    </>
  );
};
export default Infos;
