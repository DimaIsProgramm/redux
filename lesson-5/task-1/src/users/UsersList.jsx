import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';

import * as userActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

class UsersList extends React.Component {
  itemsPerPage = 3;

  render() {
    const { users, currentPage, nextPage, prevPage } = this.props;

    const usersToRender = users.slice(
      this.itemsPerPage * currentPage,
      currentPage * this.itemsPerPage + this.itemsPerPage,
    );

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goNext={nextPage}
          goPrev={prevPage}
          totalItems={usersToRender.length}
          itemsPerPage={this.itemsPerPage}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  nextPage: userActions.goNext,
  prevPage: userActions.goPrev,
};

export default connect(mapState, mapDispatch)(UsersList);
