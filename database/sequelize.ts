import { Sequelize } from "sequelize";
import { initModels } from "./models/init-models";
import dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize(
    //@ts-ignore later add type definition.
    process.env.DB,
    process.env.DB_USER,
    process.env.PASSWORD,
    {
        dialect : 'mssql',
        max: 5,
        min: 0,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

const models = initModels(sequelize)

type DB = {
    sequelize : Sequelize,
    models: typeof models // Database models for table. Have types for this later.
}

export const db:DB = {
    sequelize,
    models
} 