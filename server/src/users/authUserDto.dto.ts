import { Types } from 'mongoose';

export class authUserDto {
    _id: string | Types.ObjectId
    username: string
}

export class authUserTokenDto extends authUserDto {
    token: string
}