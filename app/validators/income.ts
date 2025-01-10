import vine from '@vinejs/vine'

/**
 * Validates the incomes create action
 */
export const createIncomeValidator = vine.compile(
  vine.object({
    category: vine.string().trim().minLength(6),
    value: vine.number(),
    amountReceived: vine.number(),
    receiptDate: vine.date({
      formats: ['iso8601'],
    }),
  })
)

/**
 * Validates the incomes update action
 */
export const updateIncomeValidator = vine.compile(
  vine.object({
    id: vine.number(),
    category: vine.string().trim().minLength(6),
    value: vine.number(),
    amountReceived: vine.number(),
    receiptDate: vine.date({
      formats: ['iso8601'],
    }),
  })
)
