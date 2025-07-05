const mensagens = [
"Você é 70% água e 100% incrível 💧✨",
"Parabéns, você encontrou o easter egg mais inútil da internet 🎉",
"Dê um sorriso agora. Isso foi um comando 😁",
"Essa mensagem se autodestruirá em... brincadeira, calma 😅",
"Você sobreviveu ao clique misterioso. Recompensa: +100XP e chapéu",
"Se você está lendo isso, você sabe ler. Parabéns! 📚",
"Cuidado! Esta carta contém 100% de aleatoriedade pura ⚡",
"Você desbloqueou: Conquistador de Cartas Secretas 🏆",
"Plot twist: Você é o personagem principal da sua vida 🎭",
"Esta carta foi escrita por um código muito simpático 🤖💝",
"Você acabou de desperdiçar 3 segundos lendo isso... valeu a pena? 🤔",
"Missão cumprida: Você é oficialmente uma pessoa curiosa 🕵️",
"Se a vida fosse um jogo, você acabou de ganhar pontos extras ⭐",
"Surpresa! Não há surpresa alguma aqui 🎁😅",
"Você é mais raro que um bug que só acontece em produção 🐛✨",
"Esta mensagem vem com garantia de 0% de utilidade 📜",
"Você acabou de ativar o modo: Pessoa Interessante 🎯",
"Se você fosse um emoji, seria este: 🌟",
"Você acaba de receber um abraço virtual 🤗",
"Amor é o único caminho ❤️",
"Você é a razão pela qual alguém sorri hoje 😊",
"Uau! Uma pessoa incrível como você me honra com sua presença aqui! 🌟",
"Você é tão especial que até o código ficou emocionado! 😍",
"Atenção: esta mensagem contém 100% de carinho e 0% de spoiler sobre o jantar.",
"Lembre-se: sua luz é única. Deixe-a brilhar sem medo!",
"Sua jornada é especial. Aproveite cada passo, cada descoberta!",
"Não deixe que um momento de prazer te tire a salvação eterna.",
"Não torneis mal por mal, mas vencei o mal com o bem. - Romanos 12:21 📖",
"Jesus te ama e quer que você o conheça pessoalmente. Ele é o caminho, a verdade e a vida. - João 14:6 ✝️",
];

const carta = document.getElementById("carta");
const mensagem = document.getElementById("mensagem");

carta.addEventListener("click", () => {
if (!carta.classList.contains("open")) {
carta.classList.remove("closed");
carta.classList.add("open");
const sorteada = mensagens[Math.floor(Math.random() * mensagens.length)];
mensagem.innerText = sorteada;
}
});