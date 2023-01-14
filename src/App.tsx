import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Layout from "./layout";
import Store from "./components/Store";
import DataContextPrivder from "./context/DataContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <DataContextPrivder>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:category/:id" element={<DetailsPage />} />
          </Routes>
        </Layout>
      </CartContextProvider>
    </DataContextPrivder>
  );
}

export default App;
