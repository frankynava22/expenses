import { AppDataSource } from "../data-source.js";
import { GroupExpense } from "../entity/Expenses/Group.js";
const expenseTable = AppDataSource.getRepository(GroupExpense);
export async function getGroupExpense() {
    return await expenseTable.find();
}
