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

module.exports.deleteUser = async (args, context) => {
    const {user} = context
    if (!user) {
        console.log('N-avem pentru tine strainule!')
        return null
    }

    let idUser = args.id
    try {
        const response = await db.User.destroy({
            where: {id: idUser}
        })
        if (response) {
            return {ok: response}
        } else {
            console.log('acest user nu exista')
            return null
        }

    } catch (error) {
        console.log('ceva n-a mers bine vere')
        console.error(error)
        return null
    }

}
module.exports.checkGradeWithUser = async (args, context) => {
    const {friendId} = args;
    const {user} = context;
    if (!user) {
        return null;
    }
    const aux = ceva(user.id, friendId, 1)
    console.log("aux", aux)
    return aux

}


async function ceva(userId, friendId, gr) {

    console.log("iteratie: ", userId, friendId, gr)
    if (gr === 4) {
        return 4
    }

    const response = await db.Friend.findAll({
        where: {
            userId,
            friendId
        }
    })
    // console.log(response)
    // console.log(response)
    if (response.length > 0) {
        console.log("grad: ", gr)
        return gr;
    }
    const friendsRelations = await db.Friend.findAll({
        where: {
            userId: userId
        }
    });
    friendsRelations.forEach((value => {
        console.log("test ", value.dataValues.friendId);
        return ceva(friendId, value.dataValues.friendId, gr + 1)
    }))
}

module.exports.resignFromJob = async (context) => {
    const {user} = context;
    if (!user || user.jobId == null) {
        return false;
    }
    try {
        user.jobId = null;
        const response = await user.save();
        console.log(response)
        if (response != null) {
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.addJob = async (args, context) => {
    const {user} = context;
    const {jobId} = args;
    if (!user) {
        return false;
    }
    try {
        user.jobId = null;
        const response = await user.save();
        console.log(response)
        if (response != null) {
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// module.exports. =