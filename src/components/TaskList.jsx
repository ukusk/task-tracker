import { useState } from 'react';
import { TaskCard } from './TaskCard';

export function TaskList({ tasks, onToggle, onDelete }) {
  const [filter, setFilter] = useState('all');

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>

      {visibleTasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        visibleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
