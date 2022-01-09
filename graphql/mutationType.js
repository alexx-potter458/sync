const {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} = require('graphql');
const userType = require('./types/userType')
const loginResultType = require('./types/loginResultType')
const loginInputType = require('./inputTypes/loginInputType')
const createUserInputType = require('./inputTypes/createUserInputType')
const updateUserInputType = require('./inputTypes/updateUserInputType')
const loginHandler = require('../repository/login')
const db = require('../models')

const { createUser, updateUser, deleteUser } = require('../repository/users');
const { deletePost } = require('../repository/posts')
const { deleteInterest } = require('../repository/interests')
const postType = require('./types/postType');
const interestType = require('./types/interestType');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        login: {
            type: loginResultType,
            args: {
                loginInput: {
                    type: loginInputType
                }
            },
            resolve: (source, args, context) => {
                const {email, password} = args.loginInput;
                const token = loginHandler(email, password);
                return {
                    token,
                }
            }
        },
        createUser: {
            type: userType,
            args: {
                createUserInput: {
                    type: createUserInputType,
                }
            },
            resolve: async (source, args) => {
                return createUser(args.createUserInput)
            }
        },
        updateUser: {
            type: userType,
            args: {
                updateUserInput: {
                    type: updateUserInputType
                }
            },
            resolve: async (source, args, context) => {
                return updateUser(args.updateUserInput, context);
            }
        },
        deleteUser: {
            type: userType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, args, context) => {
                return deleteUser(args, context);
            }
        },
        deletePost: {
            type: postType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, args, context) => {
                return deletePost(args, context);
            }
        },
        deleteInterest: {
            type: interestType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: async (source, args, context) => {
                return deleteInterest(args, context);
            }

        }
        // updateStatus: {
        //     type: userType,
        //     args: {
        //         updateUserStatus: {
        //             type: updateUserStatusInputType
        //         }
        //     }
        // }
    }
});

module.exports = mutationType;