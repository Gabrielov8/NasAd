// import React from 'react';
// import { Link } from 'react-router-dom';

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
// export default function NavBar() {

//   return (
//     <>
//       <Link to="/regform">Регистрация</Link>
//       <Link to="/">Главная</Link>
//       <Link to="/users/1">Личный кабинет Блогера</Link>
//       <Link to="/org/1">Личный кабинет Рекламодателя</Link>
//     </>
//   )
// }
