import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  getAuth,
  signInWithCredential,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    // try {
    //   const resultsFromGoogle = await signInWithRedirect(auth, provider);
    //   debugger;
    //   console.log(
    //     "🚀 ~ handleGoogleClick ~ resultsFromGoogle:",
    //     resultsFromGoogle
    //   );
    //   console.log("🚀 ~ handleGoogleClick ~ credential:", credential);
    //   const res = await fetch("/api/auth/google", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name: resultsFromGoogle.user.displayName,
    //       email: resultsFromGoogle.user.email,
    //       googlePhotoUrl: resultsFromGoogle.user.photoURL,
    //     }),
    //   });
    //   const data = await res.json();
    //   if (res.ok) {
    //     dispatch(signInSuccess(data));
    //     navigate("/");
    //   }
    // } catch (error) {
    //   debugger;
    //   console.log(error);
    // }
    signInWithRedirect(auth, provider);
  };
  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            googlePhotoUrl: result.user.photoURL,
          }),
        });
        const data = await res.json();
        if (res.ok) {
          dispatch(signInSuccess(data));
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
