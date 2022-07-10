import { create } from 'apisauce'
import { CancelToken } from 'axios'
import { plainToInstance } from 'class-transformer'

import { CurrentFiltersType } from '~features/filters/types/current-filters.type'

import { GithubIssue } from '~models/github-issue.model'
import { Marker, Rate } from '~models/marker.model'
import { Trip } from '~models/trip.model'
import { User } from '~models/user.model'

import { DEFAULT_API_CONFIG } from './api.config'

const api = create({
  ...DEFAULT_API_CONFIG,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const AuthorizeWithBackend = async (user: User, idToken: string) => {
  await api.post(
    '/auth',
    {
      email: user.email,
    },
    {
      headers: {
        Authorization: `Bearer ${idToken.toString()}`,
      },
    },
  )
}

export const FetchUsers = async (idToken: string): Promise<User[]> => {
  return (
    await api.get(
      '/users',
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken.toString()}`,
        },
      },
    )
  ).data as User[]
}

export const FetchGithubIssues = async (idToken: string): Promise<GithubIssue[]> => {
  const issues = (
    await api.get(
      '/github',
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken.toString()}`,
        },
      },
    )
  ).data as GithubIssue[]
  return plainToInstance(GithubIssue, issues)
}

export const PostGithubIssue = async (
  idToken: string,
  body: { title: string; body: string },
): Promise<GithubIssue[]> => {
  const issues = (
    await api.post('/github', body, {
      headers: {
        Authorization: `Bearer ${idToken.toString()}`,
      },
    })
  ).data as GithubIssue[]
  return plainToInstance(GithubIssue, issues)
}

export const FetchTrips = async (
  idToken: string,
  query: string,
  { categories, tags, citiesAround }: CurrentFiltersType,
  cancelAxiosToken?: CancelToken,
): Promise<Trip[]> => {
  return (
    await api.get(
      '/trips',
      {
        query,
        categories: categories.join(','),
        tags: tags.join(','),
        cities_around: citiesAround.join(','),
      },
      {
        cancelToken: cancelAxiosToken,
        headers: {
          Authorization: `Bearer ${idToken.toString()}`,
        },
      },
    )
  ).data as Trip[]
}

export const FetchSingleTrip = async (idToken: string, idTrip: string): Promise<Trip> => {
  return (
    await api.get(
      `/trips/${idTrip}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken.toString()}`,
        },
      },
    )
  ).data as Trip
}

export const FetchMarkers = async (): Promise<Marker[]> => {
  return (await api.get('/markers')).data as Marker[]
}

export const FetchSingleMarker = async (idMarker: string): Promise<Marker> => {
  return (await api.get(`/markers/${idMarker}`)).data as Marker
}

export const SendMarkerRate = async (
  idToken: string,
  idMarker: string,
  rate: Rate,
): Promise<void> => {
  await api.post(`/markers/${idMarker}/rates/`, rate, {
    headers: {
      Authorization: `Bearer ${idToken.toString()}`,
    },
  })
}
