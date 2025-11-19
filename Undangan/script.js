// ============================
// NAMA TAMU DARI URL
// ============================
const guestName = new URLSearchParams(location.search).get("untuk");
const guestBox = document.getElementById("forGuest");

if (guestName) {
  guestBox.innerHTML = `Kepada Yth: <br><span style="font-size:24px;color:#ffd77a;">${guestName}</span>`;
} else {
  guestBox.textContent = "";
}

// ============================
// Buka amplop
// ============================
document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("envelope-screen").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("bgAudio").play();
  document.getElementById("openingVideo").play();
});

// ============================
// Countdown
// ============================
function updateCountdown() {
  const target = new Date("2025-11-24T10:00:00+08:00").getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    countdown.textContent = "Acara sedang berlangsung";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${d} hari • ${h} jam • ${m} menit • ${s} detik`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ============================
// KOMENTAR
// ============================
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

document.getElementById("sendComment").addEventListener("click", () => {
  let msg = commentInput.value.trim();
  if (msg === "") return;

  let name = guestName || "Tamu";

  const div = document.createElement("div");
  div.className = "comment-item";

  div.innerHTML = `
    <div class="comment-name">${name}</div>
    <div class="comment-text">${msg}</div>
  `;

  commentList.appendChild(div);
  commentInput.value = "";
});