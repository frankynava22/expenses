import { getGroupExpense } from "../functions/Group.js";
import { getExpense } from "../functions/Single.js";
import { getUsers } from "../functions/Users.js";
//we define resolvers to point to the data to display for the queries
//this is where the data goes in
export const resolvers = {
    Query: {
        //we query our database
        user: () => getUsers(),
        users: () => getUsers(),
        expenses: () => getExpense(),
        groupExpenses: () => getGroupExpense(),
    },
    // User: {
    //     expense: (user) => getExpenseByUserName(user.username),
    //     }
};
