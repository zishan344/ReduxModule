const fetch = require("node-fetch");
const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am deleing you");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};
module.exports = {
  delayActionMiddleware,
  fetchAsyncMiddleware,
};
