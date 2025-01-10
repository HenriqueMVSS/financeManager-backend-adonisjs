import vine from '@vinejs/vine'

export const createExpenseValidator = vine.compile(
  vine.object({
    category: vine.string().trim().minLength(6),
    value: vine.number(),
    amountPaid: vine.number(),
    expirationDate: vine.date({
      formats: ['iso8601']
    }),
  })
)

/**
 * Validates the post's update action
 */
export const updateExpenseValidator = vine.compile(
  vine.object({
    id: vine.number(),
    category: vine.string().trim().minLength(6),
    value: vine.number(),
    amountPaid: vine.number(),
    expirationDate: vine.date({
      formats: ['iso8601'],
    }),
  })
)
