import { random } from './random';
import { Task } from './tasks';

export const getTasksFromApi = (limit = 5): Promise<Task[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((tasks) => tasks.sort(random))
    .then((tasks) => tasks.slice(0, limit));
};
