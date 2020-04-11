import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { IssueList } from './issue-list.entity';
import { IssueListService } from './issue-list.service';

@Controller()
export class IssueListController {
  constructor(
    private issueListService: IssueListService
  ) {}

  @Post()
  async createIssueList(): Promise<IssueList> {
    return this.issueListService.createIssueList();
  }

  @Get()
  async getIssueLists(): Promise<IssueList[]> {
    return this.issueListService.getIssueLists();
  }

  @Get('/:id')
  async getIssueListById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<IssueList> {
    return this.issueListService.getIssueListById(id);
  }
}
