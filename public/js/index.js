/**
 * DOM構築後に実行する関数の呼び出し
 * DOMと関数の紐付けをする
 */
window.onload = function() {

  // HTML要素の取得 & 表示
  let first_player_name = document.getElementById('first-player-name');
  let second_player_name = document.getElementById('second-player-name');
  let btn_start = document.getElementById('btn-start');

    console.log(first_player_name);
  // スタートボタンを押した時
  btn_start.onclick = function() {
    // 先攻プレイヤーの名前を取得してローカルストレージへ格納
    localStorage.setItem('first_player_name', getPlayerName(first_player_name));
    // 後攻プレイヤーの名前を取得してローカルストレージへ格納
    localStorage.setItem('second_player_name', getPlayerName(second_player_name));
  }

  /**
   * 名前を取得する関数
   * @param {string} player
   * @return {string} プレイヤー名
   */
  function getPlayerName(player) {
    let name = player.value;
    console.log(name);
    return name;
  }
}

