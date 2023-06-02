import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // this will load and parse a .env file from the default location (the project root directory)
    ConfigModule.forRoot(),

    // Configuring the MongoDB connection using MongooseModule
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.CLUSTER_URL}/${process.env.DB_NAME}`),
    TasksModule
  ],
})
export class AppModule { }
