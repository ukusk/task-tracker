import { PageSection } from '../components/PageSection';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export function TasksPage({
  tasks,
  loading,
  error,
  onAddTask,
  onToggle,
  onDelete,
}) {
  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <PageSection title="My tasks">
      <TaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </PageSection>
  );
}
