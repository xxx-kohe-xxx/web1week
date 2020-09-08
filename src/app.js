/**
 * DOM構築後に実行する関数の呼び出し
 * DOMと関数の紐付けをする
 */
window.onload = function() {

  let target_value = Math.round(Math.random() * (5 - 3) + 3);
  let count_display = document.getElementById('display_count');
  count_display.innerHTML = target_value;

  let first_player_btn = document.getElementById('btn_count_down');
  let second_player_btn = document.getElementById('btn_count_down');
  let reset_btn = document.getElementById('btn_reset');

  // console.log(target_value);

  count_down_btn.onclick = function(){
      countDown();
  }

  // カウントを減らしていくメソッド
  function countDown() {
    // if (player.count = 3){
    //   isTarn = false;
    // }
    target_value--;
    count_display.innerHTML = target_value;
  }
}



let first_player = {
  name: "kohe",
  isTarn: true,
  count: 0,
}

let second_player = {
  name: "shota",
  isTarn: true,
  count: 0,
}