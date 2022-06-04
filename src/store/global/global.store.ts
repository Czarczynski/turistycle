import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { withEnvironment } from '~store/extensions/with-environment'

export const GlobalStore = types
  .model('global', {})
  .props({})
  .views(() => ({}))
  .extend(withEnvironment)
  .actions(() => ({}))

type GlobalType = Instance<typeof GlobalStore>

export interface Global extends GlobalType {}

type GlobalSnapshotType = SnapshotOut<typeof GlobalStore>

export interface GlobalSnapshot extends GlobalSnapshotType {}
