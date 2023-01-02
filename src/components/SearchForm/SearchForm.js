import './SearchForm.css'

import Button from '../Button/Button'

export default function SearchForm ({ openLoginModal, openRegisterModal, logged, }) {
  return (
    <div className='search_container'>
      <form className="search__form">
        <input type="text" placeholder="Search Star Code" className="search__input" />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className="search__button"><ion-icon name="search-outline"></ion-icon></button>
      </form>
      
        logged.login ? {(
      
          <div className="button-group">
         
            <Button open={() => openRegisterModal(true)} text={'SIGN IN'} name={'login__button'} />
          </div>
        )
      }

    </div>
  )
}
