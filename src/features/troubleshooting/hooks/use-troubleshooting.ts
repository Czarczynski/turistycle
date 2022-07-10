import { useQuery } from 'react-query'

import { FetchGithubIssues } from '~utils/api'

import { GithubIssue } from '~models/github-issue.model'
import { User } from '~models/user.model'

type Data = GithubIssue[]
type Error = never

export const useTroubleshooting = (user: User) => {
  return useQuery<Data, Error>('getIssues', async () => FetchGithubIssues(await user.getIdToken()))
}
