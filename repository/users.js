const db = require('../models');

module.exports.createUser = async (args) => {
    const {email, password, firstName, lastName, userName, age, jobId, status} = args;
    try {
        const newUser = await db.User.create({
            email,
            password,
            firstName,
            lastName,
            userName,
            age,
            jobId,
            status
        });
        return newUser;
    } catch (error) {
        console.error(error);
        return null;
    }
}
module.exports.updateUser = async (args, context) => {
    const {user} = context;
    if (!user) {
        console.log(context)
        return null;
    }
    const userId = user.id;
    const {email, firstName, lastName, userName, age, jobId, status} = args;
    console.log("no try")
    try {
        await db.User.update({
            email,
            firstName,
            lastName,
            userName,
            age,
            jobId,
            status
        }, {
            where: {
                id: userId
            }
        });
        console.log("ok")
        return await db.User.findByPk(userId)

    } catch (error) {
        console("nnu i ok")
        console.error(error);
        return null;
    }
}
// module.exports. =
// module.exports. =