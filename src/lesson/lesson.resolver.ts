import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

// The type of the resolver
@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private readonly lessonService: LessonService) { }
    // The type of the query
    @Query(returns => LessonType)
    lesson(@Args('id') id: string) {
        return this.lessonService.getLessonById(id)
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput): Promise<Lesson> {
        return this.lessonService.createLesson(createLessonInput);
    }
}