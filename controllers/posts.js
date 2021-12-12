const db = require('../models');

module.exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await db.Post.findAll();
        res.send(allPosts);
    } catch (error) {
        console.error('Something went wrong');
        res.send({
            error: "Something went wrong",
        });
    }
}

module.exports.getPostById = async (req, res) => {
    const postId = parseInt(req.params.id);

    try {
        const post = await db.Post.findByPk(postId);
        const author = await post.getUser();

        const response = {
            ...post.dataValues,
            author
        };

        res.send(response);
    } catch (error) {
        console.error('Something went wrong');
        res.send({
            error: "Something went wrong",
        });
    }
}