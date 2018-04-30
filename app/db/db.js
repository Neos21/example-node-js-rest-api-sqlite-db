const sqliite3 = require('sqlite3').verbose();

/** DB ファイルを生成 or 取得する */
const db = new sqliite3.Database('./app/db/sqlite3-database.db');

/** DB の初期化処理 */
const init = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id    INTEGER  PRIMARY KEY  AUTOINCREMENT,
      name  TEXT,
      age   INTEGER
    )
  `);
};

module.exports = {
  db: db,
  init: init
};
