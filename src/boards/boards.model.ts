import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

export class Board {
  id: number | string;
  title: string;
  description: string;
  status: BoardStatus = BoardStatus.PUBLIC;

  constructor(createBoardDto: CreateBoardDto) {
    this.id = uuid();
    this.title = createBoardDto.title;
    this.description = createBoardDto.description;
    this.status = createBoardDto.status || BoardStatus.PUBLIC;
  }
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
