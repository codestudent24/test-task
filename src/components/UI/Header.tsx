import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/userSlice";

export const Header: FC = () => {
  const { firstName } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout())
  }

  return <>
    <header className='header'>
      <nav className='navbar'>
        <NavLink to={'/'}>На главную</NavLink>
        {firstName ? (
          <NavLink to={'/select-test'}>Тесты</NavLink>
        ) : (
          <NavLink to={'/auth'}><LoginIcon sx={{ position: 'relative', top: '6px' }}/> Войти</NavLink>
        )}
      </nav>
      <div>
        <span className='header__span'>Добро пожаловать, {firstName || 'гость'}!</span>
        {firstName && <NavLink to={'/auth'} onClick={handleLogout}><LogoutIcon /></NavLink>}
      </div>
    </header>
  </>
}