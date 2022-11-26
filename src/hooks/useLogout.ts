import useUserContext from './useUserContext';

export default function useLogout() {
  const userContext = useUserContext();
  const logout = () => {
    userContext.dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    document.cookie = 'token' + '=; Path=/';
  };
  return { logout };
}
