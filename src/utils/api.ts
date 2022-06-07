import { create } from 'apisauce'
import axios from 'axios'

import { Marker } from '~models/marker.model'
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
      photoURL: user.displayName,
      displayName: user.displayName,
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

export const FetchMarkers = async (): Promise<Marker[]> => {
  return (await api.get('/markers')).data as Marker[]
}

export const FetchTrips = async (idToken: string): Promise<Trip[]> => {
  return (
    await api.get(
      '/trips',
      {},
      {
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
