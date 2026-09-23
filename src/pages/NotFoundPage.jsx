import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <p>
      Page not found. <Link to="/">Go home</Link>
    </p>
  );
}
