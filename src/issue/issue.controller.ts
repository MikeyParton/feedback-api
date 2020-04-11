import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateIssueDTO } from './dto/create-issue.dto';
import { Issue } from './issue.entity';
import { IssueService } from './issue.service';

@Controller()
export class IssueController {
  constructor(private issueService: IssueService) {}

  @Post()
  async createIssue(
    @Param('issueListId', ParseIntPipe) issueListId: number,
    @Body() dto: CreateIssueDTO,
  ): Promise<Issue> {
    return this.issueService.createIssue(dto);
  }

  @Get('/:id')
  async getIssueById(
    @Param('issueListId', ParseIntPipe) issueListId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log(issueListId, id)
  }
}
