import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TaskModule } from './Modules/TaskModule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './typeorm/entities/Task';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySql@1234',
    database: 'nest_typeorm_test',
    entities: [Task],
    synchronize:true
  }), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
