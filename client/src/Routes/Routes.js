import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../components/Browser';
import confirme from '../containers/emailConfirmation';
import NotFoundPage from '../NotFoundPage';
import ForgotPassword from '../containers/Forgot';


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/register" component={RegisterUser} />
                <Route exact path="/login" component={loginUser}/>
                <Route exact path="/Browser" component={Browser}/>
                <Route exact path="/confirme/:token" component={confirme}/>
                <Route exact path="/forgotPassword"  component={ForgotPassword}/>
                <Route exact path="/" component={loginUser}/>
                <Route exact path="" component={NotFoundPage}/>
            </Switch>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);