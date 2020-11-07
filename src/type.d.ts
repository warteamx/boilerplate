interface State {
messages: MessageState,
test: ITest
}

interface IMessage {
    id: number;
    title: string;
    body: string;
  }

  type MessageState = {
    Messages: IMessage[];
  };
  
  type MessageAction = {
    type: string;
    Message: IMessage;
  };
  
  type DispatchType = (args: MessageAction) => MessageAction;


  interface ITest {
    value: boolean;
  }

  // type TestStatus = {
  //   testValue: ITest;
  // };
  
  type TestAction = {
    type: string;
    value: ITest;
  };
  
  type DispatchTESTType = (args: TestAction) => TestAction;
