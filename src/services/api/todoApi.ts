import axios from 'axios';

import { Todo } from "../../store/todo/contracts/state";

const TodoApi = {
  async fetchTodoItems(): Promise<Todo[]> {
    return axios.get('/todo').then(({ data }) => data);
  },
  async addTodoItem(todo: Todo): Promise<Todo> {
    return axios.post('/todo', todo).then(({ data }) => data);
  },
};

export default TodoApi;
