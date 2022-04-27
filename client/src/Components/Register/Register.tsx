import { Link } from "react-router-dom";

const Register = () => {
  return <div className="body flex justify-content-center align-items-center">
    <div className="login">
      Register
      <div className="m1 row ">
        <label>Логин
        </label>
        <input className="col-12" />
      </div>

      <span className="m1 text-danger">asdsfd</span>

      <div className=" m1 row">
        <label>Пароль
        </label>
        <input className="col-12" />
      </div>

      <span className="m1 text-danger">asdsfd</span>

      <div className=" m1 row ">
        <label>Повтарите пароль
        </label>
        <input className="col-12" />
      </div>

      <span className="m1 text-danger">asdsfd</span>

      <div className="row align-items-center justify-content-between">
        <Link to="/Login">Логин</Link>
        <button className="btn btn-success">Зарегистрироваться</button>
      </div>

    </div>
  </div >
}

export default Register;