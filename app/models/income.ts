import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Income extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare category: string

  @column()
  declare value: number

  @column()
  declare amountReceived: number

  @column()
  declare receiptDate: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
