import { createContext, useReducer, useEffect } from 'react';
import { HotelDataType } from '../components/feed/types/types';

type ActionType = { type: 'LOGIN'; payload: UserType } | { type: 'LOGOUT' };

export interface UserType {
  email: string;
  displayName: string;
  _id: string;
  role: string;
  favourites: HotelDataType[];
}

interface UserContextInterface {
  user: UserType | null;
  dispatch: (action: ActionType) => void;
}

export const UserContext = createContext<UserContextInterface>({
  user: {
    role: '',
    email: '',
    displayName: '',
    _id: '',
    favourites: [],
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
