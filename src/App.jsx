import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/TasksPage';
import { TaskDetailsPage } from './pages/TaskDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getTasks } from './services/taskApi';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    getTasks()
      .then((data) => {
        if (!ignore) setTasks(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  function addTask(title) {
    setTasks((prev) => {
      const nextId =
        prev.length === 0 ? 1 : Math.max(...prev.map((t) => t.id)) + 1;
      return [...prev, { id: nextId, title, completed: false }];
    });
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/tasks"
            element={
              <TasksPage
                tasks={tasks}
                loading={loading}
                error={error}
                onAddTask={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route
            path="/tasks/:taskId"
            element={<TaskDetailsPage tasks={tasks} loading={loading} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
