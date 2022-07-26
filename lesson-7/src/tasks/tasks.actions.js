import { taskListSelector } from './tasks.selector';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const taskListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  return function (dispatch) {
    tasksGateway.fetchTasksList().then(tasksList => dispatch(taskListRecieved(tasksList)));
  };
};
export const updatedTask = taskId => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = taskListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };
};
export const deleteTask = taskId => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
};
export const createTask = text => {
  return function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => dispatch(getTaskList()));
  };
};
