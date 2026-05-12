import axios from "axios";

const axiosInstance = axios.create()

export const TodoAPI = {
   async getAll() {
    const response = await axiosInstance.get('/api/todos');
    console.log(response);

    return response.data.todos;
  },

  async create(todo: { title: string; completed: boolean }) {
    const response = await axiosInstance.post('/api/todos', todo);
    return response.data.todo;
  },

  async update(id: string, todo: { title?: string; completed?: boolean }) {
    const response = await axiosInstance.put(`/api/todos/${id}`, todo)
    return response.data.todo
  },

  async remove(id: string) {
    await axiosInstance.delete(`/api/todos/${id}`);
  }
};
