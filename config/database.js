import { sequelize } from "sequelize";

const db = new Sequelize('universidade', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db 