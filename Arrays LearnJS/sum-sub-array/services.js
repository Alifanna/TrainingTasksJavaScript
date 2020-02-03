function log(action) {
  console.log(`I'm a log function and action is ${action}`);
  action();
  console.log("Action was completed!");
}