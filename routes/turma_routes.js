import express from "express"
//import {getTrumas} from "../controllers/turma_controllers.js"
const router = express.Router()

router.get('/turma', getTurmas)