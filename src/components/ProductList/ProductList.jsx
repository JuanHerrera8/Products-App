import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

export default function ProductList({ addProduct, data, productsCart }) {
	return (
		<div className={styles.wrapper}>
			{data.map(product => (
				<ProductCard
					key={product.id}
					id={product.id}
					nombre={product.nombre}
					url={product.url}
					precio={product.precio}
					descripcion={product.descripcion}
					cantidadDisponible={product.cantidadDisponible}
					addProduct={addProduct}
					productsCart={productsCart}
				/>
			))}
		</div>
	);
}
