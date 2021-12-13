const {GraphQLObjectType, GraphQLString, GraphQLNonNull} = require('graphql');
const userType = require('./types/userType')
const loginResultType = require('./types/loginResultType')
const loginInputType = require('./inputTypes/loginInputType')
const createUserInputType = require('./inputTypes/createUserInputType')
const updateUserInputType = require('./inputTypes/updateUserInputType')
const loginHandler = require('../repository/login')
const db = require('../models')

const { createUser, updateUser } = require('../repository/users');

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
        }
    }
});

module.exports = mutationType;