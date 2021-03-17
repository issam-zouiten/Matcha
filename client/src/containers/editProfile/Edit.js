import Edit from '../../components/editProfile/Edit';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { createTag } from '../../actions/InfosAction';
import Age from '../../components/commun/age';
import { editInfo } from '../../actions/profileAction';
import { getTags } from '../../actions/InfosAction';

const EditInfo = (props) => {
    const {user, getTags} = props;
    useEffect(() => {
            getTags();
    }, [user, getTags]);
    return (
        <Edit
            handleSubmit={props.handleSubmit}
            selectLoading={props.selectLoading}
            selectTags={props.selectTags}
            selectError={props.selectError}
            createTag={props.createTag}
        />
    )
}
const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'firstname',
        'lastname',
        'username',
        'email',
        'gender',
        'Sexual_orientation',
        'date_birthday',
        'biography',
    ];
    const requiredArr = [
        'tags'
    ];
    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    requiredArr.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required !';
        }
    });

    if (values.date_birthday && !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(values.date_birthday))
        errors.date_birthday = 'Invalid date !';

    if (values.biography && !/^.{1,200}$/.test(values.biography))
        errors.biography = 'maximum 200 characters';

    const age = Age(values.date_birthday)
    if (age < 18)
        errors.date_birthday = "Come back when you're 18 ;)";
    if (age > 120)
        errors.date_birthday = 'Invalid age !';
    if (values.username && !/^[a-z0-9_-]{2,20}$/.test(values.username))
        errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address !";
    if (values.password && !/\d/.test(values.password))
        errors.password = "Password must contain a number !";
    else if (values.password && !/[A-Z]/.test(values.password))
        errors.password = "Password must contain an uppercase letter !";
    else if (values.password && !/[a-z]/.test(values.password))
        errors.password = "Password must contain a lowercase letter !";
    else if (values.password && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password))
        errors.password = "Password must contain a special character !";
    else if (values.password && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.password))
        errors.password = "Password must contain at least 8 characters !";
    if ('password' in values && !values.confirmPassword)
        errors.confirmPassword = "Required !";
    if (values.confirmPassword && values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords does not match !";
    return errors;
}

const mapStateToProps = (state) => (
    {
        selectTags: state.addInfo.selectTags,
        selectLoading: state.addInfo.selectLoading,
        selectError: state.addInfo.error,
        user: state.user,
    });
const mapDispatchToProps = {
    "editInfo": editInfo,
    "createTag": createTag,
    "getTags": getTags,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,

    "handleSubmit": otherProps.handleSubmit((values) => {
        dispatchProps.editInfo(values);
        delete values.password;
        delete values.confirmPassword;
    }),

});

const connectedEditInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditInfo);

let EditInfoContainer = reduxForm({
    form: "EditInfo",
    validate,
})(connectedEditInfoContainer);

EditInfoContainer = connect(
    state => ({
        initialValues: {
            firstname: state.user.firstname,
            lastname: state.user.lastname,
            username: state.user.username,
            email: state.user.email,
            gender: state.user.gender,
            Sexual_orientation: state.user.Sexual_orientation,
            date_birthday: state.user.date_birthday,
            biography: state.user.biography,
            tags: state.user.tags,
        },
    }),
)(EditInfoContainer);

export default EditInfoContainer;