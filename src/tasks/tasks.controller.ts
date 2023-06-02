import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Get()
  findAll() {
    return this.tasksService.findAll()
  }

  @Get(':id')
  // @Param allows to accept data from the fronted which comes by the params.
  async findOne(@Param('id') id: string) {
    try {
      const task = await this.tasksService.findOne(id)

      return task

    } catch (error) {
      throw new NotFoundException('Task not found')
    }
  }

  @Post()
  // @Body allows to accept data from the fronted which comes by the body.
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.tasksService.create(body)
    } catch (error) {
      if (error.code === 11000) throw new ConflictException('Task already exists')

      throw error
    }
  }

  @Delete(':id')
  // HttpCode allows to set an automatically response when everything is ok and there is no content to return
  @HttpCode(204)
  // @Param allows to accept data from the fronted which comes by the params.
  async delete(@Param('id') id: string) {
    try {
      const task = await this.tasksService.delete(id)
      return task
    } catch (error) {
      throw new NotFoundException('Task not found')
    }
  }

  @Put(':id')
  // @Param allows to accept data from the fronted which comes by the params.
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    try {
      const task = await this.tasksService.update(id, body)
      return task
    } catch (error) {
      throw new NotFoundException('Task not found')
    }

  }
}
