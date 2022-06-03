import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { GlobalStore } from '~store/global/global.store'

export const RootStoreModel = types
  .model('RootStore')
  .props({
    global: types.optional(GlobalStore, {}),
  })
  .views((self) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getChildStore(storeKey: keyof typeof self.properties) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore  @typescript-eslint/no-unsafe-return
      return self[storeKey]
    },
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
