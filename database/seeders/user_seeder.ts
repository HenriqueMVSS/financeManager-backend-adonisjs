import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: '123456',
    })
  }
}
