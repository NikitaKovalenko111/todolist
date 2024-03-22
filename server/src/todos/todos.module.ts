import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Goal, TodoSchema } from 'src/schemas/todo.schema';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Goal.name, schema: TodoSchema }])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}
