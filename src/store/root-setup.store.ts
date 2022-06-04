/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */
import { onSnapshot } from 'mobx-state-tree'

import { Environment } from '~store/environment'

import * as storage from '~utils/storage'

import { RootStore, RootStoreModel } from './root.store'

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root'

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export function createEnvironment() {
  const env = new Environment()
  env.setup()
  return env
}

/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: RootStore
  let data: any

  const env = createEnvironment()
  try {
    data = (await storage.getData(ROOT_STATE_STORAGE_KEY)) || {}
    rootStore = RootStoreModel.create(data, env)
  } catch (e) {
    rootStore = RootStoreModel.create({}, env)
  }

  onSnapshot(rootStore, (snapshot) => storage.storeData(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore
}
