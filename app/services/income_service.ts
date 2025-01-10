import Income from '#models/income'

export class IncomeService {
  async all() {
    return await Income.all()
  }

  async show(id: number) {
    return await Income.findOrFail(id)
  }

  async store(income: {
    category: string
    value: number
    amountReceived: number
    receiptDate: Date
  }) {
    return await Income.create(income)
  }

  async update(
    income: { category: string; value: number; amountReceived: number; receiptDate: Date },
    id: number
  ) {
    const incomeUpdated = await Income.findOrFail(id)

    incomeUpdated.category = income.category
    incomeUpdated.value = income.value
    incomeUpdated.amountReceived = income.amountReceived
    incomeUpdated.receiptDate = income.receiptDate

    await incomeUpdated.save()

    return {
      message: 'Receita atualizada com sucesso',
      data: incomeUpdated,
    }
  }

  async destroy(id: number) {
    const income = await Income.findOrFail(id)
    await income.delete()
    return {
      message: 'Receita deletada com sucesso',
      data: income,
    }
  }
}
