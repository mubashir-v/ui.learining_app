import {
    GoogleAuthProvider,
    signInWithPopup,
    fetchSignInMethodsForEmail,
  } from "firebase/auth";
  import { auth } from "./firebase";
  const provider = new GoogleAuthProvider();
  
  export const googleSignIn = async () => {
    const response = {};
    try {
      await signInWithPopup(auth, provider);
      // Signed in with Google
      response.message = "Signed in Successfully";
      response.status = 200;
      return response;
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        // The email already exists with another provider
        const email = error.customData.email;
        const methods = await fetchSignInMethodsForEmail(auth, email);
  
        if (methods.includes("password")) {
          response.message =
            "This email is already registered with email/password. Please sign in with email/password.";
          response.status = 300;
          return response;
        }
      } else {
        response.message = "Unexpected Error Occured";
        response.status = 500;
        return response;
      }
    }
  };
  
  export const googleSignOut = async () => {
    return auth.signOut();
  };
  
