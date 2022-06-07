import { PREFIX_URI } from '~configs/env'

export interface ApiConfig {
  baseURL: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: PREFIX_URI,
  timeout: 40000,
}
