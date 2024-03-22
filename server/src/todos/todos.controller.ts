import { Goal } from 'src/schemas/todo.schema';
import { TodosService } from './todos.service';
import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { BodyCreateTodoDto } from './dto/create-todo.dto';
import { BodyUpdateTodoDto } from './dto/update-todo.dto';
import { getTodosDtoType } from './dto/get-todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post('/get')
    getAllTodos(@Body() getTodosDto: getTodosDtoType): Promise<Goal[]> {
        return this.todosService.getAllTodos(getTodosDto)
    }

    @Get('/:id')
    getTodoById(@Param('id') id: ObjectId): Promise<Goal> {
        return this.todosService.getTodoById(id)
    }

    @Post()
    postTodo(@Body() bodyCreateTodoDto: BodyCreateTodoDto): Promise<Goal> {
        return this.todosService.postTodoService(bodyCreateTodoDto)
    }

    @Patch('/:id')
    patchTodoById(@Body() bodyUpdateTodoDto: BodyUpdateTodoDto, @Param('id') id: ObjectId): Promise<Goal> {
        return this.todosService.patchTodoService(bodyUpdateTodoDto, id)
    }

    @Delete('/:id')
    deleteTodoById(@Param('id') id: ObjectId) {
        return this.todosService.deleteTodoService(id)
    }
    
}
