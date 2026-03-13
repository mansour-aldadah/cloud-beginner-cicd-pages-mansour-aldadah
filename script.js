// Feature 1: Live clock – proves JS is always running
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

// Feature 2: Button interaction
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("msg").innerText =
    "Hello from JavaScript! CI/CD is working! ✅";
});
