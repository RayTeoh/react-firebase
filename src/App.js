import React from "react";
import "./App.css";
import AppLayout from "./component/AppLayout";
import { Provider as ReduxProvider } from "react-redux";
import store from './reducers/';

class App extends React.Component {
  render() {
    return <ReduxProvider store={store}>
         <AppLayout />
     </ReduxProvider>;
  }
}

export default App;
