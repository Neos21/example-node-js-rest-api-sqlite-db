/**
 * Model Error オブジェクト
 */
class ModelError {
  /**
   * コンストラクタ
   * 
   * @param errorCode エラーコード
   * @param errorMessage エラーメッセージ
   */
  constructor(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }
}

module.exports = ModelError;
