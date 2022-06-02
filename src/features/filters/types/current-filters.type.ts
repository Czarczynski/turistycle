export type CurrentFiltersType = {
  categories: string[]
  tags: string[]
  citiesAround: string[]
  distance: { min: number; max: number }
}
