import { Routes } from 'nest-router';
import { IssueListModule } from 'src/issue-list/issue-list.module';
import { IssueModule } from 'src/issue/issue.module';

export const routes: Routes = [
  {
    path: '/issue-lists',
    module: IssueListModule,
    children: [
      {
        path: '/:issueListId/issues',
        module: IssueModule,
      }
    ],
  },
];
