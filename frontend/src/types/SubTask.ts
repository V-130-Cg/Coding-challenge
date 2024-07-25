// subtask.ts

export type SubTask = {
    id: string;
    title: string;
    completed: boolean;
    createdDate?: string;
    updatedDate?: string;
  } & CreateSubTask;
  
  export type CreateSubTask = {
    title: string;
  };
  
  export type UpdateSubTask = {
    id: string;
  };
  
  export type DeleteSubTask = {
    id: string;
  };
  
  export type ToggleSubTaskCompletion = {
    id: string;
  };
  