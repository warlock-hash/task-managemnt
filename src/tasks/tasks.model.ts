export interface Tasks {
  id: string;
  title: string;
  desc: string;
  status: TasksStatus;
}

export enum TasksStatus {
  OPEN = 'OPEN',
  IN_PORGRESS = 'IN_PORGRESS',
  DONE = 'DONE',
}
