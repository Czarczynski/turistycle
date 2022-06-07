import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { withEnvironment } from '~store/extensions/with-environment'

import { AuthorizeWithBackend } from '~utils/api'

import { User } from '~models/user.model'

export const GlobalStore = types
  .model('global', {
    user: types.maybeNull(types.frozen()),
  })
  .props({})
  .views(() => ({}))
  .actions((self) => ({
    setUser: (user: User | null) => {
      self.user = user
    },
  }))
  .extend(withEnvironment)
  .actions((self) => ({
    logIn: async (user: User, idToken: string) => {
      await AuthorizeWithBackend(user, idToken)
    },
  }))

type GlobalType = Instance<typeof GlobalStore>

export interface Global extends GlobalType {}

type GlobalSnapshotType = SnapshotOut<typeof GlobalStore>

export interface GlobalSnapshot extends GlobalSnapshotType {}
