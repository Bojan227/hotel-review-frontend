import { Link } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';

type NavigationLinkProps = {
  title: string;
  link: string;

  toggleCreatePost?: () => void;
};

export const NavigationLink = ({
  title,
  link,

  toggleCreatePost,
}: NavigationLinkProps): JSX.Element => {
  const userContext = useUserContext();

  return <Link to={link}>{title}</Link>;
};
