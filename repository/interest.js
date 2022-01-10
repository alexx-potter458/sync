const db = require('../models');

module.exports.addInterest = async (args, context) => {
    const {user} = context;

    // console.log(user);
    if (!user) {
        console.log(context)
        return null;
    }
    const {name, description, status} = args;
    try {
        const oldInterests = await db.UserInterest.findAll({
            where: {
                userId: user.id
            }
        });
        const interest = await db.Interest.findAll({
            where: {
                name
            }
        })
        // console.log("old int: ",oldInterests[0].dataValues.interestId);
        // console.log("asta noua: ", interest[0].dataValues.id)

        if (interest.length > 0) {
            let checkIfInterestExists = false;
            oldInterests.forEach(((value, index) => {
                console.log(value.dataValues)
                if (value.dataValues.interestId === interest[0].dataValues.id) {
                    checkIfInterestExists = true;
                    console.log("sunt egale");
                }
            }));
            // const aux = await user.getInterests();
            // console.log(aux);
            // return null;
            if (!checkIfInterestExists) {
                await db.UserInterest.create({
                    userId: user.id,
                    interestId: interest[0].dataValues.id
                });
                // const aux = await user.getInterests();
                // return null;
                return await user.getInterests();
            } else {
                console.log("e deja boss");
                return null;
            }
        } else {
            console.error("nu exista interesul dorit!");
            return null;
        }

    } catch (error) {
        console.error(error);
        return null;
    }


}