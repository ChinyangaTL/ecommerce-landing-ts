import React from 'react';
import styled from 'styled-components';
import CartModal from './components/CartModal';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Main className="App">
      <Navbar />
      <Sidebar />
      <CartModal />
      <Product />
    </Main>
  );
}

const Main = styled.main`
  //background-color: #000;
  height: 100vh;
`;

export default App;
