import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { Board } from './boards/board.entity';
import { BoardsService } from './boards/boards.service';
import { BoardRepository } from './boards/board.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule],
})
export class AppModule {}
