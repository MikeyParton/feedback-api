import { Repository, EntityRepository } from "typeorm";
import { Issue } from "./issue.entity";
import { CreateIssueDTO } from "./dto/create-issue.dto";

@EntityRepository(Issue)
export class IssueRepository extends Repository<Issue> {
  async createIssue(dto: CreateIssueDTO): Promise<Issue> {
    const { image, description, issueListId } = dto;
    const issue = new Issue();

    issue.image = image;
    issue.description = description;
    issue.issueListId = issueListId;

    // await issue.save();
    return issue;
  }
}
