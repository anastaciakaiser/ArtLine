import React, { useState } from 'react';
import './AccountSettings.css';

export default function AccountSettings() {
  const [avatar, setAvatar] = useState('default-avatar.jpg'); // Дефолтный аватар
  const [username, setUsername] = useState('Имя пользователя'); // Дефолтное имя пользователя
  const [email, setEmail] = useState('example@example.com'); // Дефолтный email
  const [password, setPassword] = useState(''); // State для пароля

  const handleAvatarChange = () => {
    // Логика смены аватара
    // ...
  };

  const handleUsernameChange = () => {
    // Логика смены имени пользователя
    // ...
  };

  const handleEmailChange = () => {
    // Логика смены email
    // ...
  };

  const handlePasswordChange = () => {
    // Логика смены пароля
    // ...
  };

  const handleDeleteAccount = () => {
    // Логика удаления аккаунта
    // ...
  };

  return (
    <div className="account-settings">
      <h2>Настройки профиля</h2>

      <div className="setting-item">
        <label>Аватар:</label>
        <img src={avatar} alt="Аватар" />
        <button  className='but' onClick={handleAvatarChange}>Сменить аватар</button>
      </div>

      <div className="setting-item">
        <label>Имя пользователя:</label>
        <span>{username}</span>
        <button className='but' onClick={handleUsernameChange}>Сменить имя пользователя</button>
      </div>

      <div className="setting-item">
        <label>Email:</label>
        <span>{email}</span>
        <button className='but' onClick={handleEmailChange}>Сменить email</button>
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
