export class BodyUpdateTodoDto {
    readonly isCompleted: boolean
}

export class UpdateTodoDto {
    readonly isCompleted: boolean
    readonly dateIsCompleted?: Date | undefined 
}