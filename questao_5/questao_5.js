var Empregado = function(nome , sobrenome , salarioMensal){
	this.nome=nome;
	this.sobrenome = sobrenome;
	this.salarioMensal = salarioMensal;

	this.calcularSalarioAno = function(){
		return this.salarioMensal * 12;
	};

	this.dadosEmpregado = function(){
		return this.nome + " " + this.sobrenome + ", Sálario: " + this.salarioMensal; 
	};
}

var estagiario = new Empregado('Arthur', 'Hardmann', 650);

console.log(estagiario.nome);
console.log(estagiario.sobrenome);
console.log(estagiario.salarioMensal);
console.log(estagiario.dadosEmpregado());
console.log("Salario anual: " + estagiario.calcularSalarioAno());
