import {
  initGlobalState,
  registerMicroApps,
  setDefaultMountApp,
  start,
} from "qiankun";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerMicroApps([
  {
    name: "child1",
    entry: "//localhost:3001",
    container: "#app",
    activeRule: "/child1",
  },
  {
    name: "child2",
    entry: "//localhost:3002",
    container: "#app",
    activeRule: "/child2",
  },
]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

setDefaultMountApp("/child1");
const actions = initGlobalState({
  loggedIn: false,
});
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

start({
  // sandbox: false,
});
