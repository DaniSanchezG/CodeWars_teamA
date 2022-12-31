import './SearchForm.css'

import Button from '../Button/Button'

export default function SearchForm ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className='search_container'>
      <form className="search__form">
        <input type="text" placeholder="Search Star Code" className="search__input" />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="search__button"><ion-icon name="search-outline"></ion-icon></button>
      </form>
      {
        logged.login ? (
          <div className="login__status">
            <div className="login__user">
              
            </div>
            <Button open={() => setLogged({ display: '', login: false })} text={'LOG OUT'} name={'login__button'} />
          </div>
        ) : (
          <div className="button-group">
         
            <Button open={() => openRegisterModal(true)} text={'SIGN IN'} name={'login__button'} />
          </div>
        )
      }

    </div>
  )
}
