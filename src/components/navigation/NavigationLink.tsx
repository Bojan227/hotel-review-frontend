import { Link } from 'react-router-dom';

type NavigationLinkProps = {
  title: string;
  link: string;

  toggleCreatePost?: () => void;
};

export const NavigationLink = ({
  title,
  link,
}: NavigationLinkProps): JSX.Element => {
  return <Link to={link}>{title}</Link>;
};
