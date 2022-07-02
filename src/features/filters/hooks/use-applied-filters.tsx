import { useEffect, useState } from 'react'

import { initialFiltersState } from '~features/filters/states/filters.state'
import { CurrentFiltersType } from '~features/filters/types/current-filters.type'

import { compareObjects } from '~utils/helpers'

export const useAppliedFilters = (filters: CurrentFiltersType): [boolean, string[]] => {
  const [changedFilters, setChangedFilters] = useState<string[]>([])
  const hasCategoriesFilter = Boolean(filters.categories.length)
  const hasCitiesAroundFilter = Boolean(filters.citiesAround.length)
  const hasTagsFilter = Boolean(filters.tags.length)
  const hasDistanceFilter = !compareObjects(filters.distance, initialFiltersState.distance)

  const hasAnyFilters = Boolean(
    hasCategoriesFilter || hasCitiesAroundFilter || hasTagsFilter || hasDistanceFilter,
  )

  useEffect(() => {
    const _changedFilters = new Set<string>()

    if (hasDistanceFilter) {
      _changedFilters.add('distance')
    } else {
      _changedFilters.delete('distance')
    }

    if (hasCategoriesFilter) {
      _changedFilters.add('categories')
    } else {
      _changedFilters.delete('categories')
    }

    if (hasTagsFilter) {
      _changedFilters.add('tags')
    } else {
      _changedFilters.delete('tags')
    }

    if (hasCitiesAroundFilter) {
      _changedFilters.add('citiesAround')
    } else {
      _changedFilters.delete('citiesAround')
    }

    const toApply = Array<string>()
    _changedFilters.forEach((value) => {
      toApply.push(value)
    })
    setChangedFilters(toApply)
  }, [hasCategoriesFilter, hasCitiesAroundFilter, hasTagsFilter, hasDistanceFilter])

  return [hasAnyFilters, changedFilters]
}
