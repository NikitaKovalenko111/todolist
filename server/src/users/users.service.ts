import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt'
import { registrationDto } from './authDto.dto';
import * as jwt from 'jsonwebtoken'
import { authUserDto, authUserTokenDto } from './authUserDto.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    private generateAccessToken = (id: Types.ObjectId, username: string, password: string): string => {
        const payload = {
            id,
            username,
            password
        }
        return jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '24h'})
    }

    async registrationService(username: string, password: string): Promise<User | string> {
        let candidate = await this.userModel.findOne({ username: username })

        if (candidate) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT)
        }

        const cryptedPassword: string = bcrypt.hashSync(password, 7)

        const registrationUserDto: registrationDto = {
            username: username,
            password: cryptedPassword
        }

        let user: User = await this.userModel.create(registrationUserDto)

        return user
    }

    async authorizationService(username: string, password: string): Promise<authUserTokenDto> {
        let candidate = await this.userModel.findOne({ username: username })

        if (!candidate)
            throw new HttpException("User with such username wasn't found", HttpStatus.BAD_REQUEST)

        let isPasswordCorrect = bcrypt.compareSync(password, candidate.password)

        if (!isPasswordCorrect)
            throw new HttpException("Password is incorrect", HttpStatus.BAD_REQUEST)

        const token: string = this.generateAccessToken(candidate._id, candidate.username, candidate.password)

        return {
            token: token,
            username: candidate.username,
            _id: candidate._id
        }
    }

    async authorizationByToken(token: string): Promise<authUserDto> {
        let decoded: jwt.JwtPayload = jwt.verify(token, process.env.JWT_KEY) as User

        const authUser: authUserDto = {
            _id: decoded.id,
            username: decoded.username,
        }

        return authUser
    }

    async getUsers(): Promise<User[]> {
        let users: User[] = await this.userModel.find().exec()

        return users
    }

    async getUserById(id: Types.ObjectId): Promise<User> {
        let user: User = await this.userModel.findById(id)

        if (!user)
            throw new HttpException('There is no user with such id', HttpStatus.NOT_FOUND)

        return user
    }
}
