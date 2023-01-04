import classes from './SearchForm.module.css'

import Button from '../Button/Button'
import LoginForm from '../LoginForm/LoginForm'

// export default function SearchForm ({ openLoginModal, openRegisterModal, logged, }) {
export default function SearchForm () {
  return (
    <div className={classes["search_container"]}>
      <form className={classes["search__form"]}>
        <input type="text" placeholder="Search Star Code" className={classes["search__input"]} />
        <button arial-label="search-icon" onClick={(e) => e.preventDefault()} className={classes["search__button"]}><ion-icon name="search-outline"></ion-icon></button>
      </form>
      
        {(
      
          <div className={classes["button-group"]}>
            <LoginForm />
            {/* <Button open={() => openRegisterModal(true)} text={'SIGN IN'} name={'login__button'} /> */}
          </div>
        )
      }

    </div>
  )
}
