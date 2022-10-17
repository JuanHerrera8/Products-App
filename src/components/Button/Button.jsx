export default function Button({ name, action, isDisabled }) {
	console.log(isDisabled)
	return <button disabled = {isDisabled} onClick={action}>{name}</button>;
}
