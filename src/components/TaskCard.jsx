import { Link } from 'react-router-dom';

export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className={task.completed ? 'task-card done' : 'task-card'}>
      <h3>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </h3>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <button type="button" onClick={() => onToggle(task.id)}>
        Toggle
      </button>
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </article>
  );
}
