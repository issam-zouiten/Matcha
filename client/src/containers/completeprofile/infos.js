import infos from '../../components/completeprofile/infos';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { createTag, step1info } from '../../actions/InfosAction';
import Age from '../../components/commun/age';

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'firstname',
        'lastname',
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
        errors.date_birthday = "Come back when you're 18"
    if (age > 120)
        errors.date_birthday = 'Invalid age !'
    return errors;
}

const mapStateToProps = (state) => (
    {
        'values': state.form.values,
        'selectTags': state.addInfo.selectTags,
        'selectLoading': state.addInfo.selectLoading,
        'selectError': state.addInfo.error,
        'user': state.user,
    });
const mapDispatchToProps = {
    "step1info": step1info,
    "createTag": createTag,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,

    "handleSubmit": otherProps.handleSubmit((values) => {
        dispatchProps.step1info(values, stateProps.user.id);
    }),

});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(infos);

let AddInfoContainer = reduxForm({
    form: "addInfo",
    validate,
})(connectedAddInfoContainer);

AddInfoContainer = connect(
    state => ({
        initialValues: {
            firstname: state.user.firstname,
            lastname: state.user.lastname,
            gender: state.user.gender,
            Sexual_orientation: state.user.Sexual_orientation,
            date_birthday: state.user.date_birthday,
            biography: state.user.biography,
            tags: state.user.tags,
        },
    }),
)(AddInfoContainer);

export default AddInfoContainer;