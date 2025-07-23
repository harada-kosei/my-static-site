// フォームの送信イベントを処理
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // ページのリロードを防止

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // フォームの内容をコンソールに表示（実際の送信処理はサーバーサイドで行う必要があります）
  console.log(`名前: ${name}`);
  console.log(`メールアドレス: ${email}`);
  console.log(`メッセージ: ${message}`);

  // フィードバックメッセージを表示
  alert('メッセージが送信されました。ありがとうございます！');
});
