import { useMutation } from 'react-query'

import useNavigation from '~hooks/use-navigation'
import { PostGithubIssue } from '~utils/api'
import { showToast } from '~utils/toast'

import { GithubIssue } from '~models/github-issue.model'
import { User } from '~models/user.model'

type Data = GithubIssue[]
type Error = never

export const useSendNewTroubleshooting = (user: User) => {
  const navigation = useNavigation()
  return useMutation<Data, Error, { title: string; body: string }>(
    'getIssues',
    async (body) => PostGithubIssue(await user.getIdToken(), body),
    {
      onSuccess: () => {
        showToast({ type: 'success', text1: 'thank-you', text2: 'issue-created' })
        navigation.goBack()
      },
      onError: () => {
        showToast({ type: 'error', text1: 'error' })
      },
    },
  )
}
