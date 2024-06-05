import { Sequelize } from "sequelize";

import bd from "../config/database.js"

const Turma = bd.define('turma', {
    id_turma: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    nome_turma: {
        type:Sequelize.STRING(100)
    },
    turno_turma: {
        type:Sequelize.STRING(100)
    }
}, {
    freezeTableName: true,
    timestamps:false
})
export default Turma