/**
 * User Entity
 */
class UserEntity {
  /**
   * コンストラクタ
   * 
   * @param id ID
   * @param name 氏名
   * @param age 年齢
   */
  constructor(id, name, age) {
    this.id   = id;
    this.name = name;
    this.age  = age;
  }
}

module.exports = UserEntity;
