import { Link } from "react-router-dom";

const ItemUser = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <div className="row">
    <Link to='/Messages' className="flex align-items-center">
      <img className="correspondence_avatar" src={src} />User1
    </Link>
  </div>
}

export default ItemUser;