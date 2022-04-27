import Header from "./Header";
import Message from "./Message";

const Chat = () => {
  return <div className="Chat" >
    <Header />
    <div className="Chat_stand">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
    <div className="Chat_input row">
      <textarea className="col resize" />
      <button className="btn btn-success">Отправить</button>
    </div>
  </div>
}

export default Chat;