import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

  // Retrieves all tasks
  findAll() {
    return this.taskModel.find();
  }

  // Creates a new task
  async create(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return newTask.save();
  }

  // Finds a task by its ID
  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  // Deletes a task by its ID
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  // Updates a task by its ID
  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
