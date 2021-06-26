const sqlite3 = require("sqlite3"); //importanto sqlite
const { open } = require("sqlite") // importanto open da splite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });