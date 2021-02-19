import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterContainer from '../containers/Register';
import NotFoundPage from '../components/NotFoundPage';


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/register"  component={RegisterContainer} />
                <Route path="" component={NotFoundPage}/>
            </Switch>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);