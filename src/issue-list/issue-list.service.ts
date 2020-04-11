import { Injectable } from '@nestjs/common';
import { IssueListRepository } from './issue-list.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IssueList } from './issue-list.entity';

@Injectable()
export class IssueListService {
  constructor(
    @InjectRepository(IssueListRepository)
    private issueListRepo: IssueListRepository
  ) {}

  async createIssueList(): Promise<IssueList> {
    return this.issueListRepo.createIssueList();
  }

  async getIssueLists(): Promise<IssueList[]> {
    return this.issueListRepo.getIssueLists();
  }

  async getIssueListById(id: number): Promise<IssueList> {
    return this.issueListRepo.getIssueListById(id);
  }
}
