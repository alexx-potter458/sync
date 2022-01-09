const db = require('../models');

module.exports.deleteInterest = async (args, context) => {
    const {user} = context
    if(!user){
        console.log('N-avem pentru tine strainule!')
        return null
    }

    let idInteres = args.id
    try{
        const response = await db.Interest.destroy({
            where: {id: idInteres}
        })
        if(response){
            return {ok: response}
        }else {
            console.log('aceast interes nu exista')
            return null
        }

    } catch (error){
        console.log('ceva n-a mers bine vere')
        console.error(error)
        return null
    }

}
// module.exports. =
// module.exports. =