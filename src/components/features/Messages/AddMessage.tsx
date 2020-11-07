import * as React from "react";

type Props = {
  saveMessage: (Message: IMessage | any) => void;
};

export const AddMessage: React.FC<Props> = ({ saveMessage }) => {
  const [Message, setMessage] = React.useState<IMessage | {}>();

  const handleMessageData = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage({
      ...Message,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const addNewMessage = (e: React.FormEvent) => {
    e.preventDefault();
    saveMessage(Message);
  };

  return (
    <form onSubmit={addNewMessage} className="Add-Message">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleMessageData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleMessageData}
      />
      <button disabled={Message === undefined ? true : false}>
        Add Message
      </button>
    </form>
  );
};
