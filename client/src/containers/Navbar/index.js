import React, {useState} from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import Nav from '../../components/Navbar';
import NotifList from "../../components/Notif/index";
import MyMenu from '../../components/commun/menu';
import {OpenNotif} from '../../actions/notifAction';

const NavBarContainer = (props) => {
    const {user,openNotif, notifList, handleLogout} = props;
    const [state, setState] = useState({
        open: false,
    });
    const handleNotifListOpen = (e) => {
        openNotif();
        setState({open: true, anchor: e.currentTarget});
    }
    const handleClose = () => {
        setState({open: false, anchor: null});
    }
    let i = 0;
    notifList && notifList.forEach(e => {
        if(e.seen === 0)
            i++;
    });
    return(
        <>
            <Nav unseenNotif={i} handleNotifListOpen={handleNotifListOpen} handleLogout={handleLogout} user={user}/>
            <MyMenu  state={state} handleClose={handleClose}>
                <NotifList notifList={notifList}/>
            </MyMenu>
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "notifList": state.notif.notifications,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
    "openNotif": OpenNotif,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 