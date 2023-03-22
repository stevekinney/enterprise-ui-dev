export type Task = {
  title: string;
  completed: boolean;
  id: number;
};

export const TaskListItem = ({ title, completed, id }: Task) => {
  return (
    <li className="flex items-center gap-2">
      <input type="checkbox" id={`task-${id}`} checked={completed} />
      <label htmlFor={`task-${id}`}>{title}</label>
    </li>
  );
};

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
