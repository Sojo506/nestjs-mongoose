import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sojo:sojo12345678@cluster0.egiah4i.mongodb.net/tasks'),
    TasksModule
  ],
})
export class AppModule { }
