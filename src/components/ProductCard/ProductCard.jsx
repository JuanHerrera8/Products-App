import Button from '../Button/Button';
import Imagen from '../Imagen/Imagen';
import styles from './ProductCard.module.css';

export default function ProductCard({
	id,
	nombre,
	url,
	precio,
	descripcion,
	cantidadDisponible,
	addProduct,
	productsCart,
}) {
	const isAdd = () => {
		return productsCart.find(element => element.id === id);
	};

	return (
		<div className={styles.card}>
			<Imagen url={url} descripcion={descripcion} />
			<div className={styles.container}>
				<h2>{nombre}</h2>
				<p>💵${precio}</p>
				{/* <button name='Agregar al Carrito' /> */}
				<Button
					action={() => addProduct({ id, nombre, url, precio, descripcion, cantidadDisponible })}
					isDisabled={isAdd()}
					name='Agregar al Carrito'
				/>
			</div>
		</div>
	);
}
