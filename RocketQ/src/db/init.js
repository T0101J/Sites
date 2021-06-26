const Database = require("./config")

const initDb = {
    async init(){
// se usa async precisa usar o await e vice e versa (nao esquece parceiro)
        const db = await Database()

// roda o database e esperar a resposta do database continua a execução -> await 
        await db.exec(`CREATE TABLE rooms (
            id INTENGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT 
        )`);

//fecha a conexao com o bd apos executar codigo anteior
        await db.close()
    }
}

initDb.init();


