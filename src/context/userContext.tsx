import { createContext, useReducer, useEffect } from 'react';

type ActionType = { type: 'LOGIN'; payload: UserType } | { type: 'LOGOUT' };

interface UserType {
  email: string;
  displayName: string;
  _id: string;
}

interface UserContextInterface {
  user: UserType | null;
  dispatch: (action: ActionType) => void;
}

export const UserContext = createContext<UserContextInterface>({
  user: {
    email: '',
    displayName: '',
    _id: '',
  },
  dispatch: () => {},
});

export const userReducer = (
  state: { user: UserType | null },
  action: ActionType
) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

interface UserContextProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  useEffect(() => {
    const userState = JSON.parse(`${localStorage.getItem('user')}`);

    if (userState) {
      dispatch({
        type: 'LOGIN',
        payload: userState,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
