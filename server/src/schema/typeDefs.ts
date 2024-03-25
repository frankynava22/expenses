//define our schema
//basically the structure of our data
export const typeDefs = `#graphql
    #queryable fields for our custom type User
    #ID is a unique indentier, ! makes it required
    type User{
        id: ID!
        name: String!
        username: String!
        password: String!
        # each expense belongs to someone
        expense: [Expense]
    }

    type Expense{
        id: ID
        type: String
        amount: Int
        createdBy: String
        createdOn: String
    }

    type GroupExpense{
        id: ID!
        groupname: String!
        type: String!
        amount: Int!
        createdBy: String!
        createdOn: String!
    }

    #Client accessible queries
    type Query{
        #specific user
        user(username: String!): User #for a username, return a user object
        users: [User],
        expenses: [Expense],
        groupExpenses: [GroupExpense],
    }
`;
