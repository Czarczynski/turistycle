import { Expose, Type } from 'class-transformer'

import { Message } from '~models/message.model'

export class Conversation {
  @Expose()
  id: string

  @Expose()
  @Type(() => Message)
  lastMessage: Message

  @Expose()
  @Type(() => Message)
  messages?: Message[]

  @Expose()
  users: [string, string]
}
