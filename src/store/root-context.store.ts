import { createContext } from 'react'

import { RootStore } from './root.store'

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
export const RootStoreContext = createContext<RootStore>({} as RootStore)

/**
 * The provider our root component will use to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider
