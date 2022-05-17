import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CardContainer from "./components/card-container";
import store from "./components/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CardContainer />
      </Provider>
    </div>
  );
}

export default App;
