import React from "react";
import { Checkbox, Button, message } from "antd";
import { Task } from "../types/Task";
import { deleteTask, toggleTaskCompletion } from "../api/TaskAPI"; // Import deleteTask API function

interface TaskItemProps {
  task: Task;
  onTaskDeleted: (taskId: string) => void;
  onToggleTaskComplete: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskDeleted, onToggleTaskComplete }) => {
  const handleDelete = async () => {
    try {
      await deleteTask({ id: task.id });
      message.warning("Task deleted!");
      onTaskDeleted(task.id); // Call the callback after successful deletion
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleToggleTaskComplete = async () => {
    try {
      await toggleTaskCompletion({id: task.id});
      message.success("Task Completed");
      onToggleTaskComplete(task.id);
    } catch (error) {
      console.error("Failed to toggle task complete task:", error);
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={task.completed}
          onChange={handleToggleTaskComplete}
        >
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
        </Checkbox>
        <Button type="primary" danger onClick={handleDelete} style={{ marginLeft: '10px' }}>
          Delete
        </Button>
      </div>
      {
        // TODO: Implement the Subtasks functions here 
      }
    </div>
  );
};
