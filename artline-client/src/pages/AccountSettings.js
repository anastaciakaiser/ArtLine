// AccountSettings.js
import React, { useState } from 'react';
import './AccountSettings.css';

export default function AccountSettings() {
  const [avatar, setAvatar] = useState('default-avatar.jpg');
  const [username, setUsername] = useState('Имя пользователя');
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('');

  const handleAvatarChange = () => {
    // Logic for changing avatar
    // ...
  };

  const handleUsernameChange = () => {
    // Logic for changing username
    // ...
  };

  const handleEmailChange = () => {
    // Logic for changing email
    // ...
  };

  const handlePasswordChange = () => {
    // Logic for changing password
    // ...
  };

  const handleDeleteAccount = () => {
    // Logic for deleting the account
    // ...
  };

  return (
    <div className="account-settings">
      <h2>Настройки профиля</h2>

      <div className="setting-item">
        <label>Аватар:</label>
        <img src={avatar} alt="Аватар" />
        <button onClick={handleAvatarChange}>Сменить аватар</button>
      </div>

      <div className="setting-item">
        <label>Имя пользователя:</label>
        <span>{username}</span>
        <button onClick={handleUsernameChange}>Сменить имя пользователя</button>
      </div>

      <div className="setting-item">
        <label>Email:</label>
        <span>{email}</span>
        <button onClick={handleEmailChange}>Сменить email</button>
      </div>

      <div className="setting-item">
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handlePasswordChange}>Сменить пароль</button>
      </div>

      <button onClick={handleDeleteAccount}>Удалить аккаунт</button>
    </div>
  );
}
