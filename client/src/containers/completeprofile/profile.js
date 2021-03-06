import React, { useEffect } from 'react';
import Profile from '../../components/completeprofile/profile';
import {getPic} from '../../actions/uploadAction';
import {connect} from "react-redux";

const stepInfo = (props) => {
    const { user, images, getPic} = props;
    useEffect(() => {
        if(user){
          getPic(user.id);
        }
    }, []);
    return (
        <Profile user={user} images={images}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "getPic" : getPic,
};

export default connect(mapStateToProps, mapDispatchToProps)(stepInfo);