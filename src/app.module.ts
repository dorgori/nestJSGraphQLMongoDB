import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson]
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true
    }), LessonModule, StudentModule],
  providers: [],
})
export class AppModule { }
