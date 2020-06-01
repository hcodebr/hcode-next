'use strict'

class AuthController {

    async store({request, auth}) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)

        return token
    }

    async me({ auth }){
      const { id, name, email, photo, birth_at, level } = auth.user
      return { id, name, email, photo, birth_at, level }
    }
}

module.exports = AuthController
