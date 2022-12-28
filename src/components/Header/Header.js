
import logo from '../../assets/LOGO_CODE.png'
import './Header.css'
import Social from '../Social/Social'
import SearchForm from '../SearchForm/SearchForm'
import NavMobile from '../NavMobile/Burger'

export default function Header ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className="container">
      <header className="header">
      <NavMobile />
        <Social />
       <a href="/">
          <img src={logo} alt="Star Code" className="header__logo" />
        </a>
        <SearchForm openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} logged={logged} setLogged={setLogged} />
      </header>
    </div>

  )
}
