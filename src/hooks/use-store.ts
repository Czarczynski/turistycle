import { useContext } from 'react'

import { RootStoreContext } from '~store/root-context.store'

export const useStores = () => useContext(RootStoreContext)
