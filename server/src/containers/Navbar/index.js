import React from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import Nav from '../../components/Navbar';

const NavBarContainer = (props) => {
    const {user, handleLogout} = props;
    return(
            <Nav handleLogout={handleLogout} user={user}/>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
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
 