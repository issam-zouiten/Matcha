import React from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import CreatableSelect from "react-select/creatable";
import { makeStyles } from "@material-ui/core/styles";
import renderField from "../commun/TextField";
import RadioGroup from "../commun/RadioGroup";
import MyFlash from "../commun/flash";
import * as Core from "@material-ui/core";
import EditLoc from "../../containers/editProfile/EditLoc";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    marginBottom: "15px",
    // backgroundColor: "red",
    [theme.breakpoints.down(425 + theme.spacing(2) * 2)]: {
      padding : "10px",
      margin : "10px",
      // backgroundColor: "red"
    },
  },

  submit: {
    margin: theme.spacing(2, 0, 2),
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
    "&:hover": {
      background: "linear-gradient(30deg, #0b777d 10%, #34ada4 90%)",
    },
  },
}));

const renderDatepicker = ({ input, label, meta: { touched, error } }) => (
  <TextField
    {...input}
    type="date"
    label={label}
    error={touched && (error ? true : false)}
    helperText={touched && error}
    fullWidth
    InputLabelProps={{
      shrink: true,
    }}
  />
);

const ProfileInfo = (props) => {
  const classes = useStyles();
  const {
    handleSubmit,
    selectLoading,
    selectTags,
    selectError,
    createTag,
  } = props;

  const handleCreate = (value) => {
    createTag(value);
  };

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
        onChange={(value) => {
          input.onChange(value);
        }}
        onCreateOption={handleCreate}
      />

      <div>
        {touched && error && (
          <div style={{ fontSize: "12px", color: "rgb(244, 67, 54)" }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
  return (
    <Grid item xs={12}  container justify="center" alignItems="center">
      {selectError && <MyFlash msg={selectError} variant="error" />}
      <Grid item xs={12} sm={10} md={10} lg={6} >
        <Core.Paper className={classes.paper} elevation={10}>
          <Box m={2} />
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Firstname</FormLabel>
              <Field
                name="firstname"
                component={renderField}
                type="text"
                rows="1"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Lastname</FormLabel>
              <Field
                name="lastname"
                component={renderField}
                type="text"
                rows="1"
              />
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Username</FormLabel>
              <Field
                name="username"
                component={renderField}
                type="text"
                fullWidth
                rows="1"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Email</FormLabel>
              <Field
                name="email"
                component={renderField}
                type="email"
                rows="1"
              />
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Gender</FormLabel>
              <Field
                component={RadioGroup}
                name="gender"
                required={true}
                options={[
                  { title: "Male", value: "male" },
                  { title: "Female", value: "female" },
                ]}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Match with</FormLabel>
              <Field
                component={RadioGroup}
                name="Sexual_orientation"
                required={true}
                options={[
                  { title: "Men ", value: "men" },
                  { title: "Women", value: "women" },
                  { title: "Both", value: "both" },
                ]}
              />
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Birthday</FormLabel>
              <Field name="date_birthday" component={renderDatepicker} />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Tags</FormLabel>
              <Field name="tags" component={selectField} />
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid container item xs={6} justify="center">
            <FormLabel component="legend">Bio</FormLabel>
            <Field
              name="biography"
              component={renderField}
              type="text"
              rows="4"
              variant="outlined"
            />
          </Grid>
          <Box m={2} />
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">New password</FormLabel>
              <Field
                name="password"
                component={renderField}
                type="password"
                rows="1"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <FormLabel component="legend">Confirm new password</FormLabel>
              <Field
                name="confirmPassword"
                component={renderField}
                type="password"
                rows="1"
              />
            </Grid>
          </Grid>
          <Box m={2} />
          <Grid container item xs={11} sm={11} md={6} justify="center">
            <EditLoc />
          </Grid>
          <Grid item container justify="center" xs={3}>
            <Button
              onClick={handleSubmit}
              className={classes.submit}
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              name="submit"
              value="ok"
            >
              Submit
            </Button>
          </Grid>
        </Core.Paper>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
