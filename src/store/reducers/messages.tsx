import * as actionTypes from "../actions/actionTypes";

const initialState: MessageState = {
  Messages: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint"
    }
  ]
};

const reducer = (
  state: MessageState = initialState,
  action: MessageAction
): MessageState => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      const newMessage: IMessage = {
        id: Math.random(), // not really unique but it's just an example
        title: action.Message.title,
        body: action.Message.body
      };
      return {
        ...state,
        Messages: state.Messages.concat(newMessage)
      };
    case actionTypes.REMOVE_MESSAGE:
      const updatedMessages: IMessage[] = state.Messages.filter(
        (Message) => Message.id !== action.Message.id
      );
      return {
        ...state,
        Messages: updatedMessages
      };
  }
  return state;
};

export default reducer;