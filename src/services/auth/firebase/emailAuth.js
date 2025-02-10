import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
export const emailSignUp = async (email, password) => {
  let response = {};
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    response.message = "User Created";
    response.status = 200;
    // navigate(from, { replace: true });
    return response;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.includes("google.com")) {
        response.message =
          "This email is  associated with a Google account. Please sign in with Google.";
        response.status = 403;
        return response;
      } else {
        // If email/password method is available, proceed with sign-in
        return emailSignIn(email, password);
      }
    } else {
      response.message = "Unexpected Error Please try again";
      response.status = 500;

      return response;
    }
  }
};

export const emailSignIn = async (email, password) => {
  let response = {};
  try {
    await signInWithEmailAndPassword(auth, email, password);
    response.message = "Login Success";
    response.status = 200;
    return response;
  } catch (error) {
    console.log(error)
    if (error.code === "auth/invalid-credential") {
      response.message = "Incorrect Password or Username";
      response.status = 401;
      return response;
    } else if (error.code === "auth/user-not-found") {
      response.message = "No account found with this email";
      response.status = 401;
      return response;
    } else {
      response.message = "Unexpected Error Please Try again";
      response.status = 500;
      return response;
    }
  }
};

export const emailPasswordRest = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const emailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
