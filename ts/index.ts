// DOMの取得
const button = document.getElementById("omikujibtn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

// クリックイベント
button.addEventListener("click", function () {
  // おみくじの結果
  const fortunes = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
  // 配列からランダムにおみくじの結果を選ぶ
  const number = Math.floor(Math.random() * fortunes.length);
  // 結果を表示する
  result.textContent = `あなたの運勢は...${fortunes[number]}です!`;
});
