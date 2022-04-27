import { Link } from "react-router-dom";

const ItemUser = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <li>
    <Link to='/Messages' className="flex align-items-center">
      <img className="correspondence_avatar" src={src} />User1
    </Link>
  </li>

}

export default ItemUser;