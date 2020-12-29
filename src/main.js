import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWE2pSG1BHKXGgkaCBVwow1ME5Fqx7P78",
  authDomain: "digital-ring.firebaseapp.com",
  projectId: "digital-ring",
  storageBucket: "digital-ring.appspot.com",
  messagingSenderId: "348388961869",
  appId: "1:348388961869:web:b443ff551585180bb8f604"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
