import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(private readonly studentService: StudentService) { }
    @Query(returns => StudentType)
    student(id: string) {
        this.studentService.getStudentById(id);
    }

    @Mutation(returns => StudentType)
    createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
        return this.studentService.createStudent(createStudentInput);
    }
}

