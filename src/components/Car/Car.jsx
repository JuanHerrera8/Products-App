import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default function Car({productsCart, setProductsCart}) {
	return <ShoppingCart productsCart={productsCart} setProductsCart={setProductsCart} />;
}
