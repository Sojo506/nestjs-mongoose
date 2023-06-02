import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/schemas/task.schema';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  // Importing the required dependencies for the module
  imports: [MongooseModule.forFeature([
    {
      name: Task.name,    // Name of the model to import
      schema: TaskSchema  // Schema associated with the model
    }
  ])],
  // Specifying the controllers associated with the module
  controllers: [TasksController],
  // Specifying the providers associated with the module
  providers: [TasksService]
})
export class TasksModule { }