import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class LoginController {
  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)

      if (user) {
        const token = await User.accessTokens.create(user)

        return {
          type: 'bearer',
          message: 'Login realizado com sucesso',
          token,
        }
      }
    } catch (error) {
      response.status(401)
      return {
        error: 'Credenciais Inválidas',
      }
    }
  }
}
