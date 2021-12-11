const res = require('express/lib/response')
const db = require('../models/')

module.exports.getAllUsers = (request, response) => {
    const users = db.User.findAll()
    .then(res => {
        console.log('usersssSSSSS: ', res)
    })
    .catch(() => {
        console.log('nu merge boss')
    })
    console.log("users: ", users)
    response.send({users: allUsers})
}

module.exports.getUserById = (request, response) => {
    
}