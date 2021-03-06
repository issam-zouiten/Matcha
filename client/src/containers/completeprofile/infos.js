import infos from '../../components/completeprofile/infos';
import {connect} from "react-redux";
import {step1_info} from '../../actions/InfosAction';
import {reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
      'firstname',
      'lastname',
      'username',
      'email',
  ];

  requiredFields.forEach(field => {
      if (!values[field] || !values[field].trim()) {
          errors[field] = 'Required !';
      }
  });

  if(values.username && !/^[a-z0-9_-]{2,20}$/.test(values.username))
      errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = "Invalid email address !";
  return errors;
}
const mapStateToProps = (state) => (
  {
      "form" : state.form,
      "status" : state.register.registerStatus,
      "err": state.register.error
  });

  const mapDispatchToProps = {
    "step1_info": step1_info
};

const mergeProps = (stateProps, dispatchProps, otherProps)=> ({
  ...stateProps,
  ...dispatchProps,
  ...otherProps,
  "handleSubmit" : otherProps.handleSubmit((form)=>{
      dispatchProps.step1_info(form);
  })
});
const connectedInfoContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(infos);

const InfosContainer = reduxForm({
  form : "infos",
  "destroyOnUnmount": true,  
  validate,
})(connectedInfoContainer);
export default InfosContainer;