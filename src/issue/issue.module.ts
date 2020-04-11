import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueRepository } from './issue.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([IssueRepository])
  ],
  controllers: [IssueController],
  providers: [IssueService]
})
export class IssueModule {}
