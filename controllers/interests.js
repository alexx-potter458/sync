const res = require('express/lib/response')
const db = require('../models/')

module.exports.getAllInterests = (request, response) => {
    const users = db.Interest.findAll()
    .then(res => {
        console.log('interests: ', res)
    })
    .catch(() => {
        console.log('nu merge boss')
    })
    console.log("interests: ", users)
    response.send({})
}

module.exports.getInterestById = (request, response) => {
    
}