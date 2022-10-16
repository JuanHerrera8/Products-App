import { useState } from 'react';
import './App.css';
import Car from './components/Car/Car';
import ProductList from './components/ProductList/ProductList';

function App() {
	const [productsCart, setProductsCart] = useState([]);

	function agregarProducto(product) {
		setProductsCart([...productsCart, product]);
	}

	return (
		<>
			<h1>Products🌟</h1>
			<hr />
			<ProductList action={agregarProducto} />
			<hr />
			<Car productsCart={productsCart} setProductsCart={setProductsCart} />
		</>
	);
}

export default App;
