// 二倍にする関数 consoleでdouble(4);を入力すると出力される
// function double(num) {
//     return num * 2
// }

// let 再代入可
// const 定数

// ユーザーが入力したデータを取得　イベント＝submit

const form = document.getElementById("form")
const input = document.getElementById("input")
// ulタグにアクセスするための記述
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event){
    // デフォルトのイベントを中断する
    event.preventDefault();
    // addという関数を作成して呼び出す
    add();
});

function add() {
    // 変数宣言
    let todoText = input.value
    
    // 条件分岐　文字が一文字以上
    // .length > 0　が入らなくてもfolseとして自動的に認識される（暗黙値）
    if (todoText) {
        // liタグを作る
        const li = document.createElement("li");
        // ユーザーが入力した値をとってきたい
        li.innerText = todoText;
        // liタグのクラスに接続　クラス追加
        li.classList.add("list-group-item");
        // ulタグの子供としてliタグを指定　ユーザーが入力したタグをliタグとして追加できる
        ul.appendChild(li);
        // フォームに入力した文字を空に
        input.value = "";
        saveDate();
    };
}

// 値をローカルストレージに保存
function saveDate() {
    // liタグの全てのテキストを取得
    const lists = document.querySelectorAll("li");
    // から配列
    let todos = [];
    // 全ての配列要素に対して処理
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    // todosをJSONに変換
    localStorage.setItem("todos", JSON.stringify(todos));
}