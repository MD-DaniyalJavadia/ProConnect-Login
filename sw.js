self.addEventListener("install", () => {
  console.log("SW Installed");
});

self.addEventListener("activate", () => {
  console.log("SW Activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

// 🔔 PUSH
self.addEventListener("push", function(event) {
  let data = {};

  if (event.data) {
    data = event.data.json();
  }

  self.registration.showNotification(data.title || "My App", {
    body: data.body || "Notification",
    icon: "icon.png"
  });
});