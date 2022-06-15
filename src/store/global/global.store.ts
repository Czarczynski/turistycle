import { flatten } from 'lodash'
import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { withEnvironment } from '~store/extensions/with-environment'

import { AuthorizeWithBackend } from '~utils/api'

import { Message } from '~models/message.model'
import { User } from '~models/user.model'

export const GlobalStore = types
  .model('global', {
    user: types.maybeNull(types.frozen<User>()),
    currentConversationId: types.maybeNull(types.string),
    currentConversationMessages: types.optional(types.array(types.frozen<Message>()), []),
  })
  .props({})
  .views(() => ({}))
  .actions((self) => ({
    setUser: (user: User | null) => {
      self.user = user
    },
    setCurrentConversationId: (currentConversationId: string | null) => {
      self.currentConversationId = currentConversationId
      if (currentConversationId === null) {
        // @ts-ignore
        self.currentConversationMessages = []
      }
    },
    updateConversationMessages: (message: Message | Message[]) => {
      const messages = flatten([message])
      // @ts-ignore
      self.currentConversationMessages = [...self.currentConversationMessages, ...messages]
    },
  }))
  .extend(withEnvironment)
  .actions((self) => ({
    logIn: async (user: User, idToken: string) => {
      await AuthorizeWithBackend(user, idToken)
    },
    getConversationMessages: () => {
      return [...self.currentConversationMessages]
    },
  }))

type GlobalType = Instance<typeof GlobalStore>

export interface Global extends GlobalType {}

type GlobalSnapshotType = SnapshotOut<typeof GlobalStore>

export interface GlobalSnapshot extends GlobalSnapshotType {}
