import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { Provider } from './contexts/ItemsContexts';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/c" element={<div><h1>CONTACTO</h1></div>} />  */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )


}
export default App;
