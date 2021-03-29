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
import CancelIcon from '@material-ui/icons/Cancel';
import BlockIcon from '@material-ui/icons/Block';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import * as Core from "@material-ui/core";
import LoyaltyIcon from '@material-ui/icons/Loyalty';

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
      {value === index && <Box style={{color:'#FFF'}} p={3}>{children}</Box>}
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
    id: `horizontal-tab-${index}`,
    'aria-controls': `horizontal-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width:640,
    height:500,
    justifyContent: 'center',
    border: "1px solid #D7D4D3",
    borderRadius: '8px',
    marginTop: '125px',
    background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
  },

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
    width: 800,
  },
  margiin: {
    width: 200,
  },
  tabs: {
    width:'100%',
  },
  tab: {
    [theme.breakpoints.down(425 + theme.spacing(2) * 2)]: {
      width:'25%',
    },
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
    <Grid container 
    justify="center"
    alignItems='center'
    // style={{height:'100%'}}

    >
      <Core.Paper
        className={classes.paper} elevation={10}>
        <Grid container item>
          <Tabs
            orientation="horizontal"
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            style={{backgroundColor:'#FFF', borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}
          >
            <Tab className={classes.tab} label="You blocked" {...a11yProps(0)} />
            <Tab className={classes.tab} label="You like" {...a11yProps(1)} />
            <Tab className={classes.tab} label="You're liked by" {...a11yProps(2)} />
            <Tab className={classes.tab} label="Profile views" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <List >
              {blockList.isUsers === true && blockList.users.map((value) => (
                <ListItem key={value.id} button >
                  <ListItemText className={classes.margiin} id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
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
               
                  <ListItemText className={classes.margiin} id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
                  <ListItemSecondaryAction >
                    {value.like === 'iLike' &&
                      <Tooltip title="Unlike"><IconButton aria-label="Unlike" onClick={(e) => handleDislike(value.id)}>
                        <FavoriteIcon color="secondary" />
                      </IconButton></Tooltip>
                    }
                    {value.like === 'match' &&
                      <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                        <CancelIcon style={{color: '#FFF'}}  />
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
                  <ListItemText className={classes.margiin} id={value.id} >{value.firstname + ' ' + value.lastname}</ListItemText>
                  <ListItemSecondaryAction>
                    {value.like === 'heLiked' &&
                      <Tooltip title="Like back"><IconButton aria-label="Like back" onClick={(e) => handleLike(value.id)}>
                        <LoyaltyIcon style={{color: '#FFF'}} />
                      </IconButton></Tooltip>
                    }
                    {value.like === 'match' &&
                      <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                        <CancelIcon style={{color: '#FFF'}}  />
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
                  <ListItemText className={classes.margiin} id={value.id} >{value.firstname + '  ' + value.lastname}</ListItemText>
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
                        <LoyaltyIcon style={{color: '#FFF'}} />
                      </IconButton></Tooltip>
                    }
                    {value.like === 'match' &&
                      <Tooltip title="Unmatch"><IconButton aria-label="Unmatch" onClick={(e) => handleDislike(value.id)}>
                        <CancelIcon style={{color: '#FFF'}}  />
                      </IconButton></Tooltip>
                    }
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </TabPanel>
        </Grid>
      </Core.Paper>
    </Grid>

  )
}
export default Activity;