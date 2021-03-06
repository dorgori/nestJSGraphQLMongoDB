import { InputType, Field } from "@nestjs/graphql";
import { MinLength, IsDateString } from 'class-validator'

// This is a graphql field
@InputType()
export class CreateLessonInput {
    @MinLength(1)
    @Field()
    name: string;

    @IsDateString()
    @Field()
    startDate: string;

    @IsDateString()
    @Field()
    endDate: string;
}