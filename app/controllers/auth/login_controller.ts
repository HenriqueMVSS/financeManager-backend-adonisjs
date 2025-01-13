import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import AccessToken from '#models/access_token'

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

  async logout({ auth, response }: HttpContext) {
    try {
      const user = auth.user!
      await AccessToken.query().where('tokenable_id', user.id).update({ is_revoked: true })
      return response.json({ message: 'Logout realizado com sucesso' })
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao realizar logout' })
    }
  }
}
