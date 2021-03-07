import React, { Component } from 'react';
import Maps from '../../components/completeprofile/localisation';
import {connect} from "react-redux";
import {get_location, add_LocationSuccess} from '../../actions/InfosAction';

class MapsContainer extends Component{
    componentDidMount(){
        this.props.get_location();
    }
    render(){
        const userLocation = {latitude: this.props.user.latitude, longitude: this.props.user.longitude}
        const setLocation = ({latitude, longitude}) => {
            const marker = true;
            this.props.add_LocationSuccess({marker, latitude, longitude});
        }
        const handleSubmit = () => {
            this.props.add_Location({latitude: this.props.user.latitude, longitude: this.props.user.longitude});
        }
        if(!this.props.user.latitude)
            return null;
        return (
            <Maps isMarker={this.props.user.marker} setLocation={setLocation} userL={userLocation} handleSubmit={handleSubmit}/>
        )
    }
}

const mapStateToProps = (state) => (
{
    "user": state.user,
});
const mapDispatchToProps = {
    "get_location": get_location,
    "add_LocationSuccess": add_LocationSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);