const db = require('../models');

module.exports.createPost = async (args,context) => {
    const{user} = context;
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