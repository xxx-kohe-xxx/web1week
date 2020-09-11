/**
 * DOM構築後に実行する関数の呼び出し
 * DOMと関数の紐付けをする
 */
window.onload = function() {

  // カウントダウンしていく初期値
  let target_value =10;
  // let target_value = Math.round(Math.random() * (5 - 3) + 3);
  // 初期値を表示させる
  let count_display = document.getElementById('display_count');
  count_display.innerHTML = target_value;

  let first_player = {
    name: "プレイヤー1",
    count: 0,
  }

  let second_player = {
    name: "プレイヤー2",
    count: 0,
  }

  let turn = {
    current: first_player
  }

  // HTML要素の取得 & 表示
  let display_turn = document.getElementById('display_turn');
  display_turn.innerHTML = turn.current.name + "の番です";
  let pass_btn = document.getElementById('btn_pass');
  let first_player_btn = document.getElementById('btn_first_player');
  let second_player_btn = document.getElementById('btn_second_player');
  let result = document.getElementById('result');
  let bomb = document.getElementById('display_bomb');
  let explosion = document.getElementById('display_explosion');

  // パスボタンを押した時
  pass_btn.onclick = function() {
    turnSwitch(turn.current);
  }

  // プレイヤー1のカウントダウンボタンを押した時
  first_player_btn.onclick = function(){
    threeCount(first_player);
    countDown();
    gameOver();
  }
  // プレイヤー2のカウントダウンボタンを押した時
  second_player_btn.onclick = function(){
    threeCount(second_player);
    countDown();
    gameOver();
  }

  // カウントを減らしていくメソッド
  function countDown() {
    if (target_value === 0) {
      return;
    }
    target_value--;
    count_display.innerHTML = target_value;
  }

  // ゲーム終了を判断するメソッド
  function gameOver() {
    if (target_value === 0) {
      console.log("GAME OVER");
      let message = turn.current.name;
      bomb.classList.add('invisible');
      explosion.classList.remove('invisible');
      display_turn.innerHTML = message + "の負けです";
    }
  }

  // 
  function threeCount(player) {
    pass_btn.disabled = false;
    player.count++;
    if (player.count === 3){
      turnSwitch(player);
      player.count = 0;
    }
  }

  function turnSwitch(currentPlayer) {
    if (target_value === 0) {
      pass_btn.disabled = true;
      return;
    }
    switch (currentPlayer) {
      case first_player:
        turn.current = second_player;
        first_player_btn.disabled = true;
        second_player_btn.disabled = false;
        break;
      case second_player:
        turn.current = first_player;
        first_player_btn.disabled = false;
        second_player_btn.disabled = true;
        break;
    }
    console.log(currentPlayer.name);
    console.log(currentPlayer.count);
    currentPlayer.count = 0;
    pass_btn.disabled = true;
    display_turn.innerHTML = turn.current.name + "の番です";
  }
}

