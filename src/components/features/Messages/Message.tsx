import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  Message: IMessage;
  removeMessage: (Message: IMessage) => void;
};

export const Message: React.FC<Props> = ({ Message, removeMessage }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteMessage = React.useCallback(
    (Message: IMessage) => dispatch(removeMessage(Message)),
    [dispatch, removeMessage]
  );

  return (
    <div className="Message">
      <div>
        <h1>{Message.title}</h1>
        <p>{Message.body}</p>
      </div>
      <button onClick={() => deleteMessage(Message)}>Delete</button>
    </div>
  );
};
