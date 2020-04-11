import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { IssueList } from "src/issue-list/issue-list.entity";

@Entity()
export class Issue extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  issueListId: number;

  @ManyToOne(() => IssueList, (issueList) => issueList.issues, { eager: false })
  issueList: IssueList;
}
