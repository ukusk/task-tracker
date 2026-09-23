import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="/tasks">Tasks</NavLink>
      </nav>
    </header>
  );
}
