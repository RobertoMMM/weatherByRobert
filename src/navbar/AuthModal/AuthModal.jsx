import useStoreData from "./../../hooks/use-store";
import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import "./AuthModal.css";
const AuthModal = () => {
  const { isOpenModal, setIsOpenModal, isSignIn } = useStoreData();
  console.log(isSignIn)
  if (!isOpenModal) return null;
  return (
    <div className="AuthModal">
      <div className="authform">
        <p className="signMsg">Let's {isSignIn ? "Sign In" : "SignUp"}</p>
        <div className="authentication">
          <div className="emailPassIcons">
            <HiOutlineMail />
          </div>
          <div className="emailPassIcons">
            <HiOutlineKey />
          </div>
          <div className="inputAuth">
            <input type="email" className="inputs" placeholder="Enter your email..."/>
            <input type="password" className="inputs" placeholder="Secret code..."/>
          </div>
        </div>
        <div className="lineOr">or</div>
        <div className="signWithGoogle">
          <FcGoogle /> <p>Sign with google</p>
        </div>
      </div>
      <div className="overlay" onClick={() => setIsOpenModal(false)}></div>
    </div>
  );
};

export default AuthModal;
