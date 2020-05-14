import React from 'react';
import UserInfo from '../components/CurrentUser/UserInfo';
import CashBalance from '../components/CurrentUser/CashBalance';
import Button from '../components/generalComponents/button';

export default class CurrentUser extends React.Component {
  render() {
    return (
      <>
        <h1>UsersPage</h1>
        <UserInfo />
        <CashBalance />
        <Button
          text="Создать аукцион"
        />
      </>
    )
  }
}
