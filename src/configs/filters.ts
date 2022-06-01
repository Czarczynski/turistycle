import {Filter} from "~models/filter.model";

export const initialFiltersState = {
  categories: [],
  tags: [],
  citiesAround: [],
  distance: { min: 1, max: 250 },
}

interface filtersProps {
  filter: string
  data: Filter[]
  label: string
}

const cardLike: filtersProps[] = [
  {
    filter: 'categories',
    label: 'Categories',
    data: [
      {
        id: 1,

        title: 'Off Road',
        value: 'offRoad',
        icon: 'off-road',
        backgroundColor: `#ad6644`,
      },
      {
        id: 2,
        title: 'Nature',
        value: 'nature',
        icon: 'nature',
        backgroundColor: `#4a9320`,
      },
      {
        id: 3,
        title: 'Forest',
        value: 'forest',
        icon: 'desert',
        backgroundColor: `#209363`,
      },
      {
        id: 4,
        title: 'City',
        value: 'city',
        icon: 'city',
        backgroundColor: `#bbb`,
      },
    ],
  },
  {
    filter: 'tags',
    label: 'Tags',
    data: [
      {
        id: 1,
        title: 'River',
        value: 'river',
        backgroundColor: `white`,
      },
      {
        id: 2,
        title: 'Chill',
        value: 'chill',
        backgroundColor: `white`,
      },
      {
        id: 3,
        title: 'Rest',
        value: 'rest',
        backgroundColor: `white`,
      },
    ],
  },
  {
    filter: 'citiesAround',
    label: 'Nearby',
    data: [
      {
        id: 1,
        title: 'Poznań',
        value: 'poznan',
        backgroundColor: `white`,
      },
      {
        id: 2,
        title: 'Gdańsk',
        value: 'gdansk',
        backgroundColor: `white`,
      },
      {
        id: 3,
        title: 'Warsaw',
        value: 'warsaw',
        backgroundColor: `white`,
      },
    ],
  },
]

export const allFilters = {
  distance: {min:1, max: 250},
  cardLike
}
