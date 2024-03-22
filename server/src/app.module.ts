import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import 'dotenv/config'

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), TodosModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
