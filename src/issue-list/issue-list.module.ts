import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueListController } from './issue-list.controller';
import { IssueListService } from './issue-list.service';
import { IssueListRepository } from './issue-list.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IssueListRepository])],
  controllers: [IssueListController],
  providers: [IssueListService]
})
export class IssueListModule {}
