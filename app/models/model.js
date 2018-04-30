const db = require('../db/db').db;
const ModelError = require('./model-error');

/**
 * Model : 共通処理
 */
class Model {
  /**
   * 全件取得する
   * 
   * @param sql SQL 文
   * @return 取得結果を Resolve する。エラー時・結果が0件の場合は Reject する
   */
  findAll(sql) {
    return new Promise((resolve, reject) => {
      db.all(sql, (error, rows) => {
        if(error) {
          reject(new ModelError(20, 'Internal Server Error'));
        }
        else if(rows === null || rows.length === 0) {
          reject(new ModelError(21, 'Entity Not Found'));
        }
        else {
          resolve(rows);
        }
      });
    });
  }
  
  /**
   * パラメータを指定して1件取得する
   * 
   * @param sql SQL 文
   * @param params パラメータ
   * @return 検索結果1件目を Resolve する。エラー時・結果が0件の場合は Reject する
   */
  findOne(sql, params) {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(sql);
      
      stmt.all(params, (error, rows) => {
        if(error) {
          reject(new ModelError(11, 'Invalid Arguments'));
        }
        else if(rows === null || rows.length === 0) {
          reject(new ModelError(21, 'Entity Not Found'));
        }
        else {
          const row = rows[0];
          resolve(row);
        }
      });
    });
  }
  
  /**
   * パラメータを指定して更新系処理を実行する
   * 
   * @param sql SQL 文
   * @param params パラメータ
   * @return 1件追加・更新・削除したら Resolve する。エラー時・結果が0件の場合は Reject する
   */
  run(sql, params) {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(sql);
      
      // bind() して this を書き換えているのでアロー関数を使わない
      stmt.run(params, function(error) {
        if(this.changes === 1) {
          // lastID は INSERT 時のみ ID を返す
          resolve(true);
        }
        else if(this.changes === 0) {
          reject(new ModelError(21, 'Entity Not Found'));
        }
        else {
          reject(new ModelError(11, 'Invalid Arguments'));
        }
      });
    });
  }
}

module.exports = Model;
