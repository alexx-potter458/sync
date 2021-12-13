const res = require('express/lib/response')
const db = require('../models/')

module.exports.getAllUsers = async (req, res) => {
    // const allUsers = db.User.findAll()
    // .then(res => {
    //     // console.log('usersssSSSSS: ', res)
    //     console.log("merge")
    // })
    // .catch(() => {
    //     console.log('nu merge boss')
    // })
    // // console.log("users: ", users)
    // response.send({users: allUsers})
    try {
        const allUsers = await db.User.findAll();
        res.send(allUsers);
    } catch (error) {
        console.error('Something went wrong');
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.getUserById = (request, response) => {
    
}
