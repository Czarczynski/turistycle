import { Filter } from '~models/filter.model'

export type allFiltersType = {
  distance: { min: number; max: number }
  cardLike: {
    filter: 'categories' | 'tags' | 'citiesAround'
    data: Filter[]
  }[]
}
