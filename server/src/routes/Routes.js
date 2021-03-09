import React from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../components/Browser';
import confirme from '../containers/emailConfirmation';
import NotFoundPage from '../NotFoundPage';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';
import Profile from '../containers/completeprofile/profile';


const Routes = (props) => {
    const {user} = props;
    return (
            <Switch>
                <Route exact path="/register" component={user === null ? RegisterUser  : Browser} />
                <Route exact path="/login" component={user === null ? loginUser  : Browser} />
                <Route exact path="/Browser" component={user === null ? loginUser : Browser} />
                <Route exact path="/profile" component={user === null ? loginUser : Profile }/>
                <Route exact path="/confirme/:token" component={user === null ? confirme  : Browser} />
                <Route exact path="/resetPassword/:token" component={user === null ? ResetPassword  : Browser} />
                <Route exact path="/forgotPassword" component={user === null ? ForgotPassword  : Browser} />
                <Route exact path="/" component={user === null ? loginUser  : Browser} />
                <Route exact path="" component={NotFoundPage} />
            </Switch>
    )
}
const mapStateToProps = (state) => (
    {
        'user': state.user,
    });
export default connect(mapStateToProps)(Routes);