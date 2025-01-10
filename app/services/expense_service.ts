import Expense from '#models/expense'

export class ExpenseService {
  async all() {
    return await Expense.all()
  }

  async show(id: number) {
    return await Expense.findOrFail(id)
  }

  async store(expense: {
    category: string
    value: number
    amountPaid: number
    expirationDate: Date
  }) {
    return await Expense.create(expense)
  }

  async update(
    expense: { category: string; value: number; amountPaid: number; expirationDate: Date },
    id: number
  ) {
    const expenseUpdated = await Expense.findOrFail(id)

    expenseUpdated.category = expense.category
    expenseUpdated.value = expense.value
    expenseUpdated.amountPaid = expense.amountPaid
    expenseUpdated.expirationDate = expense.expirationDate

    await expenseUpdated.save()

    return {
      message: 'Despesa atualizada com sucesso',
      data: expenseUpdated,
    }
  }

  async destroy(id: number) {
    const expense = await Expense.findOrFail(id)
    await expense.delete()
    return {
      message: 'Despesa deletada com sucesso',
      data: expense,
    }
  }
}
