import { useEffect, useRef, useState } from 'react';
import Frame from '$components/frame';
import { getTasksFromApi } from './get-tasks-from-api';
import TaskList, { Task } from './tasks';

const TimeZone = ({ getTodos }: { getTodos?: boolean }) => {
  const startTime = useRef(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [tasks, setTasks] = useState<Task[]>([]);

  const elapsed = (currentTime - startTime.current) / 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    if (getTodos) getTasksFromApi().then(setTasks);
    return () => clearInterval(interval);
  }, []);

  return (
    <Frame>
      <h1 data-testid="current-time">{currentTime}</h1>
      <p data-testid="prose">
        You've been staring at this page for {elapsed} second(s).
      </p>
      {getTodos && <TaskList tasks={tasks} data-testid="task-list" />}
    </Frame>
  );
};

export default TimeZone;
