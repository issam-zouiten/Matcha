import React , { useEffect } from 'react';
import Profile from '../../components/completeprofile/profile';
import { getPic } from '../../actions/uploadAction';
import { getTags, add_Location } from '../../actions/InfosAction';
import { connect } from "react-redux";

const StepInfo = (props) => {
    const { user, images, add_Location} = props;

    useEffect(() => {
        if(user){
            getPic(user.id);
            // console.log(images);
        }
    }, []);
   
    const handleNext = () => {
        add_Location({ lat: user.lat, lng: user.long });
    }
    return (
        <Profile handleNext={handleNext} user={user} images={images} />
    )
}

const mapStateToProps = (state) => (
    {
        "user": state.user,
        "images": state.images,
    });
const mapDispatchToProps = {
    "getPic": getPic,
    "getTags": getTags,
    "add_Location": add_Location,

};

export default connect(mapStateToProps, mapDispatchToProps)(StepInfo);