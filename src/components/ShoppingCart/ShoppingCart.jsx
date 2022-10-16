import ShoppingCard from '../ShoppingCard/ShoppingCard';
import styles from '../ShoppingCart/ShoppingCart.module.css'

export default function ShoppingCart({productsCart}) {

	return (
		<div className={styles.container}>
			<h2>Shopping Cart</h2>
			<hr />
			<ShoppingCard 
				productsCart={productsCart}
			/>
		</div>
	);
}
