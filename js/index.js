"use strict";
// DOMの取得
var button = document.getElementById("omikujibtn");
var result = document.getElementById("result");
button.addEventListener("click", function () {
    var fortunes = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
    var number = Math.floor(Math.random() * fortunes.length);
    result.textContent = "\u3042\u306A\u305F\u306E\u904B\u52E2\u306F...".concat(fortunes[number], "\u3067\u3059!");
});
