import { CreateTask, UpdateTask, DeleteTask, ToggleTaskCompletion } from "../types/Task";
import { Get, Post, Put, Delete } from "./API";

const fetchAllTasks = async () => {
  const response = await Get("/tasks/", {});
  console.log(response);
  return response;
};

const createTask = async (task: CreateTask) => {
  const response = await Post("/tasks/task", task);
  return response;
};

const updateTask = async (task: UpdateTask) => {
  const response = await Post("/tasks/task", task);
  return response;
}

const deleteTask = async (task: DeleteTask) => {
  const response = await Delete(`/tasks/task/${task.id}`);
  return response;
}

const toggleTaskCompletion = async (task: ToggleTaskCompletion) => {
  const response = await Put(`/tasks/task/${task.id}`);
  return response;
}

export { fetchAllTasks, createTask, updateTask, deleteTask, toggleTaskCompletion };


