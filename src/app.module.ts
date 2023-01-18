import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TaskModule } from './Modules/TaskModule.module';
import { TeamModule } from './Modules/TeamModule.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './typeorm/entities/Task';
import { Team } from './typeorm/entities/Team';
import { Member } from './typeorm/entities/Member';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySql@1234',
    database: 'nest_typeorm_test',
    entities: [Task,Team,Member],
    synchronize:true
  }), TaskModule,TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
