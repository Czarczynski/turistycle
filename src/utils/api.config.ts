import { PREFIX_URI } from '~configs/env'

export interface ApiConfig {
  url: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: PREFIX_URI,
  timeout: 40000,
}
