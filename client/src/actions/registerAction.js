export const REGISTER_USER = "REFISTER_USER";
export const REGISTER_USER_SUCCESS = "REFISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REFISTER_USER_ERROR";
export const EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION";
export const EMAIL_CONFIRMATION_SUCCESS = "EMAIL_CONFIRMATION_SUCCESS";
export const EMAIL_CONFIRMATION_ERROR = "EMAIL_CONFIRMATION_ERROR";

export const RegisterAction = (dataInsc) => ({
  "type": REGISTER_USER,
  "data": dataInsc
});

export const RegisterUserSuccess = (data) => ({
    "type": REGISTER_USER_SUCCESS,
    data
});

export const RegisterError = (error) => ({
    "type": REGISTER_USER_ERROR,
    error
});

export const EmailConfirmation = (token) => ({
  "type": EMAIL_CONFIRMATION,
  'token': token
});

export const EmailConfirmationSuccess = () => ({
    "type": EMAIL_CONFIRMATION_SUCCESS,
});

export const EmailConfirmationError = () => ({
    "type": EMAIL_CONFIRMATION_ERROR,
});