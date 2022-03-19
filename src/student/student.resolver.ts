import { Resolver, Query } from '@nestjs/graphql'
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver()
export class StudentResolver {
    constructor(private readonly studentService:StudentService){}
    @Query(returns => StudentType)
    student(id: string) {
        this.studentService.getStudentById(id);
    }
}

