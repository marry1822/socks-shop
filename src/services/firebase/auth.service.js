import firebase from "@/plugins/firebase";

export const firebaseLogin = async (email, password) => {
  try {
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseLogout = async () => {
  try {
    const data = await firebase.auth().signOut();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const firebaseSignup = async (email, password) => {
  try {
    const data = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendEmailVerification = () => {
  try {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification();
    console.log("Email sent");
  } catch (error) {
    return Promise.reject(error);
  }
};
