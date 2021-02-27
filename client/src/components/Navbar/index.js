import React from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import * as Core from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import clsx from 'clsx';
import logo from '../../image/logo.png';

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    container:{
        display: 'relative',
        marginBottom: theme.spacing(10),
    },
    appBar: {
        backgroundColor:"#FFFFFF",
        height:"60px"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        height:"60px"
      },
    menuButton: {
        magrin:"0px",
        padding:"0px",
        color:"#174f70",
    },
    drawerPaper: {
        width: drawerWidth,
      },
    hide: {
        magrin:"0px",
        padding:"0px",
        display: 'none',
    },
    avatar:{
        marginLeft: "5%",
    },
    notif: {
        color:"#174f70",
        marginLeft: "auto",
        marginRight: '0',
    },
    logout:{
        color:"#174f70",
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
    logo:{
        height:"60px",
        width:"60px",
        marginLeft:"0",
        marginTop:"5px"
    },
    sidebaricon:{
        color:"#11878d",
    },
    sidebartext:{
        color:"#174f70",
    },
    menuItem:{
        color:"#11878d",
    }
}));

const Navbar=() => {
    const classes = useStyles();
    const theme = useTheme();
    const [sidebar, setSidebar] = React.useState(false);
    const [ anchorEl, setanchorEl] = React.useState(null);

    const handleOpenMenu = (e) => {
        setanchorEl(e.currentTarget);
      };
    
      const handleCloseMenu = () => {
        setanchorEl(null);
      };

    const sidebarmenu = [
        {"text" : "Browse","path" : "/browse", icon: <Icons.Apps/>},
        {"text" : "Search","path" : "/search", icon: <Icons.Search />},
        {"text" : "Profile","path" : "/profile", icon: <Icons.Person/>},
        {"text" : "Activity","path" : "/activity", icon: <Icons.History/>},
        {"text" : "Friends","path" : "/chat", icon: <Icons.Chat/>},
    ];

    const showSidebar = () => {
        setSidebar(!sidebar);
      };

    const hideSidebar = () => {
        setSidebar(false);
    }

    return(
        <Core.Grid container item sm={12} className={classes.container} >
            <Core.AppBar  position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: sidebar,})}>
                <Core.Toolbar>
                    <Core.IconButton edge="start" onClick={showSidebar} className={clsx(classes.menuButton, sidebar && classes.hide)}>
                        <Icons.Menu className={classes.menu2}/>
                    </Core.IconButton>
                        <Core.Typography  variant="h6"  color="primary" className={classes.title}>
                            <Core.Link href="#" style={{textDecoration: 'none', color:'inherit'}}><img className={classes.logo} alt="." src={logo}/></Core.Link>
                        </Core.Typography>
                        <Core.IconButton edge="end" color="primary" className={classes.notif}>
                            <Core.Badge>
                                <Icons.NotificationsNone/>
                            </Core.Badge>
                        </Core.IconButton>
                        <Core.IconButton className={classes.logout} onClick={handleOpenMenu}>
                            Username
                            <Core.Avatar className={classes.avatar}
                            alt="User Image"
                            />
                         </Core.IconButton>
                </Core.Toolbar>
            </Core.AppBar>
            <Core.Drawer
                className={classes.drawer}
                anchor="left"
                open={sidebar}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
             >
            <div className={classes.drawerHeader}>
                <Core.IconButton onClick={hideSidebar}>
                    {theme.direction === 'ltr' ? <Icons.ChevronLeft color="primary"/> : <Icons.ChevronRight/>}
                </Core.IconButton>
            </div>
                <Core.Divider />
                    <Core.List>
                        {sidebarmenu.map((item) => (
                        <Core.ListItem button key={item.text}>
                        <Core.ListItemIcon className={classes.sidebaricon}>{item.icon}</Core.ListItemIcon>
                        <Core.ListItemText className={classes.sidebartext} primary={item.text} />
                        </Core.ListItem>
                        ))}
                    </Core.List>
                <Core.Divider />
            </Core.Drawer>
            <Core.Menu
                id="menu"
                className="navMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Core.MenuItem className={classes.menuItem}>
                    <Icons.AccountCircle/>
                    Profile
                </Core.MenuItem>
                <Core.Divider className="divider" light />
                <Core.MenuItem className={classes.menuItem}>
                <Icons.ExitToApp />
                    Logout
                </Core.MenuItem>
            </Core.Menu>
        </Core.Grid>
    );
}
export default Navbar;