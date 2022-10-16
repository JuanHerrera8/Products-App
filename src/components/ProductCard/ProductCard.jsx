import Button from '../Button/Button';
import Imagen from '../Imagen/Imagen';
import styles from './ProductCard.module.css';

export default function ProductCard({
	nombre,
	url,
	precio,
	descripcion,
	agregarProducto,
	action,
}) {
	return (
		<div className={styles.card}>
			<Imagen url={url} descripcion={descripcion} />
			<div className={styles.container}>
				<h2>{nombre}</h2>
				<p>💵${precio}</p>
				{/* <button name='Agregar al Carrito' /> */}
				<Button
					action={() => action({ nombre, url, precio, descripcion })}
					name='Agregar al Carrito'
				/>
			</div>
		</div>
	);
}
