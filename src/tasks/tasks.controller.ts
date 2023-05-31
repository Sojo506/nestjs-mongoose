import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Get()
  findAll() {
    return this.tasksService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id)
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateTaskDto) {
    return this.tasksService.update(id, body)
  }
}
