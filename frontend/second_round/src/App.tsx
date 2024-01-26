import React, { useEffect, useState } from 'react';
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
        <img src={"https://cdn.glitch.global/11976b1b-56cf-4260-a8a7-c4ffa2875b78/transaction-swirl.png?v=1648345672287"} className="App-logo" alt="logo" style={{ width: '100px', height: "100px"}}/>
        <p>
          Edit <code>src/App.tsx</code> to get started.
        </p>
        <p>Good luck!</p>
      </header>
    </div>
  );
}

export default App;
