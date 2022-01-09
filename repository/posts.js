const db = require('../models');

module.exports.deletePost = async (args, context) => {
    const {user} = context
    if(!user){
        console.log('N-avem pentru tine strainule!')
        return null
    }

    let idPost = args.id
    try{
        const response = await db.Post.destroy({
            where: {id: idPost}
        })
        if(response){
            return {ok: response}
        }else {
            console.log('aceasta postare nu exista')
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