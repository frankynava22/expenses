import { AppDataSource } from "../data-source.js";
import { User } from "../entity/Users/User.js";
const getUserTable = AppDataSource.getRepository(User);
//get all users
export async function getUsers() {
    return await getUserTable.find();
}
