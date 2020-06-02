'use strict'

// carregando os dados do usuário vindo do MySQL
// utilizando o Model User
const User = use('App/Models/User')
const Helpers = use('Helpers')
const fs = use('fs')
const readFile = Helpers.promisify(fs.readFile)

const uploadDir = 'uploads'


class UserController {

    async store ({ request }){
        const data = request.only(['name','email','photo','birth_at','level','password'])

        const user = await User.create(data)

        return user
    }

    async update({ params, request, response }){

      const user = await User.findOrFail(params.id)

      const data = request.only(['name','email','photo','birth_at','level','password'])

      user.merge(data)

      await user.save()

      return user
  }

    async index() {
        return await User.all()
    }


    async show({ params }){
        const user = await User.findOrFail(params.id)

        return user
    }

    async destroy({ params, auth, response}){
        const user = await User.findOrFail(params.id)

        if(user.id !== auth.user.id) {
            return response.status(401).send({ error: 'Not authorized'})
        }

        await user.delete()
    }

    /**
       * Alterar a senha
       */
    async changePassword({ params, request, response, auth }){

      //Carrega o usuário do banco
      const user = await User.findOrFail(params.id)

      //Obtem a senha atual e a nova do POST
      const data = request.only(['passwordCurrent','passwordNew'])

      //Tenta autenticar com a senha atual. Se não conseguir será retornado um erro
      await auth.attempt(user.email, data.passwordCurrent)

      //Define a nova senha no usuário
      user.password = data.passwordNew

      //Salva no banco
      await user.save()

      //Retorna os dados do usuário em JSON
      return user
    }

    async changePhoto({ params, request, response }) {

      const photo = request.file('file', {
        maxSize: '2mb',
        allowedExtensions: ['jpg', 'png', 'jpeg']
      })

      if (!photo) {
        response.status(400).json({error:'File required!'})
        return
      }

      const user = await User.findOrFail(params.id)

      const name = `${user.id}/photo.${photo.extname}`

      await photo.move(Helpers.resourcesPath(uploadDir), {
        name,
        overwrite: true
      })

      if (!photo.moved()) {
        response.status(400).json({'error': photo.error()})
        return
      }

      user.photo = `${uploadDir}/${name}`

      await user.save()

      return user

    }

    async photo({ params, response }) {

      const user = await User.findOrFail(params.id)

      const content = await readFile(Helpers.resourcesPath(user.photo))

      response.header('Content-type', 'image/*').send(content)
      return

    }

}

module.exports = UserController
