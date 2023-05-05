import { useState } from 'react';
import { Link } from 'react-router-dom';

//簡易的にログイン画面実装
const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    // ログイン処理を実装
    setLoggedIn(true);
  }

  return (
        <div>
          <input type="text" placeholder="ユーザー名" />
          <input type="password" placeholder="パスワード" />
          <Link to="/home">
          <button onClick={handleLogin}>ログイン</button>
          </Link>
        </div>
  );
}

export default LoginForm;