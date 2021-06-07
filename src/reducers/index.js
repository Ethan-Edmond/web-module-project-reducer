import {
  ADD_ONE, ADD_DIGIT, ADD_TO_MEM, APPLY_NUMBER,
  CHANGE_OPERATION, CLEAR_DISPLAY, CLEAR_MEM,
  ENTER_DIGIT, PULL_FROM_MEM
} from './../actions';

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  workingNumber: ""
};

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
  switch(action.type) {
  case(ADD_ONE):
    return({
      ...state,
      total: state.total + 1
    });

  case(APPLY_NUMBER):
    return ({ 
      ...state, 
      total: calculateResult(state.total, action.payload, state.operation)
    });

  case(CHANGE_OPERATION):
    return ({
      ...state,
      operation: action.payload
    });

  case(CLEAR_DISPLAY):
    return ({
      ...state,
      total: 0,
      workingNumber: ""
    });

  case(ADD_TO_MEM):
    return ({
      ...state,
      memory: state.total
    });

  case(PULL_FROM_MEM):
    return ({
      ...state,
      total: state.memory
    });

  case(CLEAR_MEM):
    return ({
      ...state,
      memory: 0
    });

  case(ADD_DIGIT):
    return ({
      ...state,
      workingNumber: state.workingNumber + action.payload
    });

  case(ENTER_DIGIT):
    return ({
      ...state,
      total: calculateResult(state.total, Number(state.workingNumber), state.operation)
    });

  default:
    return state;
  }
}

export default reducer;
