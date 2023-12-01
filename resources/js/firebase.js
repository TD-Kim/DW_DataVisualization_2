import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyChTHSbAjDu1N7t98jK01Hc9SWHB_MJ1lo",
  authDomain: "t-01-d1b15.firebaseapp.com",
  projectId: "t-01-d1b15",
  storageBucket: "t-01-d1b15.appspot.com",
  messagingSenderId: "207422918508",
  appId: "1:207422918508:web:d8a73303fb892186fbed49",
  measurementId: "G-7W31LLPQQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

async function addDatas(collectionName, dataObj) {
  // 문서ID 부여
  //   await setDoc(doc(db, "member", "member1"), dataObj);

  // 문서ID 자동
  await addDoc(collection(db, collectionName), dataObj);
}

async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  const docData = await getDoc(docRef);
  // debugger;
  // 문서 필드 데이터 수정
  await updateDoc(docRef, updateInfoObj);
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deleteDatas,
  updateDoc,
  deleteField,
  updateDatas,
};
