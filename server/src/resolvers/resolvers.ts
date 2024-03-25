import { getGroupExpense } from "../functions/Group.js";
import { getExpense } from "../functions/Single.js";
import { getSingleUser, getUsers } from "../functions/Users.js";
import { getExpenseByUserName } from "../functions/Single.js";

//we define resolvers to point to the data to display for the queries
//this is where the data goes in
export const resolvers = {
    Query: {
        //we query our database
        //skip parent object, only want username
        user: (_, {username}) => getSingleUser(username),
        users: () => getUsers(),
        expenses: () => getExpense(),
        groupExpenses: () => getGroupExpense(),
    },

    // User: {
    //     expense: (user) => getExpenseByUserName(user.username),
    //     }
};
