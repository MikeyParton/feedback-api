import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IssueRepository } from './issue.repository';
import { CreateIssueDTO } from './dto/create-issue.dto';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(IssueRepository)
    private issueRepo: IssueRepository
  ) {}

  async createIssue(dto: CreateIssueDTO) {
    return this.issueRepo.createIssue(dto);
  }
}
