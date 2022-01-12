const db = require('../models');
const {addFriend} = require('./friends')

module.exports.getFriendRequestsForUser = async (source) => {
    return await db.FriendRequest.findAll({
        where: {
            toUserId: source.id
        }
    });
}

module.exports.getSentFriendRequestsForUser = async (source) => {
    return await db.FriendRequest.findAll({
        where: {
            fromUserId: source.id
        }
    });
}

module.exports.sendFriendRequest = async (args, context) => {
    const {user} = context
    const {id} = args
    if (!user || (id === user.id)) {
        return null;
    }
    const userCheck = await db.User.findByPk(id)
    if (!userCheck) {
        return null;
    }
    const checkIfRequestExistsOneWay = await db.FriendRequest.findAll({
        where: {
            fromUserId: user.id,
            toUserId: id,
        }
    })
    const checkIfRequestExistsOtherWay = await db.FriendRequest.findAll({
        where: {
            fromUserId: id,
            toUserId: user.id,
        }
    });

    const checkIfUsersAreFriends1 = await db.Friend.findAll({
        where: {
            userId: user.id,
            friendId: id
        }
    })

    const checkIfUsersAreFriends2 = await db.Friend.findAll({
        where: {
            userId: id,
            friendId: user.id
        }
    })

    if (checkIfRequestExistsOneWay.length > 0 || checkIfRequestExistsOtherWay.length > 0
        || checkIfUsersAreFriends1.length > 0 || checkIfUsersAreFriends2.length > 0) {
        return null;
    }

    try {
        response = await db.FriendRequest.create({
            fromUserId: user.id,
            toUserId: id,
            status: 0
        })
        if (response) {
            return true;
        }
        return null;

    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports.acceptFriendRequest = async (args, context) => {
    const {user} = context
    const {id} = args
    if (!user) {
        return null;
    }
    if (addFriend(user.id, id)) {
        try {
            console.log("am ajuns aici2")

            const response = await db.FriendRequest.destroy({
                where: {
                    fromUserId: id,
                    toUserId: user.id
                }
            })
            if (!response) {
                return null;
            }
            return true;
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports.rejectFriendRequest = async (args, context) => {
    const {user} = context
    const {id} = args
    if (!user) {
        return null;
    }
    //
    // const aux = await db.FriendRequest.findAll({
    //     where:{
    //         toUserId:user.id,
    //         fromUserId: id,
    //     }
    // })

    try {
        return await db.FriendRequest.destroy({
            where: {
                toUserId: user.id,
                fromUserId: id,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

