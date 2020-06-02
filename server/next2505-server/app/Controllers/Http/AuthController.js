'use strict'

class AuthController {

    async store({request, auth}) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)

        return token
    }

    async me({ auth }){
      let user = auth.user.toJSON()
      delete user.password
      return user
    }
}

module.exports = AuthController
