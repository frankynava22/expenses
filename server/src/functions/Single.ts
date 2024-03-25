import { AppDataSource } from "../data-source.js";
import { SingleExpense } from "../entity/Expenses/Single.js";

const expenseTable = AppDataSource.getRepository(SingleExpense);

export async function getExpense(){
    return await expenseTable.find();
}

//get specific expense related to user
export async function getExpenseByUserName(username){
        return await expenseTable.find({
            //where createdBy === username
            where: {createdBy: username}
        });
}