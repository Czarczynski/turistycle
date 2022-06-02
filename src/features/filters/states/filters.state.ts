import { allFiltersType } from '~features/filters/types/all-filters.type'
import { CurrentFiltersType } from '~features/filters/types/current-filters.type'

export const initialFiltersState: CurrentFiltersType = {
  categories: [],
  tags: [],
  citiesAround: [],
  distance: { min: 1, max: 250 },
}

export const allFilters: allFiltersType = {
  distance: { min: 1, max: 250 },
  cardLike: [
    {
      filter: 'categories',
      data: [
        {
          id: 1,

          title: 'Off Road',
          value: 'offRoad',
          icon: 'off-road',
          backgroundColor: '#ad6644',
        },
        {
          id: 2,
          title: 'Nature',
          value: 'nature',
          icon: 'nature',
          backgroundColor: '#4a9320',
        },
        {
          id: 3,
          title: 'Forest',
          value: 'forest',
          icon: 'desert',
          backgroundColor: '#209363',
        },
        {
          id: 4,
          title: 'City',
          value: 'city',
          icon: 'city',
          backgroundColor: '#bbb',
        },
      ],
    },
    {
      filter: 'tags',
      data: [
        {
          id: 1,
          title: 'River',
          value: 'river',
          backgroundColor: 'white',
        },
        {
          id: 2,
          title: 'Chill',
          value: 'chill',
          backgroundColor: 'white',
        },
        {
          id: 3,
          title: 'Rest',
          value: 'rest',
          backgroundColor: 'white',
        },
      ],
    },
    {
      filter: 'citiesAround',
      data: [
        {
          id: 1,
          title: 'Poznań',
          value: 'poznan',
          backgroundColor: 'white',
        },
        {
          id: 2,
          title: 'Gdańsk',
          value: 'gdansk',
          backgroundColor: 'white',
        },
        {
          id: 3,
          title: 'Warsaw',
          value: 'warsaw',
          backgroundColor: 'white',
        },
      ],
    },
  ],
}
