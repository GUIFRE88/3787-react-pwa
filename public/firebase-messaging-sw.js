importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBx5p7UIiE1iL1J_kijrGUG-blQnc-nYA8",
  authDomain: "jornada-milhas-e8cbf.firebaseapp.com",
  projectId: "jornada-milhas-e8cbf",
  storageBucket: "jornada-milhas-e8cbf.firebasestorage.app",
  messagingSenderId: "304869468153",
  appId: "1:304869468153:web:731c1d81966c237c213f28"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notificaão em segundo plano ', payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
