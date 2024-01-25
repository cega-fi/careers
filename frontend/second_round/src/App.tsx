import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CegaEvmSDKV2 } from '@cega-fi/cega-sdk-evm';

interface Product {
  id: number;
  network_id: number;
  network_name: string;
  contract_product_uid: string; // contract's productId
  contract_type: string;
  group_id: string;
  name: string;
  product_underlying_asset_token_pairs: string[];
  subgraphProduct: any;
}

function App() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://scheduler.cega.fi/dashboard/products');
      const data = await response.json();
      const products = data.products.filter((product: Product) => {
        return product.contract_type === 'EvmDCSProduct';
      });
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Second Round Starter App
        </a>
      </header>
    </div>
  );
}

export default App;
