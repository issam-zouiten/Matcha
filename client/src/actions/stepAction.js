export const INC_STEP = "INC_STEP";
export const DEC_STEP = "DEC_STEP";
export const INC_STEP_SUCCESS= "INC_STEP_SUCCESS";

export const incStep= () => ({
  "type": INC_STEP
});

export const decStep = () => ({
    "type": DEC_STEP,
});
export const incStepSuccess = () => ({
  "type": INC_STEP_SUCCESS,
});