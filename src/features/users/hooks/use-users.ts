import { useQuery } from 'react-query'

import { FetchUsers } from '~utils/api'

import { User } from '~models/user.model'

type Data = User[]
type Error = never

export const useUsers = (user: User) => {
  return useQuery<Data, Error>('getUsers', async () => FetchUsers(await user.getIdToken()))
}
