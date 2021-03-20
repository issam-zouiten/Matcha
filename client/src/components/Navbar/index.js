import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import * as Core from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import clsx from 'clsx';
import logo from '../../image/logo.png';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Link} from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((prop) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...prop}
    />
));

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    containeer: {
        display: 'relative',
        marginBottom: theme.spacing(10),
    },
    appBar: {
        backgroundColor: "#FFFFFF",
        height: "60px"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        height: "60px"
    },
    menuButton: {
        magrin: "0px",
        padding: "0px",
        color: "#174F70",
    },
    drawerPaper: {
        width: drawerWidth,
    },
    hide: {
        magrin: "0px",
        padding: "0px",
        display: 'none',
    },
    avatar: {
        marginLeft: "5%",
    },
    notif: {
        color: "#174F70",
        marginLeft: "auto",
        marginRight: '0',
    },
    logout: {
        backgroundColor: "#174F70",
        color: "#FFF"
    },
    username: {
        color: "#174F70",
        margin: "0",
        marginLeft: "0.5%",
        padding: "0",
        fontSize: "20px"
    },
    drawer: {
        width: '200',
        flexShrink: 0,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    logo: {
        height: "60px",
        width: "60px",
        marginLeft: "0",
        marginTop: "5px"
    },
    sidebaricon: {
        color: "#11878D",
    },
    sidebartext: {
        color: "#174F70",
    },
    menuItem: {
        color: "#11878D",
    }
}));
const Navbar = (props) => {
    const { user, unseenNotif, handleNotifListOpen, handleLogout } = props;
    const classes = useStyles();
    const [sidebar] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleCloseMenutwo = () => {
        handleLogout();
        setAnchorEl(null);
    };
    const sidebarmenu = [
        { "text": "Browse", "path": "/Browser", icon: <Icons.Apps /> },
        { "text": "Search", "path": "/search", icon: <Icons.Search /> },
        { "text": "Profile", "path": "/userprofile", icon: <Icons.Person /> },
        { "text": "Activity", "path": "/activity", icon: <Icons.History /> },
        { "text": "Friends", "path": "/chat", icon: <Icons.Chat /> },
    ];
    return (
        <Core.Grid container item sm={12} className={classes.containeer} >
            <Core.AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: sidebar })}>
                <Core.Toolbar>

                    <Core.Typography variant="h6" color="primary" className={classes.title}>
                        <Core.Link href="/Browser" style={{ textDecoration: 'none', color: 'inherit' }}><img className={classes.logo} alt="." src={logo} /></Core.Link>
                    </Core.Typography>
                    {user && user.token && <Core.Button edge="end" onClick={handleNotifListOpen} color="primary" className={classes.notif}>
                        <Core.Badge badgeContent={unseenNotif} color="secondary">
                            <Icons.NotificationsNone />
                        </Core.Badge>
                    </Core.Button>}
                    {user && user.token && 
                        <Core.Typography variant="h6" color="primary" className={classes.title}>
                            {user.username}
                        </Core.Typography>}
                        {user && <Core.Button className={classes.username}  onClick={handleOpenMenu}>
                        <Core.Avatar className={classes.avatar}
                            alt="User Image"
                        />
                    </Core.Button>}
                    {/* <Core.Button color="primary">Logout</Core.Button> */}
                </Core.Toolbar>
            </Core.AppBar>
            {user && user.token && <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}>
                <Core.List>
                    {sidebarmenu.map((item) => (
                        <Link to={item.path} style={{ textDecoration: 'none', color: '#174F70'}} key={item.text}>
                            <Core.ListItem button>
                                <Core.ListItemIcon>{item.icon}</Core.ListItemIcon>
                                <Core.ListItemText primary={item.text} />
                            </Core.ListItem>
                        </Link>
                    ))}
                </Core.List>
                <Core.ListItem button>
                    <ListItemIcon>
                        <Icons.ExitToApp fontSize="small" />
                    </ListItemIcon>
                    {user && user.token && <Core.ListItemText onClick={handleCloseMenutwo }>Logout</Core.ListItemText>}
                </Core.ListItem>
            </StyledMenu>}

        </Core.Grid>
    );
}
export default Navbar;