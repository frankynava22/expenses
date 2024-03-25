import { AppDataSource } from "../data-source.js";
import { User } from "../entity/Users/User.js";

const getUserTable = AppDataSource.getRepository(User);

//get all users
export async function getUsers(){
    return await getUserTable.find();
}

export async function getSingleUser(_username){
    return await getUserTable.findOne({
        where: {username: _username},
    });
}

