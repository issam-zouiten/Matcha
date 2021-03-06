import React, { useEffect } from 'react';
import Stepper from '../../components/completeprofile/profile';
import {add_Location} from '../../actions/InfosAction';
import {getPic} from '../../actions/uploadAction';
import {connect} from "react-redux";
import {decStepper, incStepper} from '../../actions/stepperAction';

const StepperContainer = (props) => {
    const { user, images, getPic, decStepper, incStepper, add_Location} = props;
    useEffect(() => {
        if(user){
          getPic(user.id);
        }
    }, []);
    const handleBack = () => {
        decStepper();
    }
    const handleNext = () => {
        if(user.complete === 2)
        add_Location({lat: user.lat, lng: user.long});
        incStepper();
    }
    return (
        <Stepper handleBack={handleBack} handleNext={handleNext} user={user} images={images}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "getPic" : getPic,
    "decStepper": decStepper,
    "incStepper": incStepper,
    "add_Location": add_Location,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);