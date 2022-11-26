import useUserContext from './useUserContext';

export default function useLogout() {
  const userContext = useUserContext();
  const logout = () => {
    userContext.dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    document.cookie =
      'token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };
  return { logout };
}
