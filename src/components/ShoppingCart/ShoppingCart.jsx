import ShoppingCard from '../ShoppingCard/ShoppingCard';
import styles from '../ShoppingCart/ShoppingCart.module.css';

export default function ShoppingCart({
	productsCart,
	deleteProduct,
	setProductsCart,
	setTotales,
	cupon
}) {
	return (
		<div className={styles.container}>
			<h2>Shopping Cart</h2>
			<hr />
			<div>
				<ShoppingCard
					productsCart={productsCart}
					deleteProduct={deleteProduct}
					setProductsCart={setProductsCart}
					setTotales={setTotales}
					cupon={cupon}
				/>
			</div>
		</div>
	);
}
