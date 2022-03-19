import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    // Here we injecting a repository using typeorm for Lesson Entity
    // With this repository we achieve DB functionality
    // TODO: switch with mongoose - this is the only change - Reposiroy vs Mongoose
    constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) { }

    async getLessons(): Promise<Lesson[]> {
        const lesson = await this.lessonRepository.find()
        return lesson;
    }

    async getLessonById(id: string): Promise<Lesson> {
        const lesson = await this.lessonRepository.findOneBy({ id });
        return lesson;
    }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name,
            startDate,
            endDate } = createLessonInput
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        })
        await this.lessonRepository.save(lesson);
        return lesson;
    }
}
