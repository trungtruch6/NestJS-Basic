import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ETasksStatus } from '../task-status-enum';
export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([ETasksStatus.OPEN, ETasksStatus.IN_PROGRESS, ETasksStatus.DONE])
  status: ETasksStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
