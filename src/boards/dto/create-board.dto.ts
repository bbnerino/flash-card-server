import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../boards.model';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  status?: BoardStatus;
}
