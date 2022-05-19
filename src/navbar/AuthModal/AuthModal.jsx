import { useEffect, useState } from "react";
import useStoreData from "./../../hooks/use-store";
import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import "./AuthModal.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  firestore,
  getDoc,
  updateDoc,
  signInWithPopup,
  googleProvider,
  onAuthStateChanged,
} from "../../firebase/firebaseConfig";

const AuthModal = () => {
  const {
    isOpenModal,
    setIsOpenModal,
    isSignIn,
    setIsSignIn,
    email,
    password,
    setPassword,
    setEmail,
    darkMode,
    changheDark,
    setResponseFromServer,
  } = useStoreData();

  const [userUID, setUserUID] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUserUID(currentUser.uid);
        await setResponseFromServer(currentUser);
        const getResponse = await getDoc(
          doc(firestore, "users", currentUser.uid)
        );
        await changheDark(
          getResponse._document.data.value.mapValue.fields.darkMode.booleanValue
        );
      }
    });
  }, []);

  const update = async () => {
    if (userUID) {
      const docRef = doc(firestore, "users", userUID);
      await updateDoc(docRef, {
        darkMode: darkMode,
      });
    }
  };
  useEffect(() => {
    update();
  }, [darkMode]);

  if (!isOpenModal) return null;

  const googleSign = async (e) => {
    e.preventDefault();
    const response = await signInWithPopup(auth, googleProvider);
    setResponseFromServer(response.user);
    setUserUID(response.user.uid);
    const getResponse = await getDoc(doc(firestore, "users", userUID));
    if (getResponse._document === null) {
      await setDoc(doc(firestore, "users", userUID), {
        darkMode: darkMode,
      });
      await changheDark(
        getResponse._document.data.value.mapValue.fields.darkMode.booleanValue
      );
    } else {
      await changheDark(
        getResponse._document.data.value.mapValue.fields.darkMode.booleanValue
      );
    }
    setIsOpenModal(false);
    setPassword("");
    setEmail("");
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setResponseFromServer(response.user);
      setUserUID(response.user.uid);
      await setDoc(doc(firestore, "users", response.user.uid), {
        darkMode: darkMode,
      });
      setIsOpenModal(false);
      setPassword("");
      setEmail("");
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const loginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      await setResponseFromServer(response.user);
      setUserUID(response.user.uid);
      const responseDoc = await getDoc(doc(firestore, "users", response.user.uid));
      changheDark(
        responseDoc._document.data.value.mapValue.fields.darkMode.booleanValue
      );
      setIsOpenModal(false);
      setPassword("");
      setEmail("");
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    setResponseFromServer(null);
    setUserUID(null);
    signOut(auth);
  };

  return (
    <div>
      <div className={darkMode ? "authformDark" : "authformLight"}>
        <p className="signMsg">Let's {isSignIn ? "Sign In" : "SignUp"} !</p>
        <div className="authentication">
          <div className="emailPassIcons">
            <HiOutlineMail />
          </div>
          <div className="emailPassIcons">
            <HiOutlineKey />
          </div>
          <form className="inputAuth" onSubmit={isSignIn ? loginForm : submit}>
            <input
              type="email"
              className={darkMode ? "inputsDark" : "inputsLight"}
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={darkMode ? "inputsDark" : "inputsLight"}
              placeholder="Secret code..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className={darkMode ? "buttonSubmitDark" : "buttonSubmitLight"}
            >
              Let's Go
            </button>
          </form>
        </div>
        <div className="signWithGoogle" onClick={googleSign}>
          <FcGoogle style={{ fontSize: "1.8rem" }} /> <p>Sign with Google</p>
        </div>
        <div className={darkMode ? "haveAnAccountDark" : "haveAnAccountLight"}>
          {isSignIn ? (
            <p onClick={() => setIsSignIn(false)}>I wan't to sign out</p>
          ) : (
            <p onClick={() => setIsSignIn(true)}>I wan't to sign in</p>
          )}
        </div>
        <button
          onClick={logout}
          className={darkMode ? "logOutDark" : "logOutLight"}
        >
          LogOut
        </button>
      </div>
      <div className="overlay" onClick={() => setIsOpenModal(false)}></div>
    </div>
  );
};

export default AuthModal;
// import { useEffect, useState } from "react";
// import useStoreData from "./../../hooks/use-store";
// import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
// import { FcGoogle } from "react-icons/fc";
// import "./AuthModal.css";
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
//   doc,
//   setDoc,
//   firestore,
//   getDoc,
//   updateDoc,
//   signInWithPopup,
//   googleProvider,
// } from "../../firebase/firebaseConfig";

// const AuthModal = () => {
//   const [userUID, setUserUID] = useState("");
//   const [locations, setLocations] = useState(null);

//   const {
//     isOpenModal,
//     setIsOpenModal,
//     isSignIn,
//     setIsSignIn,
//     email,
//     password,
//     setPassword,
//     setEmail,
//     darkMode,
//     changheDark,
//     setResponseFromServer,
//   } = useStoreData();

//   const update = async () => {
//     if (userUID) {
//       const docRef = doc(firestore, "users", userUID);
//       await updateDoc(docRef, {
//         darkMode: darkMode,
//         location: locations.map(location => location)
//       });
//     }
//   };
//   useEffect(() => {
//     update();
//     console.table(locations);
//   }, [darkMode, locations]);

//   if (!isOpenModal) return null;
//   const googleSign = async (e) => {
//     e.preventDefault();
//     const response = await signInWithPopup(auth, googleProvider);
//     setResponseFromServer(response);
//     setUserUID(response.user.uid);
//     const getResponse = await getDoc(
//       doc(firestore, "users", response.user.uid)
//     );
//     console.log(getResponse);
//     if (getResponse._document === null) {
//       await setDoc(doc(firestore, "users", response.user.uid), {
//         darkMode: darkMode,
//         location: ["New York"],
//       });
//       await changheDark(
//         getResponse._document.data.value.mapValue.fields.darkMode.booleanValue
//       );
//       setLocations(
//         getResponse._document.data.value.mapValue.fields.location.arrayValue.values.map(
//           (doc) => doc.stringValue
//         )
//       );
//     } else {
//       await changheDark(
//         getResponse._document.data.value.mapValue.fields.darkMode.booleanValue
//       );
//       setLocations(
//         getResponse._document.data.value.mapValue.fields.location.arrayValue.values.map(
//           (doc) => doc.stringValue
//         )
//       );
//     }
//     setIsOpenModal(false);
//   };
//   const submit = async (e) => {
//     e.preventDefault();
//     const response = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     setResponseFromServer(response);
//     setUserUID(response.user.uid);
//     await setDoc(doc(firestore, "users", response.user.uid), {
//       darkMode: darkMode,
//       location: ["New York"],
//     });
//     setIsOpenModal(false);
//   };

//   const loginForm = async (e) => {
//     e.preventDefault();
//     const response = await signInWithEmailAndPassword(auth, email, password);
//     setResponseFromServer(response);
//     setUserUID(response.user.uid);
//     // console.log(response);
//     const responseDoc = await getDoc(
//       doc(firestore, "users", response.user.uid)
//     );
//     changheDark(
//       responseDoc._document.data.value.mapValue.fields.darkMode.booleanValue
//     );
//     setLocations(
//       responseDoc._document.data.value.mapValue.fields.location.arrayValue.values.map(
//         (doc) => doc.mapValue.fields.stringValue.stringValue
//       )
//     );
//     setIsOpenModal(false);
//   };

//   const logout = async (e) => {
//     e.preventDefault();
//     const response = signOut(auth);
//     setResponseFromServer(response);
//     setUserUID(null);
//   };

//   return (
//     <div className="AuthModal">
//       <div className="authform">
//         <p className="signMsg">Let's {isSignIn ? "Sign In" : "SignUp"} !</p>
//         <div className="authentication">
//           <div className="emailPassIcons">
//             <HiOutlineMail />
//           </div>
//           <div className="emailPassIcons">
//             <HiOutlineKey />
//           </div>
//           <form className="inputAuth" onSubmit={isSignIn ? loginForm : submit}>
//             <input
//               type="email"
//               className="inputs"
//               placeholder="Enter your email..."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               className="inputs"
//               placeholder="Secret code..."
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit" className="buttonSubmit">
//               Let's Go
//             </button>
//           </form>
//         </div>
//         <div className="signWithGoogle" onClick={googleSign}>
//           <FcGoogle style={{ fontSize: "1.8rem" }} /> <p>Sign with Google</p>
//         </div>
//         <div className="haveAnAccount">
//           {isSignIn ? (
//             <p onClick={() => setIsSignIn(false)}>I wan't to sign out</p>
//           ) : (
//             <p onClick={() => setIsSignIn(true)}>I wan't to sign in</p>
//           )}
//         </div>
//         <button
//           onClick={() =>
//             setLocations((prev) => [
//               ...prev,
//               'MD'
//             ])
//           }
//         >
//           Add
//         </button>
//       </div>
//       <div className="overlay" onClick={() => setIsOpenModal(false)}></div>
//     </div>
//   );
// };

// export default AuthModal;
