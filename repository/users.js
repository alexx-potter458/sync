const db = require('../models');
const userStatus = require('../config/userStatus');
const Permissions = require('../config/permissions');

module.exports.createUser = async (args) => {
    const {email, password, firstName, lastName, userName, age, jobId} = args;

    let statusAux = "";
    if (args.status == null) {
        statusAux = "Open for work"
    } else if (args.status !== userStatus.OPEN_FOR_WORK && args.status !== userStatus.WORKING) {
        statusAux = userStatus.OPEN_FOR_WORK;
    } else {
        statusAux = args.status;
    }

    console.log(statusAux)
    const status = statusAux;


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
    const {email, firstName, lastName, userName, age, jobId} = args;

    let statusAux = "";
    if (args.status == null) {
        statusAux = user.status;
    } else if (args.status !== userStatus.OPEN_FOR_WORK && args.status !== userStatus.WORKING) {
        statusAux = userStatus.OPEN_FOR_WORK;
    } else {
        statusAux = args.status;
    }
    const status = statusAux;

    try {
        if (status == null) {

        }
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

module.exports.updateUserAsAdmin = async (args, context) => {
    const {user} = context;
    if (!user) {
        return null;
    }
    const userId = user.id;
    const {id, email, firstName, lastName, userName, age, jobId} = args;
    if (!id) {
        return null;
    }
    let statusAux = "";
    if (args.status == null) {
        statusAux = undefined;
    } else if (args.status !== userStatus.OPEN_FOR_WORK && args.status !== userStatus.WORKING) {
        statusAux = userStatus.OPEN_FOR_WORK;
    } else {
        statusAux = args.status;
    }
    const status = statusAux;
    const hasPermissions = await user.can(Permissions.UPDATE_USERS);

    if(!hasPermissions){
        return null;
    }

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
                id
            }
        });
        return await db.User.findByPk(id);
    } catch (error) {
        console.error(error);
    }
}

module.exports.deleteUser = async (args, context) => {
    const {user} = context
    if (!user) {
        console.log('N-avem pentru tine strainule!')
        return null
    }

    const hasPermissions = await user.can(Permissions.UPDATE_USERS);

    if(!hasPermissions){
        return null;
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

module.exports.resignFromJob = async (context) => {
    const {user} = context;
    if (!user || user.jobId == null) {
        return false;
    }
    try {

        if (user.status !== "Open for work") {
            user.set({
                jobId: null,
                status: "Open for work"
            })
        } else {
            user.jobId = null;
        }
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

module.exports.getAJob = async (args, context) => {
    const {user} = context;
    const {jobId} = args;
    console.log(user.jobId);
    if (!user || !jobId || user.jobId != null) {
        console.log("ce ma")
        return null;
    }

    try {
        user.set({
            jobId,
            status: "Working"
        })
        const response = await user.save();
        if (response != null) {
            return await db.Job.findByPk(jobId);
        }
        return false;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// module.exports. =