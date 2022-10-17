import { useEffect } from 'react';
import { calcularTotales } from '../Car/Car';
import styles from '../Summary/Summary.module.css' 

export default function Summary({productsCart, setTotales, totales, total, cupon, setCupon}) {
	
	useEffect(() => {
		setTotales(calcularTotales(productsCart, cupon));
	}, [cupon]);

	return (
		<div className={styles.container}>
			<h2>Summary</h2>
			<hr />
			<label>
				<b>ENTER COUPON CODE</b>
			</label>
			<input type='number' value={cupon} onChange={(e) => setCupon(e.target.value)} />
			<hr />
			<p>SUBTOTAL   {totales.subtotal}</p> <br />
			<p>SHIPING   FREE</p> <br />
			<p>COUPON   {cupon}</p>
			<hr />
			<p>TOTAL    {totales.total}</p>
		</div>
	);
}
