import turma from "../turma_model.js"

export const getTrumas = async (req, res) => {
    try {
        const turmas = await turma.findAll()
        res.send(turmas)
    } catch (e) {
        console.log("Erro ao acessar a tabela Turma", e)
    }
}
