import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as tasksAction from '../tasks/tasks.actions';
import { sortedTasksListSelector } from '../tasks/tasks.selector';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }
  render() {
    const { createTask, updatedTask, deleteTask, tasks } = this.props;
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <ul className="list">
          {tasks.map(task => (
            <Task key={task.id} {...task} onChange={updatedTask} onDelete={deleteTask} />
          ))}
        </ul>
      </div>
    );
  }
}
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updatedTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updatedTask: tasksAction.updatedTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => {
  return { tasks: sortedTasksListSelector(state) };
};

export default connect(mapState, mapDispatch)(TasksList);
