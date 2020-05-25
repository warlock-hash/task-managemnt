import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks=[];

  findAllTasks(){
    return this.tasks;
  }
}
