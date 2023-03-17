import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCsFIwXMPTosJC2uq8RmlP6-4-oDUyL9n8",
  authDomain: "marketing-app-dc56d.firebaseapp.com",
  databaseURL:
    "https://marketing-app-dc56d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "marketing-app-dc56d",
  storageBucket: "marketing-app-dc56d.appspot.com",
  messagingSenderId: "430802261159",
  appId: "1:430802261159:web:bbead2d790cf164be6b782",
  measurementId: "G-E8P44XLCTZ",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const getData = async (path) => {
  let referans = ref(db, path ?? "/");
  let data;
  await onValue(referans, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};
const setData = async (path,data) => {
  if (path) {
    let referans = ref(db, path);
    await set(referans,{...data});
  }
};
const pushData = async (path,data) => {
    let referans = ref(db, path ?? '/');
    await push(referans,{...data});
}
export { db, auth };
