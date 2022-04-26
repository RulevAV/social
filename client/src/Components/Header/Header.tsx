import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg'

function Header() {
  return (
    <header className='header' >
      <a href="/" className="header-logo">
        <Logo className="header__logo" width={50} height={50} fill="green" />
      </a>

      <ul className="header-nav menu__nav">
        <li><Link to="/" >Главная</Link></li>
        <li><Link to="/Profile" >Профиль</Link></li>
      </ul>

      <div className='menu__nav'>
        <button className='btn btn-outline-success'>Войти</button>
      </div>

      <input id="menu__toggle" type="checkbox" className='menu__toggle' />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li><a className="menu__item" href="#">Главная</a></li>
        <li><a className="menu__item" href="#">Проекты</a></li>
        <li><a className="menu__item" href="#">Команда</a></li>
        <li><a className="menu__item" href="#">Блог</a></li>
        <li><a className="menu__item" href="#">Контакты</a></li>
        <li>  <button className='btn btn-outline-success'>Войти</button></li>
      </ul>
    </header>
  );
}

export default Header;
