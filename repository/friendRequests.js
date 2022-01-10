const db = require('../models');
const {addFriend} = require('./friends')

module.exports.getFriendRequestsForUser = async (source) => {
    return await db.FriendRequest.findAll({
        where: {
            toUserId: source.id
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

    try {
        return await db.FriendRequest.create({
            fromUserId: user.id,
            toUserId: id,
            status: 0
        })
        // console.log(newFriendRequest)
        // return null;
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

