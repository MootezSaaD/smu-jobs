// Middleware for dispatching functions
const func = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action();
  } else {
    next(action); // If not , pass it to the reducer
  }
};

export default func;
