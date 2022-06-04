/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */
import AsyncStorage from '@react-native-async-storage/async-storage'

const getKey = (key: string) => `@${key}`

export const storeData = (key: string, value: any) => {
  return AsyncStorage.setItem(getKey(key), JSON.stringify(value))
}

export const removeData = (key: string) => {
  return AsyncStorage.removeItem(getKey(key))
}

export const getData = (key: string): any => {
  return AsyncStorage.getItem(JSON.parse(getKey(key)))
}
