const nome = "Luis Humberto";
const idade = 18;
const alturaEmMetros = 1.92;
const pesoEmMassa = 87;
const currentYear = new Date().getFullYear();
const imc = (pesoEmMassa/(alturaEmMetros*alturaEmMetros));

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos, ${pesoEmMassa} kg e ${alturaEmMetros} m de altura`);
console.log(`Meu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${currentYear-idade}`);