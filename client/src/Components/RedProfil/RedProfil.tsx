import { useRef } from "react";

function RedProfil() {
  const btnFoto = useRef<HTMLInputElement>(null);
  const text = `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ut illum non! Natus saepe sapiente, mollitia facere pariatur, quisquam impedit ab voluptatibus maxime fugiat velit iure, quidem sequi voluptate rem.
  Saepe eveniet, quisquam ea nihil cumque aspernatur, nesciunt enim repellat, provident distinctio laudantium harum. Quod corporis iste ipsum! Pariatur nihil dolore, perferendis minus officiis itaque culpa adipisci aspernatur doloribus possimus!`;

  return (
    <div className="row profile">
      <div className="col-12 col-sm-4 col-md-3 col-lg-2">
        <div className="profile_avatar">
          <img src="https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg" />
          <div className="row">
            <button onClick={() => { btnFoto.current?.click() }} className="btn btn-outline-success">Изменить фотографию</button>
            <input ref={btnFoto} type={"file"} hidden />
          </div>
        </div>


      </div>

      <div className="col-12 col-sm-8 col-md-9 col-lg-10">
        <input className="m0 p1" value={"Иванов И.И. "} />
        <h5 className="m0 p1">Статус</h5>
        <textarea className="profile_status w-100 h-200 resize" value={text} />
        <label className="profile_date">
          Дата рождения:
          <input value="23.03.1994." />
          (25 лет)
        </label>
        <label>
          Пол:
          <select >
            <option >Не указан</option>
            <option >Мужской</option>
            <option >Женский</option>
          </select>
        </label>
        <div className="row justify-content-end">
          <button className="btn btn-outline-success">Сохранить</button>
        </div>


      </div>
    </div>
  );
}

export default RedProfil;
