const res = require('express/lib/response')
const db = require('../models/')

module.exports.getAllCompanies = (request, response) => {
    const users = db.Company.findAll()
    .then(res => {
        console.log('companies: ', res)
    })
    .catch(() => {
        console.log('nu merge boss')
    })
    console.log("companies: ", users)
    response.send({})
}

module.exports.getCompanyById = (request, response) => {
    
}