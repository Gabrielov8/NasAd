import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ id, orgId }) {

  return (
    <>
      <Link to="/regform">Регистрация</Link>
      <Link to="/">Главная</Link>
      <Link to={`/users/${id}`}>Личный кабинет Блогера</Link>
      <Link to={`/users/${orgId}`}>Личный кабинет Рекламодателя</Link>
    </>
  )
}
