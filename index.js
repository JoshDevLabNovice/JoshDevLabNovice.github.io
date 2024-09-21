document.addEventListener('DOMContentLoaded', function() {
	const piedra = document.getElementById('piedra')
	const papel = document.getElementById('papel')
	const tijera = document.getElementById('tijera')
	const h4 = document.getElementById('h4')
	const results = document.getElementById('resultados')
	const bt = document.getElementById('bt')

	function jugar(eleccion) {
		let elegido = eleccion;
		let numero = parseInt(Math.random()*3) + 1

		console.log(numero)
		let op
		switch(numero) {
			case 1: op = piedra
			break;
			case 2: op = papel
			break;
			case 3: op = tijera
			break;
		}
		if (elegido == piedra) {
			if (op == piedra) {
			console.log(op)
		h4.innerText = "Ha habido un empate"
			} else {
			if (op == papel) {
				console.log(op)
				h4.innerText = "Perdiste"
			} else if (op = tijera) {
				console.log(op)
				h4.innerText = "Ganaste"

			}
		}
		} else if (elegido == papel) {
			if (op == papel) {
			console.log(op)
			h4.innerText = "Ha habido un empate"
			} else {
			if (op == tijera) {
				console.log(op)
				h4.innerText = "Perdiste"
			} else if (op = piedra) {
				console.log(op)
				h4.innerText = "Ganaste"

			}
		}
		}	else if (elegido == tijera) {
			if (op == tijera) {
			console.log(op)
			h4.innerText = "Ha habido un empate"
			} else {
			if (op == piedra) {
				console.log(op)
				h4.innerText = "Perdiste"
			} else if (op = papel) {
				console.log(op)
				h4.innerText = "Ganaste"

			}
		}
		}

		results.style.display = "flex";
	}

	piedra.addEventListener('click', function() {
		jugar(piedra)
	})
	papel.addEventListener('click', function() {
		jugar(papel)
	})
	tijera.addEventListener('click', function() {
		jugar(tijera)
	})
	bt.addEventListener('click', function() {
	results.style.display = "none"
})
})

