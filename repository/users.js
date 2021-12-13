const db = require('../models');

module.exports.createUser = async (args) => {
    const {email, password, firsName, lastName, userName, age, jobId, statusId} = args;
    try {
        const newUser = await db.User.create({
            email,
            password,
            firsName,
            lastName,
            userName,
            age,
            jobId,
            statusId
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
    const {email, firsName, lastName, userName, age, jobId, statusId} = args;
    console.log("no try")
    try {
        await db.User.update({
            email,
            firsName,
            lastName,
            userName,
            age,
            jobId,
            statusId
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