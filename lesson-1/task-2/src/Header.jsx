import React, { Component } from 'react';
import UserMenu from './UserMenu';
import userDataContext from './userData-context';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <UserMenu />
      </div>
    );
  }
}

Header.contextType = userDataContext;

export default Header;
