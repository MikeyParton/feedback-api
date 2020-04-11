import { EntityRepository, Repository } from "typeorm";
import { IssueList } from "./issue-list.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(IssueList)
export class IssueListRepository extends Repository<IssueList> {

  async createIssueList(): Promise<IssueList> {
    const list = new IssueList();
    list.issues = [];
    await list.save();

    return list;
  }

  async getIssueLists(): Promise<IssueList[]> {
    return await this.createQueryBuilder('list')
      .leftJoinAndSelect('list.issues', 'issue')
      .getMany();
  }

  async getIssueListById(id: number): Promise<IssueList> {
    const list = await this.findOne(id);
    if (!list) {
      throw new NotFoundException();
    }
    return list;
  }

}
