for (let i = 0; i < 60; i++) {
const p = document.createElement("div");
p.classList.add("particle");
p.style.top = Math.random() * 100 + "vh";
p.style.left = Math.random() * 100 + "vw";
p.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
p.style.setProperty('--y', `${Math.random() * 100 - 50}px`);
document.body.appendChild(p);
}