import { Link, useParams } from 'react-router-dom';

export function TaskDetailsPage({ tasks, loading }) {
  const { taskId } = useParams();
  if (loading) return <p>Loading tasks...</p>;

  // URL parameters are strings, so convert to a number before comparing.
  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) {
    return (
      <p>
        Task {taskId} was not found. <Link to="/tasks">Back to tasks</Link>
      </p>
    );
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>ID: {task.id}</p>
      <p>Status: {task.completed ? 'Completed' : 'Not completed'}</p>
      <Link to="/tasks">Back to tasks</Link>
    </div>
  );
}
