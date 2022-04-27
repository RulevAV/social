import Message from "./Message";

const Chat = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <div className="chat" >
    <div className="chat_header">
      <img src={src} />
      <h1>User1</h1>
    </div>
    <div className="chat_body">
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
    <div className="chat_futter ">
      <textarea className="col resize m1" />
      <button className="btn btn-success">Отправить</button>
    </div>
  </div>
}

export default Chat;