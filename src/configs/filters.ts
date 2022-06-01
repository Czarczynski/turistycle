export const initialFiltersState = {
  categories: [],
  tags: [],
  citiesAround: [],
  distance: { min: 1, max: 250 },
}

interface filtersProps {
  filter: string
  values: {
    color: string
    icon?: string
    id: number
    label: string
    value: string
  }[]
  label: string
}

export const allFilters: filtersProps[] = [
  {
    filter: 'categories',
    label: 'Categories',
    values: [
      {
        id: 1,
        label: 'Off Road',
        value: 'offRoad',
        icon: 'off-road',
        color: `#ad6644`,
      },
      {
        id: 2,
        label: 'Nature',
        value: 'nature',
        icon: 'nature',
        color: `#4a9320`,
      },
      {
        id: 3,
        label: 'Forest',
        value: 'forest',
        icon: 'desert',
        color: `#209363`,
      },
      {
        id: 4,
        label: 'City',
        value: 'city',
        icon: 'city',
        color: `#bbb`,
      },
    ],
  },
  {
    filter: 'tags',
    label: 'Tags',
    values: [
      {
        id: 1,
        label: 'River',
        value: 'river',
        color: `#f5f5f5`,
      },
      {
        id: 2,
        label: 'Chill',
        value: 'chill',
        color: `#f5f5f5`,
      },
      {
        id: 3,
        label: 'Rest',
        value: 'rest',
        color: `#f5f5f5`,
      },
    ],
  },
  {
    filter: 'citiesAround',
    label: 'Nearby',
    values: [
      {
        id: 1,
        label: 'Poznań',
        value: 'poznan',
        color: `#f5f5f5`,
      },
      {
        id: 2,
        label: 'Gdańsk',
        value: 'gdansk',
        color: `#f5f5f5`,
      },
      {
        id: 3,
        label: 'Warsaw',
        value: 'warsaw',
        color: `#f5f5f5`,
      },
    ],
  },
]
