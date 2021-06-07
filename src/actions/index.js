export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_TO_MEM = "ADD_TO_MEM";
export const PULL_FROM_MEM = "PULL_FROM_MEM";

export const addOne = () => {
    return({type:ADD_ONE});
};

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
};

export const changeOperator = (operator) => {
  return({type:CHANGE_OPERATION, payload:operator});
};

export const clearDisplay = () => {
  return({type: CLEAR_DISPLAY});
};

export const addToMem = () => {
  return({type: ADD_TO_MEM});
};

export const pullFromMem = () => {
  return({type: PULL_FROM_MEM});
};
