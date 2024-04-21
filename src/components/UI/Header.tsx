import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export const Header: FC = () => {
  const { firstName } = useAppSelector(state => state.user)
  console.log('rendered', firstName)

  return <>
    <header className='header'>
      <nav className='navbar'>
        <NavLink to={'/'}>На главную</NavLink>
        <NavLink to={'/auth'}>Войти</NavLink>
      </nav>
      <span className='header__span'>Добро пожаловать, {firstName || 'гость'}!</span>
    </header>
  </>
}