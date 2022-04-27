import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="MenuUser">
      <li><Link to="/Messages" >Сообщения</Link></li>
      <li>Музыка</li>
      <li>Видео</li>
      <li>Галерея</li>
      <li>Друзья</li>
    </ul>
  );
}

export default Menu;
