import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menuUser">
      <li><Link to="/Correspondence" >Переписки</Link></li>
      <li>Музыка</li>
      <li>Видео</li>
      <li>Галерея</li>
      <li>Друзья</li>
    </ul>
  );
}

export default Menu;
