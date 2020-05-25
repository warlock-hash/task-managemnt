import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks, TasksStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAllTask(): Tasks[] {
    return this.tasksService.findAllTasks();
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Tasks {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() cretaeTaskdto: CreateTaskDto): Tasks {
    return this.tasksService.createTask(cretaeTaskdto);
  }

  @Post(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TasksStatus,
  ): Tasks {
    return this.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): any {
    this.tasksService.deteleTask(id);
    return {
      mesg: 'task Delted Successfully',
    };
  }
}
