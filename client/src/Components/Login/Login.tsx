import { Link } from "react-router-dom";

const Login = () => {
  return <div className="body flex justify-content-center align-items-center">
    <div className="login">
      Login
      <div className="m1 row justify-content-between">
        <label>Логин
        </label>
        <input className="col-12" />
      </div>

      <span className="m1 text-danger">asdsfd</span>

      <div className=" m1 row justify-content-between">
        <label>Пароль
        </label>
        <input className="col-12" />
      </div>

      <span className="m1 text-danger">asdsfd</span>

      <div className="row align-items-center justify-content-between">
        <Link to="/Register">Регистрация</Link><button className="btn btn-success">Войти</button>
      </div>

    </div>
  </div >
}

export default Login;