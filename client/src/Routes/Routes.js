import React from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../containers/Browse';
import userprofile from '../containers/profile/viewprofile';
import confirme from '../containers/emailConfirmation';
import NotFoundPage from '../NotFoundPage';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';
import Profile from '../containers/completeprofile/profile';
import EditProfile from '../containers/editProfile/Edit';
import AddPic from '../containers/editProfile/AddPic';
import Chat from '../containers/Chat';
import Activity from '../containers/Activity';


const Routes = (props) => {
    const {user} = props;
    return (
            <Switch>
                <Route exact path="/register" component={user === null ? RegisterUser  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/login" component={user === null ? loginUser  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/Browser" component={user === null ? loginUser : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/profile" component={user === null ? loginUser : (user.step === 3 ? Browser : Profile) }/>
                <Route exact path="/AddPic" component={user === null ? loginUser : (user.step === 3 ? AddPic : Profile) }/>
                <Route exact path="/userprofile" component={user === null ? loginUser : (user.step === 3 ? userprofile : Profile) }/>
                <Route exact path="/confirme/:token" component={user === null ? confirme  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/resetPassword/:token" component={user === null ? ResetPassword  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/chat" component={user !== null  ? (user.step === 3 ? Chat : Profile) : loginUser }/> 
                <Route exact path="/forgotPassword" component={user === null ? ForgotPassword  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="/edit_profile" component={user === null ? loginUser  : (user.step === 3 ? EditProfile : Profile)} />
                <Route exact path="/Activity" component={user === null ? loginUser  : (user.step === 3 ? Activity : Profile)} />
                <Route exact path="/" component={user === null ? loginUser  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="" component={NotFoundPage} />
            </Switch>
    )
}
const mapStateToProps = (state) => (
    {
        'user': state.user,
    });
export default connect(mapStateToProps)(Routes);