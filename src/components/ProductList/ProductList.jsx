import { useEffect, useState } from 'react';
import { products as data } from '../../products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css'

export default function ProductList({action}) {
	/* const [products, setProducts] = useState([]); */

/* 	useEffect(() => {
		setProducts(data);
	}, []); */

	return (
		<div className={styles.wrapper}>
			{data.map(product => (
				<ProductCard
					key={product.id}
					nombre={product.nombre}
					url={product.url}
					precio={product.precio}
					descripcion={product.descripcion}
					action={action}
				/>
			))}
		</div>
	);
}
