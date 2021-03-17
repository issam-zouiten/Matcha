import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as Core from "@material-ui/core";
import Infos from "../../containers//completeprofile/infos";
import Localisation from "../../containers/completeprofile/localisation";
import Photos from "../../containers/completeprofile/upload";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';


const loool = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(15deg, #11978D 30%, #11878D 70%)",
    justifyContent: "center",
    color: "#FFF",
  },
  reset: {
    color: "#11978D",
  },
  div: {
    backgroundColor: " red",
    width: "100%",
    height: "90vh",
    padding: "10px",
  },
  compl: {
    color: "#11978D",
    size: "130px"
  },
}));

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 35,
    height: 35,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage: "linear-gradient(15deg, #174F70 30%, #11878D 70%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage: "linear-gradient(15deg, #174F70 30%, #11878D 70%)",
  },

});

function ColorlibStepIcon(props) {
  const classes = useStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    //  right: 22,
    left: 22,
    //  top: 100,
  },
  active: {
    "& $line": {
      backgroundImage: "linear-gradient(15deg, #174F70 30%, #11878D 70%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient(15deg, #174F70 30%, #11878D 70%)",
    },
  },
  line: {
    // height: 3,
    width: 2,
    left: 100,
    // border: 0,
    // backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const steps = ['Infos', 'Photos', 'Localisation'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Infos />;
    case 1:
      return <Photos />;
    case 2:
      return <Localisation />;
    default:
      return "Unknown step";
  }
}

const Profile = (props) => {
  const { handleBack, handleNext, user, images } = props;
  const activeStep = user.step;
  const classes = loool();
  return (
    <React.Fragment>
      <CssBaseline />
      {activeStep !== 'loading' &&
        <main className="profileContainer">
          <Core.Paper className={classes.paper}>
            <Core.Typography component="h1" variant="h4" align="center" className={classes.compl}>
              Complete profile
        </Core.Typography>
            <Core.Stepper activeStep={activeStep}
              orientation="vertical"
              connector={<ColorlibConnector />}
            >
              {steps.map(label => (
                <Core.Step key={label}>
                  <Core.StepLabel style={{ alignItems: "left", justifyContent: "left", float: "left" }} StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </Core.StepLabel>
                </Core.Step>
              ))}
            </Core.Stepper>
            <React.Fragment>
              {/* {console.log(activeStep)} */}
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Core.Typography variant="h5" gutterBottom>
                    Welcome
              </Core.Typography>
                  <Core.Typography variant="subtitle1">
                  <BeenhereIcon /><br/>
                    You completed your profile successfully.
              </Core.Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                </React.Fragment>
              )}
            </React.Fragment>
            {(activeStep === 1 || activeStep === 2) &&
              <Core.Grid container style={{ alignItems: "center", justifyContent: "center", float: "center" }} direction="row" item xs={12}>
                <Core.Button onClick={handleBack} variant="contained" type="submit" >Back</Core.Button>

                {
                  images.isImages === true &&
                  <Core.Button onClick={handleNext} variant="contained" type="submit" className={classes.button}>Next</Core.Button>
                }
              </Core.Grid>
            }
          </Core.Paper>
        </main>}
      {activeStep === "loading" && <div className={classes.loading}><CircularProgress color="secondary" /></div>}
    </React.Fragment>
  );
};
export default Profile;
