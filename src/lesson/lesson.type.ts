
// In order to graphQL know this object
import { ObjectType, Field, ID } from '@nestjs/graphql'


// This Lesson changes our type to be named Lesson and not LessonType like the class
@ObjectType('Lesson')
export class LessonType {
    // In order to graphQL know this fields
    // ID is a graphQL type - is it just a good practice
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}