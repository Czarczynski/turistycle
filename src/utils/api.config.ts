const PREFIX_URI = process.env.PREFIX_URI!
export interface ApiConfig {
  baseURL: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: PREFIX_URI,
  timeout: 40000,
}
