const db = require('../models');

module.exports.addFriend = async (userOneId, userTwoId) => {
    if (userOneId === userTwoId) {
        return null;
    }
    try {
        const user1 = await db.User.findByPk(userOneId);
        const user2 = await db.User.findByPk(userTwoId);

        const user1and2friends = await db.Friend.findAll({
            where: {
                userId: userOneId,
                friendId: userTwoId,
            }
        });
        if (!user1 || !user2 || user1and2friends) {
            return null;
        } else {
            try {
                const response1 = await db.Friend.create({
                    userId: userOneId,
                    friendId: userTwoId,
                });
                const response2 = await db.Friend.create({
                    userId: userTwoId,
                    friendId: userOneId,
                });

                if (response2 && response1) {
                    return true
                }
                return null;
            } catch (error) {
                console.error(error);
                return null;
            }

        }
    }catch (error){
        console.error(error)
        return null;
    }

}

module.exports.checkIfFriends = async (userOneId, userTwoId) => {
    if (userOneId === userTwoId) {
        return null;
    }
    const user1 = await db.User.findByPk(userOneId);
    const user2 = await db.User.findByPk(userTwoId);

    const user1and2friends = await db.Friend.findOne({
        where: {
            userId: userOneId,
            friendId: userTwoId,
        }
    });

    if (!user1 || !user2 || user1and2friends) {
        return null;
    }
}