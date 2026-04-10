let deferredPrompt;

// INSTALL PROMPT
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("INSTALL EVENT FIRED");

  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("installBtn");
  if (btn) btn.style.display = "block";
});

// DOM READY (safe)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("installBtn");

  if (btn) {
    btn.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
      }
    });
  }
});

// NOTIFICATIONS
async function enableNotifications() {
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    alert("Permission denied");
    return;
  }

  await navigator.serviceWorker.register("sw.js");
  alert("Notifications Enabled");
}

 function testNotification() {
      navigator.serviceWorker.ready.then(function(reg) {
        reg.showNotification("Hello!", {
          body: "Test notification working 🎉",
          icon: "download.png"
        });
      });
    }
// SERVICE WORKER REGISTER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker Registered"));
}