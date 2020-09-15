import React, { Component } from "react";
import "./App.css";
import ContainersCart from "./Redux/Containers/ContainersCart";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import ContainersMessage from "./Redux/Containers/ContainersMessage";
import ContainersProducts from "./Redux/Containers/ContainersProducts";
import { Provider } from "react-redux";
import configureStore from "./Redux/configStore";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Menu />
          <ContainersProducts />
          <ContainersMessage />
          <ContainersCart />
          <Footer />
        </div>
      </Provider>
    );
  }
}
export default App;
