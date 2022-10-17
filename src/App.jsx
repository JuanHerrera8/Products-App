import { useEffect, useState } from 'react';
import './App.css';
import Car from './components/Car/Car';
import ProductList from './components/ProductList/ProductList';
import { products as data } from './products';
function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(data);
	}, []);

	const [productsCart, setProductsCart] = useState([]);

	function addProduct(product) {
		setProductsCart([...productsCart, { ...product, newCantidad: 1 }]);
	}

	/* function addProduct(product) {
		console.log('product', product);
		console.log('productsCart', productsCart);

		const itemInCart = productsCart.find(item => item.id === product.id);
		console.log('itemInCart', itemInCart);

		return itemInCart
			? setProductsCart([
					...productsCart,
					{ ...product, newCantidad: (product.newCantidad + 1) },
			  ])
			: setProductsCart([...productsCart, { ...product, newCantidad: 1 }]);
	} */

	/* function addProduct(product) {
		console.log('product', product);
		console.log('productsCart', productsCart);

		const itemInCart = productsCart.find(item => item.id === product.id);
		console.log('itemInCart', itemInCart);

		return itemInCart
			? productsCart.map(item =>
					item.id === product.id
						? setProductsCart([
								...productsCart,
								{ ...product, newCantidad: product.newCantidad + 1 },
						  ])
						: product
			  )
			: setProductsCart([...productsCart, { ...product, newCantidad: 1 }]);
	} */

	/* function addProduct(product, index) {
		console.log('product', product)
		console.log('productsCart', productsCart)
		productsCart.map(item =>
			item.id !== product.id
				? (productsCart[index].newCantidad = Number(
						productsCart[index].newCantidad + 1
				  ))
				: setProductsCart([...productsCart, { ...product, newCantidad: 1 }])
		);
	} */

	function deleteProduct(id) {
		setProductsCart(productsCart.filter(prd => prd.id !== id));
	}

	return (
		<>
			<h1>Products🌟</h1>
			<hr />
			<ProductList
				data={products}
				addProduct={addProduct}
				productsCart={productsCart}
			/>
			<hr />
			<Car
				productsCart={productsCart}
				setProductsCart={setProductsCart}
				deleteProduct={deleteProduct}
			/>
		</>
	);
}

export default App;
