import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Posts from "../Posts/Posts";

function Profil() {
  return (
    <div className="row profile">
      <div className="col-12 col-sm-4 col-md-3 col-lg-2">
        <div className="profile_avatar">
          <img src="https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg" />
          <Menu />
        </div>
      </div>

      <div className="col-12 col-sm-8 col-md-9 col-lg-10">
        <h3 className="m0 p1">Иванов И.И. (<Link to="/RedProfile" >Редактировать профиль</Link>)</h3>

        <h5 className="m0 p1">Статус</h5>
        <span className="profile_status">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ut illum non! Natus saepe sapiente, mollitia facere pariatur, quisquam impedit ab voluptatibus maxime fugiat velit iure, quidem sequi voluptate rem.
          Saepe eveniet, quisquam ea nihil cumque aspernatur, nesciunt enim repellat, provident distinctio laudantium harum. Quod corporis iste ipsum! Pariatur nihil dolore, perferendis minus officiis itaque culpa adipisci aspernatur doloribus possimus!
        </span>
        <span className="profile_date">{`Дата рождения: 23.03.1994. (25 лет)`}</span>
        <span className="profile_gender">{`Пол: женский`}</span>
        <Posts />
      </div>
    </div>
  );
}

export default Profil;
