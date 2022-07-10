/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { Expose, Transform, Type } from 'class-transformer'
import { DateTime } from 'luxon'

export class GithubIssue {
  @Expose()
  id: number

  @Expose()
  title: string

  @Expose()
  description: string

  @Expose()
  state?: string

  @Expose()
  @Type(() => Date)
  @Transform(({ obj }) => DateTime.fromISO(obj.createdAt))
  createdAt: DateTime
}
