import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  QuerySnapshot,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2px5fXe5nX6sJoHjopFGE42AxVraXRCs",
    authDomain: "volta-61437.firebaseapp.com",
    projectId: "volta-61437",
    storageBucket: "volta-61437.appspot.com",
    messagingSenderId: "759060541583",
    appId: "1:759060541583:web:1029fdef41a4c6781f40fa",
    measurementId: "G-67FW1XN5FC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    console.log('Signing in with Google');
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL,
        trips: []
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    signOut(auth);
  };

const getTrips = async (uid) => {
    console.log('Finding user trips');
    console.log(new Date())
  try {
    const querySnapshot = await db.collection("trips").get();
    console.log(querySnapshot.docs.map((doc) => doc.data()));
    // trips.get().then((querySnapshot) => {
    //     const tempDoc = []
    //     querySnapshot.forEach((doc) => {
    //         tempDoc.push({ id: doc.id, ...doc.data() })
    //     })
    //     console.log(tempDoc)
    // })

    // const q = query(collection(db, "trips"));
    // const docs = await getDocs(q);
    // console.log(docs);
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //     photoURL: user.photoURL,
    //     trips: []
    //   });
    // }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    getTrips,
};