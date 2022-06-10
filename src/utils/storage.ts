/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return  */
import AsyncStorage from '@react-native-async-storage/async-storage'

const getKey = (key: string) => `@${key}`

export const storeData = (key: string, value: any) => {
  return AsyncStorage.setItem(getKey(key), JSON.stringify(value))
}

export const removeData = (key: string) => {
  return AsyncStorage.removeItem(getKey(key))
}

export const getData = async (key: string): Promise<any | null> => {
  const almostThere = await AsyncStorage.getItem(getKey(key))
  if (!almostThere) {
    return null
  }
  return JSON.parse(almostThere)
}
