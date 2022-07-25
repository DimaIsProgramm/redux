import React, { Component } from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { filterOptions } from './users.actions';

class UsersList extends Component {
  onChange = e => this.props.filterUsers(e.target.value);

  render() {
    const { filterText, usersList, count } = this.props.users;
    return (
      <div>
        <Filter count={count} onChange={this.onChange} filterText={filterText} />

        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users,
  };
};

const mapDispatch = {
  filterUsers: filterOptions,
};
export default connect(mapState, mapDispatch)(UsersList);
