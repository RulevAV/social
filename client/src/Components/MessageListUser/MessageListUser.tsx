import { Link } from "react-router-dom"

const MessageListUser = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <ul className="MessageListUser MessageListUser-sm-hiden ">
    <li><img className="MessageListUser_avatar" src={src} />User1</li>
    <li><img className="MessageListUser_avatar" src={src} />User1</li>
    <li><img className="MessageListUser_avatar" src={src} />User1</li>
    <li><img className="MessageListUser_avatar" src={src} />User1</li>
    <li><img className="MessageListUser_avatar" src={src} />User1</li>
  </ul>
}

export default MessageListUser;