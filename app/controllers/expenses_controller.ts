import type { HttpContext } from '@adonisjs/core/http'
import { ExpenseService } from '#services/expense_service'
import { inject } from '@adonisjs/core'
import { createExpenseValidator, updateExpenseValidator } from '#validators/expense'

@inject()
export default class ExpensesController {
  constructor(private expenseService: ExpenseService) {}

  public async index() {
    try {
      return await this.expenseService.all()
    } catch (error) {
      return { error: 'Erro ao carregar despesas', details: error.message }
    }
  }

  public async show({ params }: HttpContext) {
    try {
      return await this.expenseService.show(params.id)
    } catch (error) {
      return { error: 'Erro ao carregar despesa', details: error.message }
    }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(createExpenseValidator)
      const expense = await this.expenseService.store(payload)
      response.status(201)
      return expense
    } catch (error) {
      response.status(500)
      return { error: 'Erro ao cadastrar despesa', details: error.message }
    }
  }

  public async update({ params, request }: HttpContext) {
    try {

      const payload = await request.validateUsing(updateExpenseValidator)

      return await this.expenseService.update(payload, params.id)
    } catch (error) {
      return { error: 'Erro ao atualizar despesa', details: error.message }
    }
  }

  public async destroy({ params }: HttpContext) {
    try {
      return await this.expenseService.destroy(params.id)
    } catch (error) {
      return { error: 'Erro ao excluir despesa', details: error.message }
    }
  }
}
