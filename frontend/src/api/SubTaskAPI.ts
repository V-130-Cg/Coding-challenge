import { SubTask } from "../types/SubTask";
import { Get, Post, Put, Delete } from "./API";

// Fetch all subtasks for a specific task
const fetchAllSubTasks = async (taskId: string): Promise<SubTask[]> => {
  const response = await Get(`/tasks/${taskId}/subtasks`, {});
  return response as SubTask[];
};

// Create a new subtask for a specific task
const createSubTask = async (taskId: string, subTask: Omit<SubTask, 'id'>): Promise<SubTask> => {
  const response = await Post(`/tasks/${taskId}/subtasks`, subTask);
  return response as SubTask;
};

// Toggle the completion status of a specific subtask
const toggleSubTaskCompletion = async (taskId: string, subTaskId: string): Promise<SubTask> => {
  const response = await Put(`/tasks/${taskId}/subtasks/${subTaskId}/toggle`,);
  return response as SubTask;
};

// Get a specific subtask by its ID
const getSubTask = async (taskId: string, subTaskId: string): Promise<SubTask> => {
  const response = await Get(`/tasks/${taskId}/subtasks/${subTaskId}`, {});
  return response as SubTask;
};

// Update a specific subtask by its ID
const updateSubTask = async (taskId: string, subTaskId: string, subTask: Partial<SubTask>): Promise<SubTask> => {
  const response = await Put(`/tasks/${taskId}/subtasks/${subTaskId}`);
  return response as SubTask;
};

// Delete a specific subtask by its ID
const deleteSubTask = async (taskId: string, subTaskId: string): Promise<void> => {
  await Delete(`/tasks/${taskId}/subtasks/${subTaskId}`,);
};

export { fetchAllSubTasks, createSubTask, toggleSubTaskCompletion, getSubTask, updateSubTask, deleteSubTask };
