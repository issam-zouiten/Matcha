import React, { useEffect } from 'react';
import {connect} from "react-redux";
import ViewProfile from '../../components/profile/viewprofile'
import {getTags} from '../../actions/InfosAction'
import {getPic} from '../../actions/uploadAction';

const ViewProfileContainer = (props) => {
    const {user,images, getPic, getTags} = props;
    // console.log(getTags)
    useEffect(() => {
        if(user){
            getPic(user.id);
            getTags();
        }
    }, [getPic, getTags, user]);
    return (
        <div>
            <ViewProfile user={user} images={images} tags={user.tags}/>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});

const mapDispatchToProps = {
    "getTags" : getTags,
    "getPic": getPic,
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileContainer);