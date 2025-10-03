const text = `
Meu amor, bom sábado!

Quero dizer que estou muito orgulhoso de ver quem você está se tornando.
Estou triste por estar longe de você neste momento, mas feliz em ver você correndo atrás dos seus sonhos e objetivos. Pode ter certeza de que sempre estarei aqui para te apoiar e te ajudar cada vez mais, meu amor.

Já estou morrendo de saudades de você.
Espero que você tenha uma ótima prova e, caso se sinta insegura, lembre-se: eu sempre estarei aqui para te apoiar e te ajudar a melhorar, meu amor.

Espero que aproveite esta viagem. Estarei ansioso para te receber novamente, meu amor.

Assinado: o amor da sua vida.
Tchauzinho, minha medicazinha. ❤️❤️
`;

const typedTextEl = document.getElementById("typed-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedTextEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70); // velocidade da digitação
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
