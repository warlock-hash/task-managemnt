import { Injectable } from '@nestjs/common';
import { Tasks, TasksStatus } from './tasks.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  findAllTasks(): Tasks[] {
    return this.tasks;
  }

  getTaskById(id: string): Tasks {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Tasks {
    const { id, title, desc } = createTaskDto;
    const task: Tasks = {
      // id: uuidv1(),
      id,
      title,
      desc,
      status: TasksStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TasksStatus): Tasks {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deteleTask(id: string): void {
    // my solution of deleteing something from array
    // const index = this.tasks.findIndex(task => task.id === id);
    // console.log(index);
    // this.tasks = this.tasks.splice(index, 1);
    // tutorials solution
    console.log(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
