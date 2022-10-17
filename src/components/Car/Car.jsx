import { useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Summary from '../Summary/Summary';
import styles from '../Car/Car.module.css';

export const calcularTotales = (productsCart, cupon) => {
	let subtotal = 0;
	let total = 0;

	productsCart?.map(
		product => (subtotal = subtotal + (product.precio * product.newCantidad))
	);

	
	total = subtotal - cupon;

	return { subtotal, total };
};

export default function Car({ productsCart, setProductsCart, deleteProduct }) {
	const [totales, setTotales] = useState(0);
	const [cupon, setCupon] = useState(0);

	return (
		<div className={styles.container}>
			<ShoppingCart
				productsCart={productsCart}
				setProductsCart={setProductsCart}
				deleteProduct={deleteProduct}
				setTotales={setTotales}
				cupon={cupon}
			/>
			<Summary totales={totales} setTotales={setTotales} productsCart={productsCart} cupon={cupon} setCupon={setCupon} />
		</div>
	);
}
