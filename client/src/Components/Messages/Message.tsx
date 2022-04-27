import React from "react";
import MessageListUser from "../MessageListUser/MessageListUser";
import Chat from "./Chat/Chat";

type PropsType = {
  children: React.ReactNode
}

const Messages: React.FC = () => {
  return (
    <div className='row'>
      <div className='col-sm-3 col-md-2'>
        <MessageListUser />
      </div>

      <div className='col-12 col-sm-9 col-md-10'>
        <Chat />
      </div>
    </div>
  );
}

export default Messages;