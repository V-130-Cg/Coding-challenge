export type Task = {
  id: string;
  details?: string;
  completed: boolean;
  createdDate?: string;
  updatedDate?: string;
} & CreateTask;

export type CreateTask = {
  name: string;
};

export type UpdateTask = {
  id:string;
}

export type DeleteTask = {
  id:string;
}


export type ToggleTaskCompletion = {
  id:string;
}



