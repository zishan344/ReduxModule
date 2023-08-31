import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(upcomingState);
  return next(action);
};

export default myLogger;
