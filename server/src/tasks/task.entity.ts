import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ETasksStatus } from '../tasks/task-status-enum';
import { User } from 'src/auth/user.entity';
@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ETasksStatus;

  @ManyToOne(() => User, (user) => user.task, { eager: false })
  user: User;

  @Column()
  userId: number;
}
