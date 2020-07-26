// if ('ibu' === 'ubi') {
// 	console.log('Palindrom');
// } else {
// 	console.log('Buka Palindrom');
// }

// let i = true;
// // TRUE = true |1| string
// // FALSE = false |0|
// if (i !== true) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// const phone = 'Samsung';
// switch (phone) {
// 	case 'Nokia': {
// 		console.log('Hp Anda Nokia');
// 		break;
// 	}
// 	case 'iPhone': {
// 		console.log('Hp Anda iPhone');
// 		break;
// 	}
// 	default: {
// 		console.log('Hp Anda Tidak Diketahui');
// 	}
// }

// TERNARY Operator
// let harga = 4000;
// if (harga > 5000) {
// 	console.log('Mahal');
// } else if (harga > 2000) {
// 	console.log('Sedang');
// } else {
// 	console.log('Murah');
// }

// harga > 5000 ? console.log('Mahal') : harga > 2000 ? console.log('Sedang') : console.log('Murah');

let tes = false;
let tes2 = false;
// if (tes) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// // TRUE = true |1| string/ada isinya
// // FALSE = false |0|

// || = jika kondisinya false, maka akan melanjutkan ke proses selanjutnya
// && = jika kondisinya true, maka akan melanjutkan ke proses selanjutnya
let shortCircuit = tes || tes2 || 'Salah Semua';
console.log(shortCircuit);
