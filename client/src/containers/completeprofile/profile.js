import React, { useEffect } from 'react';
import Profile from '../../components/completeprofile/profile';
import { getTags, add_Location } from '../../actions/InfosAction';
import { getPic } from '../../actions/uploadAction';
import { connect } from "react-redux";
import { decStep, incStep } from '../../actions/stepAction';

const StepInfo = (props) => {
    const { user, images, getPic, getTags, decStep, incStep, add_Location } = props;
    useEffect(() => {
        if (user) {
            getPic(user.id);
            getTags();
        }
    }, [getTags, user, getPic]);

    const handleBack = () => {
        decStep();
    }
    const handleNext = () => {
        if (user.step === 2)
            add_Location({ lat: user.lat, lng: user.lng });
        incStep();
    }
    return (
        <Profile handleBack={handleBack} handleNext={handleNext} user={user} images={images} />
    )
}

const mapStateToProps = (state) => (
    {
        "user": state.user,
        "images": state.images,
    });
const mapDispatchToProps = {
    "getTags": getTags,
    "getPic": getPic,
    "decStep": decStep,
    "incStep": incStep,
    "add_Location": add_Location,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepInfo);