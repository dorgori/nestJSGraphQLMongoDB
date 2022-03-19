import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from './student.entity';
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) { }
    async getStudentById(id: string): Promise<Student> {
        const student = await this.studentRepository.findOneBy({ id });
        return student;
    }
    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = createStudentInput
        const student = await this.studentRepository.create({ id: uuid(), firstName, lastName });
        return this.studentRepository.save(student);
    }
}
