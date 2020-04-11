import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Issue } from "src/issue/issue.entity";

@Entity()
export class IssueList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Issue, (issue) => issue.issueList, { eager: true })
  issues: Issue[];
}
