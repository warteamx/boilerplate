import * as actionTypes from "./actionTypes";

export function addMessage(Message: IMessage) {
  const action: MessageAction = {
    type: actionTypes.ADD_MESSAGE,
    Message
  };

  return simulateHttpRequest(action);
}

export function removeMessage(Message: IMessage) {
  const action: MessageAction = {
    type: actionTypes.REMOVE_MESSAGE,
    Message
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: MessageAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function simulateTESTHttpRequest(action: TestAction) {
  return (dispatch: DispatchTESTType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function toggleTest(testValue: ITest) {
  const action: TestAction = {
    type: actionTypes.TEST,
    value: testValue
  };

  return simulateTESTHttpRequest(action);
}