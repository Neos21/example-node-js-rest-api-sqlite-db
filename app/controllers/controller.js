/**
 * Controller : 共通処理
 */
class Controller {
  /**
   * 取得系の成功時処理
   * 
   * @param res レスポンス
   * @return レスポンス
   */
  findSuccess(res) {
    return (result) => {
      res.status(200);  // Found
      res.json(result);
    };
  }
  
  /**
   * 取得系の失敗時処理
   * 
   * @param res レスポンス
   * @return レスポンス
   */
  findError(res) {
    return (error) => {
      res.status(404);  // Not Found
      res.json(error);
    };
  }
  
  /**
   * 更新系の成功時処理
   * 
   * @param res レスポンス
   * @return レスポンス
   */
  editSuccess(res) {
    return (result) => {
      res.status(201);  // Created・Updated・Deleted
      res.json(result);
    };
  }
  
  /**
   * 更新系の失敗時処理
   * 
   * @param res レスポンス
   * @return レスポンス
   */
  editError(res) {
    return (error) => {
      res.status(500);  // Internal Server Error
      res.json(error);
    };
  }
}

module.exports = Controller;
