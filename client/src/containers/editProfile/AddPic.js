import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Addpic from '../../containers/completeprofile/upload'
import {getPic} from '../../actions/uploadAction';

const AddPic = (props) => {
    const {user, getPic} = props;
    // console.log(getTags)
    useEffect(() => {
        if(user){
            getPic(user.id);
        }
    }, [getPic, user]);
    return (
        <div>
            <Addpic/>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});

const mapDispatchToProps = {
    "getPic": getPic,
};


export default connect(mapStateToProps, mapDispatchToProps)(AddPic);