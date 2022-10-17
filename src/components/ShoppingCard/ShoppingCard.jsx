import { calcularTotales } from '../Car/Car';
import { useEffect } from 'react';
import Imagen from '../Imagen/Imagen';
import styles from '../ShoppingCard/ShoppingCard.module.css';

export default function ShoppingCard({
	productsCart,
	cupon,
	deleteProduct,
	setProductsCart,
	setTotales,
}) {
	const handleChange = (value, index, id) => {
		productsCart[index].newCantidad = Number(value);
		productsCart[index].newCantidad === 0 && deleteProduct(id);
		setTotales(calcularTotales(productsCart, cupon));
	};

	useEffect(() => {
		setTotales(calcularTotales(productsCart, cupon));
	}, [productsCart]);

	return productsCart.map(
		(product, index) =>
			product.newCantidad !== 0 && (
				<div key={index} className={styles.container}>
					<Imagen url={product.url} />
					<div>
						<p>{product.nombre}</p>
						<p>{product.descripcion}</p>
						<p>💵${product.precio}</p>
					</div>
					<input
						type='number'
						defaultValue={product.newCantidad}
						min={0}
						max={product.cantidadDisponible}
						onChange={e => handleChange(e.target.value, index, product.id)}
					/>
				</div>
			)
	);
}
