'use strict'


const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/users/:id/photo','UserController.photo')
Route.post('/auths','AuthController.store')
Route.post('/users','UserController.store')
Route.post('/contact','ContactController.store')

<<<<<<< HEAD
=======
Route.get('/admin/users', 'UserController.index')
>>>>>>> 4e63c8412cc67cffd3e9f036bc41a6ee6fe39ee5
Route.get('/me','AuthController.me').middleware(['auth'])

/*
Route.get('/admin/users', 'UserController.index')
Route.get('/admin/users/:id', 'UserController.show')
Route.post('/admin/users','UserController.store')
Route.delete('/admin/users/:id','UserController.destroy').middleware('auth')
JWT - Json Web Token
*/

Route.group(()=>{

  Route.resource('users','UserController').apiOnly()
  Route.resource('contacts','ContactController').apiOnly()
  Route.resource('users','UserController').apiOnly()
  Route.put('users/:id/password','UserController.changePassword')
  Route.put('users/:id/photo', 'UserController.changePhoto')

}).prefix('admin').middleware(['auth'])
