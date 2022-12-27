function* getId(id = 0) {
	// Tu código aquí 👈
	for (; ;) { yield id++ }
}

function chartSet() {
	let i = 0, res = "";
	const chartset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
	while (i < 6) {
		res += `${chartset[Math.ceil(Math.random() * chartset.length)]}`;
		i++;
	}

	return res;
}

const id = getId();
console.log(`${chartSet()}${id.next().value}`);

/* **************************************************** */

function* getId2() {
    while (true) {
      yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id2 = getId2();
console.log(id2.next().value);