/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth/login_controller')
const ExpensesController = () => import('#controllers/expenses_controller')
const IncomesController = () => import('#controllers/incomes_controller')

router
  .group(() => {
    router.post('/login', [AuthController, 'login'])
    router
      .group(() => {
        router.get('/', [ExpensesController, 'index'])
        router.get('/:id', [ExpensesController, 'show'])
        router.post('/', [ExpensesController, 'store'])
        router.put('/:id', [ExpensesController, 'update'])
        router.delete('/:id', [ExpensesController, 'destroy'])
      })
      .use(
        middleware.auth({
          guards: ['api'],
        })
      )
      .prefix('/expenses')
    router
      .group(() => {
        router.get('/', [IncomesController, 'index'])
        router.get('/:id', [IncomesController, 'show'])
        router.post('/', [IncomesController, 'store'])
        router.put('/:id', [IncomesController, 'update'])
        router.delete('/:id', [IncomesController, 'destroy'])
      })
      .use(
        middleware.auth({
          guards: ['api'],
        })
      )
      .prefix('/incomes')
  })
  .prefix('/api')
