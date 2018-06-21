const Model = require('./model');
const UserEntity = require('../entities/user-entity');

/**
 * User Model
 */
class UserModel {
  /**
   * コンストラクタ
   */
  constructor() {
    this.model = new Model();
  }
  
  /**
   * 全件取得する
   * 
   * @return Entity の配列を Resolve する
   */
  findAll() {
    const sql = `
      SELECT
          id,
          name,
          age
      FROM
          user
    `;
    
    return this.model.findAll(sql)
      .then((rows) => {
        const users = [];
        
        for(const row of rows) {
          users.push(new UserEntity(row.id, row.name, row.age));
        }
        
        return users;
      });
  }
  
  /**
   * ID を指定して1件検索する
   * 
   * @param id ID
   * @return Entity を Resolve する
   */
  findById(id) {
    const sql = `
      SELECT
          id,
          name,
          age
      FROM
          user
      WHERE
          id = $id
    `;
    const params = {
      $id: id
    };
    
    return this.model.findOne(sql, params)
      .then((row) => {
        return new UserEntity(row.id, row.name, row.age);
      });
  }
  
  /**
   * 登録する
   * 
   * @param user 登録情報を持つ Entity
   * @return 登録できたら Resolve する
   */
  create(user) {
    // ID は自動採番させる
    const sql = `
      INSERT INTO user (
          name,
          age
      ) VALUES (
          $name,
          $age
      )
    `;
    const params = {
      $name: user.name,
      $age : user.age
    };
    
    return this.model.run(sql, params)
      .then((id) => {
        // 登録したデータを返却する
        return this.findById(id);
      });
  }
  
  /**
   * 登録 or 更新する
   * 
   * @param user 更新情報を持つ Entity
   * @return 登録 or 更新できたら Resolve する
   */
  update(user) {
    const sql = `
      REPLACE INTO user (
          id,
          name,
          age
      ) VALUES (
          $id,
          $name,
          $age
      )
    `;
    const params = {
      $id  : user.id,
      $name: user.name,
      $age : user.age
    };
    
    return this.model.run(sql, params);
  }
  
  /**
   * 削除する
   * 
   * @param id ID
   * @return 削除できたら Resolve する
   */
  delete(id) {
    const sql = `
      DELETE FROM
          user
      WHERE
          id = $id
    `;
    const params = {
      $id: id
    };
    
    return this.model.run(sql, params);
  }
}

module.exports = UserModel;
