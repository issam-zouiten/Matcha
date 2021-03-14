import React, { Component } from 'react';
import Maps from '../../components/completeprofile/localisation';
import {connect} from "react-redux";
import {get_location, add_LocationSuccess} from '../../actions/InfosAction';

class MapsContainer extends Component{
    componentDidMount(){
        this.props.get_location();
    }

    render(){
        const userLocation = {lat: this.props.user.lat, lng: this.props.user.lng}
        const setLocation = ({lat, lng}) => {
            const marker = true;
            this.props.add_LocationSuccess({marker, lat, lng});
        }
        const handleSubmit = () => {
            this.props.add_LocationSuccess({lat: this.props.user.lat, lng: this.props.user.lng});
        }
        if(!this.props.user.lat && !this.props.user.lng)
            return null;
        return (
            <Maps isMarker={this.props.user.marker} setLocation={setLocation} userL={userLocation} handleSubmit={handleSubmit}/>
        )
    }
}

const mapStateToProps = (state) => (
{
    user: state.user,
});
const mapDispatchToProps = {
    get_location: get_location,
    add_LocationSuccess: add_LocationSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);