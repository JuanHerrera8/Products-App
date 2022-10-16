import Imagen from '../Imagen/Imagen';
import styles from '../ShoppingCard/ShoppingCard.module.css'

export default function ShoppingCard({ productsCart }) {
	return productsCart.map((product, index) => (
		<div className={styles.container} key={index}>
			<Imagen url={product.url} />
			<div>
				<p>{product.nombre}</p>
				<p>{product.descripcion}</p>
				<p>💵${product.precio}</p>
			</div>
			<input type='number' defaultValue={1} onFocus />
		</div>
	));
}
