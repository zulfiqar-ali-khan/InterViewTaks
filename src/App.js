import { BrowserRouter, Routes, Route } from "react-router-dom";
/*
*********************
CSS AREA
********************
*/
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css'
/*
*********************
        Libs IMPORT AREA
********************
*/

import { Provider } from "react-redux";
import store from "./redux/store";


/*
*********************
        PAGES IMPORT AREA
********************
*/
import Home from "./pages/Home";
import CardList from "./pages/CardList";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardlist" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
