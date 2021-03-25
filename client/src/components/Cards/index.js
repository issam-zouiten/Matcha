import React from "react";
import * as Core from "@material-ui/core";
import * as Icons from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import "./Cards.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 220,
    display: "block",
    maxWidth: 300,
    overflow: "hidden",
    width: "100%",
  },
}));
export default function Cards(props) {
  const { user, handleLike, handleDislike, handleReport, handleBlock, handleViewProfile} = props;
  const rating = user.user.rating;
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    
    <div className="container">
      <Core.Card
        className="card"
        style={{ backgroundSize: "cover", backgroundPosition: "center center" }}
      >
        <Core.CardHeader
          className="cardHeader"
          action={
            <Core.Box component="fieldset" borderColor="transparent">
              <div className="rating1">
                <Rating
                  name="read-only"
                  value={rating}
                  precision={0.1}
                  readOnly
                />
              </div>
            </Core.Box>
          }
          avatar={
            user.images.length !== 0
              ? user.images.map((tile) => (
                    <div key={tile.id}>
                      {tile.isProfilePic === 1 && (
                        <Core.Avatar
                          style={{ border: "1px solid #c9c9c9" }}
                          src={`http://localhost:3001/${tile.path}`}
                        />
                      )}
                    </div>
                  )
                )
              : null
          }
          title={user.user.username}
          subheader={user.user.online === 1 ? "Online" : "Offline"}
        ></Core.CardHeader>

        <Core.CardMedia
          style={{
            display: "flex",
            flexDirection: "wrap",
            justifyContent: "center",
          }}
        >
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {user.images.map((step, index) => (
              <div key={step.id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={`http://localhost:3001/${step.path}`}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Core.CardMedia>
        <div className="cardContent">
          <Core.Typography>Age : {user.user.age}</Core.Typography>
        </div>
        <div className="cardAction">
          {/* {console.log(user)} */}
        {user.user.like === null &&
          <Core.Tooltip title="Like" >
            <Core.IconButton aria-label="Like" onClick={(e) => handleLike(user.user.id)}>
              <Icons.FavoriteBorder color="secondary" />
            </Core.IconButton>
          </Core.Tooltip>
          }
          {user.user.like === 'iLike' &&
          <Core.Tooltip title ="Unlike"><Core.IconButton aria-label="Unlike" onClick={(e) => handleDislike(user.user.id)}>
            <Icons.Favorite  color="secondary"/>
          </Core.IconButton></Core.Tooltip>
        }
        {user.user.like === 'heLiked' &&
          <Core.Tooltip title ="Like back"><Core.IconButton aria-label="Like back"  onClick={(e) => handleLike(user.user.id)}>
            <Icons.SupervisedUserCircleOutlined color="primary"/>
          </Core.IconButton></Core.Tooltip>
        }
        {user.user.like === 'match' &&
          <Core.Tooltip title ="Unmatch"><Core.IconButton aria-label="Unmatch"  onClick={(e) => handleDislike(user.user.id)}>
            <Icons.SupervisedUserCircleRounded color="primary"/>
          </Core.IconButton></Core.Tooltip>
        }
          
          <Core.Tooltip title="Block">
            <Core.IconButton aria-label="Block" onClick={(e) => handleBlock(user.user.id)}>
              <Icons.Block color="secondary" />
            </Core.IconButton>
          </Core.Tooltip>
          <Core.Tooltip title ="Report"><Core.IconButton aria-label="Report"  onClick={(e) => handleReport(user.user.id)}>
        <Icons.Report  color="secondary"/>
        </Core.IconButton></Core.Tooltip>
          <Core.Tooltip title ="Report"><Core.IconButton aria-label="Report"  onClick={(e) => handleViewProfile(user.user.id)}>
        <VisibilityIcon  color="secondary"/>
        </Core.IconButton></Core.Tooltip>
        </div>
      </Core.Card>
    </div>
  );
}
