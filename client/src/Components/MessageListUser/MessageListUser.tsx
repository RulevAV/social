import { Link } from "react-router-dom";

const MessageListUser = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <ul className="messageListUser messageListUser-sm-hiden ">
    <li> <Link to='/Messages' className="flex align-items-center">
      <img className="messageListUser_avatar" src={src} />User1
    </Link></li>

    <li> <Link to='/Messages' className="flex align-items-center">
      <img className="messageListUser_avatar" src={src} />User1
    </Link></li>

    <li> <Link to='/Messages' className="flex align-items-center">
      <img className="messageListUser_avatar" src={src} />User1
    </Link></li>

    <li> <Link to='/Messages' className="flex align-items-center">
      <img className="messageListUser_avatar" src={src} />User1
    </Link></li>

  </ul>
}

export default MessageListUser;