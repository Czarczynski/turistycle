/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { GlobalStore } from '~store/global/global.store'

export const RootStoreModel = types
  .model('RootStore')
  .props({
    global: types.optional(GlobalStore, {}),
  })
  .views((self) => ({
    // @ts-ignore
    getChildStore(storeKey: keyof typeof self.properties) {
      // @ts-ignore
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
