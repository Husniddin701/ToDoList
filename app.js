const prizes = [
  "Uy",
  "Cobalt",
  "Velosiped",
  "Telefon",
  "Noutbook",
  "Klaviatura",
  "Naushnik",
  "iPhone",
];

let deg = 0;

function spin() {
  let random = Math.floor(Math.random() * 360) + 720;
  deg += random;

  let wheel = document.getElementById("wheel");
  wheel.style.transform = "rotate(" + deg + "deg)";

  setTimeout(() => {
    let d = deg % 360;

    // 🔥 STRELKA TEPADA (270° nuqta)
    let pointerAngle = (360 - d + 270) % 360;

    let index = Math.floor(pointerAngle / 45);

    let win = prizes[index];

    document.getElementById("result").innerHTML =
      "🎉 Siz yutdingiz: <b>" + win + "</b><br>👏 Sizni tabriklaymiz!";

    confetti();
  }, 4000);
}

/* SALYUT */
function confetti() {
  for (let i = 0; i < 80; i++) {
    let div = document.createElement("div");
    div.className = "confetti";
    div.style.left = Math.random() * 100 + "vw";
    div.style.background = "hsl(" + Math.random() * 360 + ",100%,50%)";
    div.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 4000);
  }
}
