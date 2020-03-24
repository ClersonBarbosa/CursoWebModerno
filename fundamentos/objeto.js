const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4900.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    Nome: 'Camisa Polo',
    preco: 79.90
}

'{ "Nome": "Camisa Polo", "Preco":, 79.90 }'  // isso é um json
console.log(prod2)