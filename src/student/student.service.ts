import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from './student.entity';
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) { }
    async getStudentById(id: string): Promise<Student> {
        const student = await this.studentRepository.findOneBy({ id });
        return student;
    }
    async createStudent(firstName: string, lastName: string): Promise<Student> {
        const student = await this.studentRepository.create({ id: uuid(), firstName, lastName, });
        return student;
    }
}
