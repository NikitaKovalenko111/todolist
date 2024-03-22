import { Types } from "mongoose";

export class getTodosDtoType {
    readonly authorId: Types.ObjectId
    readonly target: string
}