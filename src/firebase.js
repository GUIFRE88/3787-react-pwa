// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5p7UIiE1iL1J_kijrGUG-blQnc-nYA8",
  authDomain: "jornada-milhas-e8cbf.firebaseapp.com",
  projectId: "jornada-milhas-e8cbf",
  storageBucket: "jornada-milhas-e8cbf.firebasestorage.app",
  messagingSenderId: "304869468153",
  appId: "1:304869468153:web:731c1d81966c237c213f28"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "BOWiCMQ95KoItQb4Yok8SePwc7f5tTj2xCThwbWxPT1grQKNqlnrHsafXCs_UE3bcXSWRMNrs-xkI7hlQ2v1Kc8"
    })
    if(currentToken){
      console.log("Token atual: ", currentToken);
    }else{
      console.log("Nenhum token encontrado")
    }
  }catch(err){
    console.log(err);
  }
}