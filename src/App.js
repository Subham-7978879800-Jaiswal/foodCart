import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

import { Provider } from "react-redux";

import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/cart" element={<CardDetails />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
