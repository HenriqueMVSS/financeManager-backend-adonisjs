import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare category: string

  @column()
  declare value: number

  @column()
  declare amountPaid: number

  @column()
  declare expirationDate: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
