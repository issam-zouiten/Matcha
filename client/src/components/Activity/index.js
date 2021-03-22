import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import BlockIcon from '@material-ui/icons/Block';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
    width: 400,
  },
  margiin: {
    width: 200,
  },
  tabs: {
    width: 300,
  },
  

}));

const Activity = (props) => {
  const { likedByList, viewProfileList, blockList, handleLike, handleDeblock, likeList, handleDislike } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justify="center">
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="You blocked" {...a11yProps(0)} />
        <Tab label="You like" {...a11yProps(1)} />
        <Tab label="You're liked by" {...a11yProps(2)} />
        <Tab label="Profile views" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <List >
          {/* <Typography component="h1" variant="h4" align="center" color='primary'>
         You blocked
     </Typography> */}
          {blockList.isUsers === true && blockList.users.map((value) => (
            <ListItem key={value.id} button>
              {/* <ListItemAvatar>
            <Avatar
            className={classes.large}
              alt='Avatar'
              src={`http://localhost:3001/images/${value.profilePic}`}
            />
          </ListItemAvatar> */}
              <ListItemText className={classes.margiin}  id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
              <ListItemSecondaryAction>
                <Tooltip title="Unblock"><IconButton aria-label="unblock" onClick={(e) => handleDeblock(value.id)}>
                  <BlockIcon color="secondary" />
                </IconButton></Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List >
          {likeList.isUsers === true && likeList.users.map((value) => (
            <ListItem key={value.id} button>
              {/* <ListItemAvatar>
               <Avatar
               className={classes.large}
                 alt='Avatar'
                 src={`http://localhost:3001/images/${value.profilePic}`}
               />
             </ListItemAvatar> */}
              <ListItemText className={classes.margiin} id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
              <ListItemSecondaryAction >
                {value.like === 'iLike' &&
                  <Tooltip title="Unlike"><IconButton aria-label="Unlike" onClick={(e) => handleDislike(value.id)}>
                    <FavoriteIcon color="secondary" />
                  </IconButton></Tooltip>
                }
                {value.like === 'match' &&
                  <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                    <SupervisedUserCircleRoundedIcon color="primary" />
                  </IconButton></Tooltip>
                }
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List >
          {likedByList.isUsers === true && likedByList.users.map((value) => (
            <ListItem key={value.id} button>
              {/* <ListItemAvatar>
               <Avatar
               className={classes.large}
                 alt='Avatar'
                 src={`http://localhost:3001/images/${value.profilePic}`}
               />
             </ListItemAvatar> */}
              <ListItemText  className={classes.margiin} id={value.id} >{value.firstname + ' ' + value.lastname}</ListItemText>
              <ListItemSecondaryAction>
                {value.like === 'heLiked' &&
                  <Tooltip title="Like back"><IconButton aria-label="Like back" onClick={(e) => handleLike(value.id)}>
                    <SupervisedUserCircleOutlinedIcon color="primary" />
                  </IconButton></Tooltip>
                }
                {value.like === 'match' &&
                  <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                    <SupervisedUserCircleRoundedIcon color="primary" />
                  </IconButton></Tooltip>
                }
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <List>
          {viewProfileList.isUsers === true && viewProfileList.users.map((value) => (
            <ListItem key={value.id} button>
              {/* <ListItemAvatar>
               <Avatar
               className={classes.large}
                 alt='Avatar'
                 src={`http://localhost:3001/images/${value.profilePic}`}
               />
             </ListItemAvatar> */}
              <ListItemText className={classes.margiin}  id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
              <ListItemSecondaryAction>
                {value.like === null &&
                  <Tooltip title="Like"><IconButton aria-label="Like" onClick={(e) => handleLike(value.id)}>
                    <FavoriteBorderIcon color="secondary" />
                  </IconButton></Tooltip>
                }
                {value.like === 'iLike' &&
                  <Tooltip title="Unlike"><IconButton aria-label="Unlike" onClick={(e) => handleDislike(value.id)}>
                    <FavoriteIcon color="secondary" />
                  </IconButton></Tooltip>
                }
                {value.like === 'heLiked' &&
                  <Tooltip title="Like back"><IconButton aria-label="Like back" onClick={(e) => handleLike(value.id)}>
                    <SupervisedUserCircleOutlinedIcon color="primary" />
                  </IconButton></Tooltip>
                }
                {value.like === 'match' &&
                  <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                    <SupervisedUserCircleRoundedIcon color="primary" />
                  </IconButton></Tooltip>
                }
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </TabPanel>
    </Grid>);
}
export default Activity;
