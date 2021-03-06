const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt
} = require('graphql');
const userType = require('./types/userType')
const jobType = require('./types/jobType')
const postType = require('./types/postType')
const interestType = require('./types/interestType')
const friendRequestType = require('./types/friendRequestType')
const loginResultType = require('./types/loginResultType')
const loginInputType = require('./inputTypes/loginInputType')
const createUserInputType = require('./inputTypes/createUserInputType')
const updateUserInputType = require('./inputTypes/updateUserInputType')
const updateUserAsAdminInputType = require('./inputTypes/updateUserAsAdminInputType')
const createPostInputType = require('./inputTypes/createPostInputType')
const addInterestInputType = require('./inputTypes/addInterestInputType')
const addInterestInputTypeWithInterestId = require('./inputTypes/addInterestInputTypeWithInterestId')
const loginHandler = require('../repository/login')
const db = require('../models')


const {createUser, updateUser, deleteUser, updateUserAsAdmin, resignFromJob, getAJob} = require('../repository/users');
const {deletePost,deletePostAsAdmin, createPost} = require('../repository/posts')
const {deleteInterest, addInterest} = require('../repository/interests')
const {sendFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend} = require('../repository/friendRequests')
const {contentDisposition} = require("express/lib/utils");


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
            updateUserAsAdmin: {
                type: userType,
                args: {
                    updateUserAsAdminInput: {
                        type: updateUserAsAdminInputType
                    }
                },
                resolve: async (source, args, context) => {
                    return updateUserAsAdmin(args.updateUserAsAdminInput, context);
                }
            },
            createPost: {
                type: postType,
                args: {
                    createPostInput: {
                        type: createPostInputType,
                    }
                },
                resolve: async (source, args, context) => {
                    return createPost(args.createPostInput, context)
                }
            },
            addInterestByInterestId: {
                type: new GraphQLList(interestType),
                args: {
                    addInterestInput: {
                        type: addInterestInputTypeWithInterestId,
                    }
                },
                resolve: async (source, args, context) => {
                    return addInterest(args.addInterestInput, context)
                }
            },
            addInterestByInterestName: {
                type: new GraphQLList(interestType),
                args: {
                    addInterestInput: {
                        type: addInterestInputType,
                    }
                },
                resolve: async (source, args, context) => {
                    return addInterest(args.addInterestInput, context)
                }
            },
            deleteUser: {
                type: GraphQLBoolean,
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
                type: new GraphQLList(postType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return deletePost(args, context);
                }
            },
            deletePostAsAdmin: {
                type: new GraphQLList(postType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return deletePostAsAdmin(args, context);
                }
            },
            deleteInterest: {
                type: new GraphQLList(interestType),
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return deleteInterest(args, context);
                }

            },
            sendFriendRequest: {
                type: GraphQLBoolean,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return sendFriendRequest(args, context)
                }
            },
            acceptFriendRequest: {
                type: GraphQLBoolean,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return acceptFriendRequest(args, context)
                }
            },
            rejectFriendRequest: {
                type: GraphQLBoolean,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return rejectFriendRequest(args, context)
                }
            },
            unfriend:{
                type:GraphQLBoolean,
                args:{
                    friendId:{
                        type:new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) =>{
                    return unfriend(args,context);
                }
            },
            resignFromJob: {
                type: GraphQLBoolean,
                resolve: async (source, args, context) => {
                    return resignFromJob(context)
                }
            },
            getAJob: {
                type: jobType,
                args: {
                    jobId: {
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: async (source, args, context) => {
                    return getAJob(args, context);
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
    })
;

module.exports = mutationType;