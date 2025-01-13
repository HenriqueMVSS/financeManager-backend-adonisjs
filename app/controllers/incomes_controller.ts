import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { IncomeService } from '#services/income_service'
import { createIncomeValidator, updateIncomeValidator } from '#validators/income'

@inject()
export default class IncomesController {
  constructor(private incomeService: IncomeService) {}

  public async index() {
    try {
      return await this.incomeService.all()
    } catch (error) {
      return { error: 'Erro ao carregar receitas', details: error.message }
    }
  }

  public async show({ params }: HttpContext) {
    try {
      return await this.incomeService.show(params.id)
    } catch (error) {
      return { error: 'Erro ao carregar receita', details: error.message }
    }
  }

  public async store({ request, response }: HttpContext) {
    try {

      const payload = await request.validateUsing(createIncomeValidator)
      const income = await this.incomeService.store(payload)
      response.status(201)
      return income
    } catch (error) {
      response.status(500)
      return { error: 'Erro ao cadastrar receita', details: error.message }
    }
  }

  public async update({ params, request }: HttpContext) {
    try {
      const payload = await request.validateUsing(updateIncomeValidator)
      return await this.incomeService.update(payload, params.id)
    } catch (error) {
      return { error: 'Erro ao atualizar receita', details: error.message }
    }
  }

  public async destroy({ params }: HttpContext) {
    try {
      return await this.incomeService.destroy(params.id)
    } catch (error) {
      return { error: 'Erro ao excluir receita', details: error.message }
    }
  }
}
