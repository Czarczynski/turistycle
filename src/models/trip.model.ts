import { Expose, Type } from 'class-transformer'

import { Marker } from '~models/marker.model'

export class Trip {
  @Expose()
  @Type(() => ID)
  _id: ID

  @Expose()
  name: string

  @Expose()
  citiesAround: string[]

  @Expose()
  categories: string[]

  @Expose()
  tags: string[]

  @Expose()
  @Type(() => Marker)
  markers?: Marker[]

  @Expose()
  geoJson: GeoJSON

  @Expose()
  length: number

  @Expose()
  opinions: Opinion[]

  @Expose()
  creatorId: string

  @Expose()
  createdAt: CreatedAt
}

export class ID {
  @Expose()
  $oid: string
}
export class Opinion {
  user: string
  opinion: number
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
