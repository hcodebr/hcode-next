'use strict'

const Contact = use('App/Models/Contact')

class ContactController {

  async store ({ request }){
    const data = request.only(['name','email','message'])

    const contact = await Contact.create(data)

    return contact
  }

  async update({ params, request, response }){

    const contact = await Contact.findOrFail(params.id)

    const data = request.only(['name','email','message'])

    contact.merge(data)

    await contact.save()

    return contact
}

  async index() {
      return await Contact.all()
  }


  async show({ params }){
      const contact = await Contact.findOrFail(params.id)

      return contact
  }

  async destroy({ params, auth, response}){
      const contact = await Contact.findOrFail(params.id)

      await contact.delete()
  }

}

module.exports = ContactController
