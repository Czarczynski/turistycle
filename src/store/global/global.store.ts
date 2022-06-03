import { flow } from 'mobx'
import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { withEnvironment } from '~store/extensions/with-environment'

export const GlobalStore = types
  .model('global', {
    myName: types.maybeNull(types.string),
  })
  .props({})
  .views(() => ({}))
  .extend(withEnvironment)
  .actions((self) => ({
    setMyName: function (name: string) {
      console.log({ name })
      self.myName = name
    },
  }))

type GlobalType = Instance<typeof GlobalStore>

export interface Global extends GlobalType {}

type GlobalSnapshotType = SnapshotOut<typeof GlobalStore>

export interface GlobalSnapshot extends GlobalSnapshotType {}
