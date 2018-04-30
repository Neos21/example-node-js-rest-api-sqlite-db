const Controller = require('./controller');
const UserModel  = require('../models/user-model');
const UserEntity = require('../entities/user-entity');

/**
 * Users Controller
 */
class UsersController {
  /**
   * コンストラクタ
   */
  constructor() {
    this.controller = new Controller();
    this.userModel = new UserModel();
  }
  
  /**
   * 全件取得する
   * 
   * @param res レスポンス
   */
  findAll(res) {
    this.userModel.findAll()
      .then(this.controller.findSuccess(res))
      .catch(this.controller.findError(res));
  }
  
  /**
   * ID を指定して1件取得する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  findById(req, res) {
    const id = req.params.id;
    
    this.userModel.findById(id)
      .then(this.controller.findSuccess(res))
      .catch(this.controller.findError(res));
  }
  
  /**
   * 登録する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  create(req, res) {
    console.log('Controller Create', req.body);
    const user = new UserEntity();
    // user.id = req.body.id;
    user.name = req.body.name;
    user.age = req.body.age;
    
    this.userModel.create(user)
      .then(this.controller.editSuccess(res))
      .catch(this.controller.editError(res));
  }
  
  /**
   * 更新する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  update(req, res) {
    const user = new UserEntity();
    user.id = req.body.id;
    user.name = req.body.name;
    user.age = req.body.age;
    
    this.userModel.update(user)
      .then(this.controller.editSuccess(res))
      .catch(this.controller.editError(res));
  }
  
  /**
   * 削除する
   * 
   * @param req リクエスト
   * @param res レスポンス
   */
  delete(req, res) {
    const id = req.params.id;
    
    this.userModel.delete(id)
      .then(this.controller.editSuccess(res))
      .catch(this.controller.editError(res));
  }
}

module.exports = UsersController;
