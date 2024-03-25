//specify js since when running, it looks for dist/*.js files
import { User } from './entity/Users/User.js';
import { SingleExpense } from './entity/Expenses/Single.js';
import { GroupExpense } from './entity/Expenses/Group.js';
import { DataSource } from 'typeorm';
//to connect our database
//an instance of our database
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/database.sqlite",
    entities: [GroupExpense, SingleExpense, User],
    //for dev this is fine, for production change
    synchronize: false,
    logging: true,
});
