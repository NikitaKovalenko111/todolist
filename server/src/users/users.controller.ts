import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { authorizationDto, registrationDto } from './authDto.dto';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';
import { Types } from 'mongoose';
import { authUserDto, authUserTokenDto } from './authUserDto.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/registration')
    registration(@Body() registrationBody: registrationDto): Promise<User | string> {
        return this.usersService.registrationService(registrationBody.username, registrationBody.password)
    }

    @Get('/authorization/:token')
    authrizationByToken(@Param('token') token: string ): Promise<authUserDto> {
        return this.usersService.authorizationByToken(token)
    }

    @Post('/authorization')
    authorization(@Body() authorizationDto: authorizationDto): Promise<authUserTokenDto> {
        return this.usersService.authorizationService(authorizationDto.username, authorizationDto.password)
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers()
    }

    @Get('/:id')
    getUser(@Param('id') id: Types.ObjectId): Promise<User> {
        return this.usersService.getUserById(id)
    }
}
