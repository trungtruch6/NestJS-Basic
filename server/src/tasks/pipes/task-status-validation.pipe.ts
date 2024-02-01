import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ETasksStatus } from '../task-status-enum';
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    ETasksStatus.OPEN,
    ETasksStatus.IN_PROGRESS,
    ETasksStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }
  private isStatusValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
