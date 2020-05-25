import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {
  }
  @Get()
  findAllTask() {
    return this.tasksService.findAllTasks();
  }
}
