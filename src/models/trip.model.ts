import { Expose, Type } from 'class-transformer'

import { Marker } from '~models/marker.model'

export class Trip {
  @Expose()
  @Type(() => ID)
  _id: ID

  @Expose()
  name: string

  @Expose()
  citiesAround: any[]

  @Expose()
  categories: string[]

  @Expose()
  tags: any[]

  @Expose()
  @Type(() => Marker)
  markers: string[] | Marker[]

  @Expose()
  geoJson: GeoJSON

  @Expose()
  length: number

  @Expose()
  opinions: any[]

  @Expose()
  creatorId: string

  @Expose()
  createdAt: CreatedAt
}

export class ID {
  @Expose()
  $oid: string
}

export class CreatedAt {
  @Expose()
  $date: Date
}

export class GeoJSON {
  @Expose()
  type: string

  @Expose()
  features: Feature[]
}

export class Feature {
  @Expose()
  type: string

  @Expose()
  properties: Properties

  @Expose()
  geometry: Geometry
}

export class Geometry {
  @Expose()
  coordinates: Array<number[]>

  @Expose()
  type: string
}

export class Properties {}
