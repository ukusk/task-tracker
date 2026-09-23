import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { TaskCard } from './TaskCard';

const task = { id: 2, title: 'Practise React state', completed: false };

function renderCard(onToggle = vi.fn()) {
  // TaskCard contains a <Link>, so it needs a router around it.
  render(
    <MemoryRouter>
      <TaskCard task={task} onToggle={onToggle} onDelete={vi.fn()} />
    </MemoryRouter>,
  );
}

describe('TaskCard', () => {
  it('shows the task title', () => {
    renderCard();
    expect(screen.getByText('Practise React state')).toBeInTheDocument();
  });

  it('calls onToggle with the task id when Toggle is clicked', async () => {
    const onToggle = vi.fn();
    renderCard(onToggle);

    await userEvent.click(screen.getByRole('button', { name: 'Toggle' }));

    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(2);
  });
});
