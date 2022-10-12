export default function formatTagName(name) {
	let output = '';
	const array = name.split('-');
	for (let index = 0; index < array.length; index++) {
		output += array[index].substr(0, 1).toUpperCase() + array[index].substr(1) + ' ';
	}
	return output.trim();
}