import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as Core from "@material-ui/core";
// import * as Icons from '@material-ui/icons';
import Infos from "../../containers//completeprofile/infos";
import Localisation from "./localisation";
import Photos from "../../containers/completeprofile/upload";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";

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
function getSteps() {
  return ["Infos", "Photos", "Localisation"];
}
const Profile = (props) => {
  const {user,images} = props;
  const classes = loool();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="profileContainer">
      <Core.Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Core.Step key={label}>
            <Core.StepLabel style={{alignItems: "left", justifyContent: "left", float: "left"}} StepIconComponent={ColorlibStepIcon}>
              {label}
            </Core.StepLabel>
            <Core.StepContent>
              <Core.Grid container>
                {/* <Core.Typography className={classes.div}> */}
                <Core.Grid container item sm={12}>{getStepContent(index)}</Core.Grid>
                {/* </Core.Typography> */}
              </Core.Grid>
              <div>
                <div>
                  <Core.Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Core.Button>
                  <Core.Button
                    className={classes.button}
                    variant="contained"
                    // color="secondary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Core.Button>
                </div>
              </div>
            </Core.StepContent>
          </Core.Step>
        ))}
      </Core.Stepper>
      {activeStep === steps.length && (
        <Core.Paper square elevation={0}>
          <Core.Typography>Congratulations you finish</Core.Typography>
          <Core.Button onClick={handleReset} className={classes.reset}>
            Reset
          </Core.Button>
        </Core.Paper>
      )}
    </div>
  );
};
export default Profile;
