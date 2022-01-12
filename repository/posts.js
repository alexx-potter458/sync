const db = require('../models');

module.exports.deletePost = async (args, context) => {
    const {user} = context
    if (!user) {
        console.log('N-avem pentru tine strainule!')
        return null
    }
    const userId = user.id
    let postId = args.id
    try {

        const posts = await db.Post.findAll({
            where: {
                id: postId,
                userId
            }
        })
        if (posts.length > 0) {
            const response = await db.Post.destroy({
                where: {
                    id: postId, userId
                }
            })
            if (response) {
                return await user.getPosts();
            }
        }
        return null;
    } catch (error) {
        console.log('ceva n-a mers bine vere')
        console.error(error)
        return null
    }

}

module.exports.deletePostAsAdmin = async (args, context) => {
    const {user} = context
    if (!user) {
        console.log('N-avem pentru tine strainule!')
        return null
    }
    const userId = user.id
    let postId = args.id
    try {
        const response = await db.Post.destroy({
            where: {
                id: postId
            }
        })
        if (response) {
            return await db.Post.findAll();
        }
        return null;
    } catch (error) {
        console.log('ceva n-a mers bine vere')
        console.error(error)
        return null
    }

}

module.exports.createPost = async (args, context) => {
    const {user} = context;
    if (!user) {
        console.log(context)
        return null;
    }
    const {postText} = args;
    const userId = user.id;
    try {
        const newPost = await db.Post.create({
            userId,
            postText
        });
        return newPost;
    } catch (error) {
        console.error(error);
        return null;
    }
}
// module.exports. =
// module.exports. =