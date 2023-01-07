const { getFunctions, httpsCallable } = require("firebase/functions")
const { initializeApp } = require('firebase/app')
const { firebaseConfig } = require("./secret")
const { collection, getDocs, getFirestore } = require("firebase/firestore")

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const functions = getFunctions();
const helloWorld = httpsCallable(functions, 'helloWorld');
const addGame = httpsCallable(functions, 'addGame');


async function main() {
  const result = await addGame()
  console.log(result.data)
  const games = collection(db,'games')
  const querySnapshot = await getDocs(games);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

main()